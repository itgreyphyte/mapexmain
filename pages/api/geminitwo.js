// pages/api/geminitwo.js
import { GoogleGenerativeAI } from "@google/generative-ai";
// import { getRelevantCompanyData } from "@/lib/getRelevantCompanyData";
import { checkCustomAnswer } from "@/lib/customQA";
import { pipeline } from '@xenova/transformers';
import fs from 'fs';
import path from 'path';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Cosine similarity for embeddings
function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const normB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dot / (normA * normB);
}

// Vector search
async function getRelevantCompanyData(query, topN = 3) {
  const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  const queryEmbedding = await embedder(query, { pooling: 'mean', normalize: true });
  const queryVec = Array.from(queryEmbedding.data);

  const vectorPath = path.resolve('data/vectors.json');
  const raw = fs.readFileSync(vectorPath, 'utf8');
  const vectors = JSON.parse(raw);


  const scored = vectors.map(v => ({
    ...v,
    score: cosineSimilarity(queryVec, v.embedding)
  }));

  const threshold = 0.45;
  const filtered = scored
    .filter(v => v.score > threshold)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN);

  return filtered.map(v => v.text).join('\n\n');

}

async function retryWithBackoff(fn, retries = 3, delay = 1000) {
  let attempt = 0;
  while (attempt < retries) {
    try {
      return await fn();
    } catch (err) {
      attempt++;
      if (attempt >= retries) throw err;
      await new Promise(res => setTimeout(res, delay * attempt));
    }
  }
}

export default async function handler(req, res) {
  const { query, context, chatHistory } = req.method === 'GET' ? req.query : req.body;

  if (!query) {
    res.status(400).json({ message: 'Query parameter is required' });
    return;
  }

  try {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no'
    });

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    let parsedChatHistory = [];
    if (chatHistory) {
      try {
        parsedChatHistory = JSON.parse(chatHistory);
      } catch (e) {
        console.log('Could not parse chat history:', e);
      }
    }

    // Fetch relevant company data based on query
    const relevantData = await getRelevantCompanyData(query, 5); // vector-based data search

    // custome question answers
    const customIntent = checkCustomAnswer(query);
    let intentNote = '';

    if (customIntent) {
      intentNote = `

## AI Guidance Note (Based on Matched Intent):
This user query matches a common pattern. You may answer accordingly but in your own words.

User Intent Detected: "${customIntent}"

## Response Strategy:
- answer one by one like human talk

## Helpful Flow:
- if we have some pdf and images to show then please show download pdf button
- show images if we have

Respond using your natural style, as per Mapex guidelines.
`;
    }


    const systemPrompt = `
You are a **MapexAi assistant of Mapex** a leading geospatial intelligence company. Your role is to engage naturally with visitors and provide helpful information about our services and expertise.

## Core Company Identity
**Mapex** is a leading provider of geospatial intelligence solutions. We transform industries through innovative GIS data engineering, mapping, surveying, CAD/BIM engineering, and AI/ML platforms.
- **Company Name:** Mapex (Azure Clouds now rebranded to Mapex)
- **Tagline:** Building a Smarter, More Connected World
- **About:** GIS Services wing of Azure Knowledge Corporation. We aim to be an irreplaceable GIS partner through centralized quality geospatial data, innovation, and high customer service.
- **Founded:** 2018
- **Headquarters:** Noida, Delhi NCR, India
- **Industry:** Geospatial Intelligence & GIS Solutions
- **Mission:** To accelerate spatial digitization through technological innovations and deliver transformative geospatial solutions across diverse industries.


## CRITICAL RULE: MAXIMUM 200 WORDS PER RESPONSE - NO EXCEPTIONS
- Count your words before responding
- If approaching 400 words, STOP and offer to continue in next message
- Be concise and direct
- Prioritize the most important information first
- basic questions chat answer should be in 30 to 70 words and Start chat like human talk natural and cool vibe
- At last add three questions and that must be one by one list view and ai should understand user enter number as list (1, 2, 3)
- if user select question suggested then get that question and find in our company data


## Relevant Company Info (case studies, about us, services, solutions, team)::
${relevantData}

- please dont't provide wrong information about mapex, answer accoding provided data
- please dont't provide other company infomation here


Current conversation context: ${context || 'New visitor inquiry'}
${intentNote}
`;

    let conversationHistory = [
      { role: 'user', parts: [{ text: systemPrompt }] }
    ];

    if (parsedChatHistory.length > 0) {
      const recentHistory = parsedChatHistory.slice(-8);
      recentHistory.forEach(msg => {
        conversationHistory.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        });
      });
    }

    conversationHistory.push({ role: 'user', parts: [{ text: query }] });

    const generationConfig = {
      temperature: 0.7,
      topP: 0.85,
      topK: 40,
      maxOutputTokens: 1200,
    };

    const result = await retryWithBackoff(() =>
      model.generateContentStream({
        contents: conversationHistory,
        generationConfig,
      })
    );

    let fullResponse = '';

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      if (chunkText) {
        fullResponse += chunkText;
        res.write(`data: ${JSON.stringify({
          text: chunkText,
          fullResponse: fullResponse
        })}\n\n`);
      }
    }

    res.write(`event: done\ndata: ${JSON.stringify({
      text: '',
      fullResponse: fullResponse,
      completed: true
    })}\n\n`);
    res.end();

  } catch (error) {
    console.error('Gemini API Error:', error);

    let errorMessage = "I'm having trouble reaching our systems.";
    if (error?.message?.includes("fetch failed")) {
      errorMessage = "Temporary backend issue. Please refresh or try again.";
    } else if (error?.message?.includes("403")) {
      errorMessage = "Permission issue. Please notify admin.";
    }

    res.write(`data: ${JSON.stringify({ text: errorMessage, error: true })}\n\n`);
    res.write(`event: done\ndata: ${JSON.stringify({ completed: true, error: true })}\n\n`);
    res.end();
  }
}
