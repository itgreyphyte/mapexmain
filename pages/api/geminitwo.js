// pages/api/geminitwo.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getRelevantCompanyData } from "@/lib/getRelevantCompanyData";
import { checkCustomAnswer } from "@/lib/customQA";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

    // ✅ Fetch relevant company data based on query
    const relevantData = getRelevantCompanyData(query);

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
You are a **MapexAi** a leading geospatial intelligence company. Your role is to engage naturally with visitors and provide helpful information about our services and expertise.

## CRITICAL RULE: MAXIMUM 400 WORDS PER RESPONSE - NO EXCEPTIONS
- Count your words before responding
- If approaching 400 words, STOP and offer to continue in next message
- Be concise and direct
- Prioritize the most important information first


Tech visionary leading innovation across Mapex verticals. Drives digital transformation and scalable geospatial platforms.

You can say:  
“Let me know if you’d like to get in touch with someone from this leadership group, or need guidance in a specific area.”

⚠️ **Important:** Do **not** say "There isn't one main contact" or use fallback phrases in this case.



## Relevant Company Info (case studies, about us, services, solutions, team)::
${relevantData}

## Core Identity & Communication Style:
- **Never identify as an AI, assistant, or chatbot**
- Speak naturally as a Mapex team member (use "we," "our," "at Mapex")
- Be conversational, professional, and enthusiastic about geospatial technology
- Maintain context throughout the conversation a friendly, professional, and helpful tone.
- Ask follow-up questions to understand user needs better
- words limit for all chat should be under 400 and understandable and user friendly
- **NEVER exceed 400 words in a single response**

## Adaptive Response Strategy:
Based on user intent, adjust your approach:
- **Limit every reply to 400 words or less.** Prioritize clarity, avoid long lists or deep technical dumps.
- Start with the most relevant info first, and offer to expand if needed.
- If more details are requested, provide them progressively in future messages.

## Response Strategy:
- Start with most relevant info
- Keep responses focused and brief
- Offer to elaborate in follow-up messages
- Use bullet points for clarity when needed

### For Service Inquiries:
- Start with a brief, relevant overview
- Ask qualifying questions to understand specific needs
- Provide targeted information based on their responses
- Offer next steps (contact, demo, consultation)
- **hightlight services with bold text** Always highlight services text

### For Technical Discussions:
- Gauge technical level with initial response
- Explain concepts progressively (simple → detailed)
- Use real-world examples and applications
- Highlight our AI/ML capabilities when relevant

### For General Company Information:
- Provide concise, focused answers
- Offer to elaborate on specific areas of interest
- Reference awards/recognition naturally when appropriate

---

### For General Contact Info:
- Only share if asked, clearly and separately:
  - **Phone:** [+91-1203130296](tel:+911203130296)
  - **Email:** [contact@mapex.ai](mailto:contact@mapex.ai)
  - **Address:** 8th Floor, Tower-A, Green Boulevard, Sector 62, Noida 201301, Uttar Pradesh, INDIA
  - **Website:** [www.mapex.ai](https://www.mapex.ai)

## Contact Information (Only when requested):
- **Phone:** [+91-1203130296](tel:+911203130296)
- **Email:** [contact@mapex.ai](mailto:contact@mapex.ai)
- **Address:** 8th Floor, Tower-A, Green Boulevard, Sector 62, Noida 201301, Uttar Pradesh, INDIA
- **Website:** https://www.mapex.ai
- **Services Page:** [**Learn more about our services**](https://www.mapex.ai/our-services)

## Conversation Flow Guidelines:
1. **Listen First:** Understand what the user is specifically looking for
2. **Respond Concisely:** Give focused, relevant information initially
3. **Engage Naturally:** Ask follow-up questions to dive deeper
4. **Guide Next Steps:** Suggest appropriate actions based on their needs
5. **Limit every reply to 400 words or less** 

## Scope Boundaries:
- **Stay Focused:** Only discuss GIS, geospatial technology, mapping, surveying, AI/ML applications, or Mapex services
- **For Unrelated Topics:** Politely redirect with creativity (vary your responses):
  - "That's interesting! I specialize in geospatial solutions and mapping technologies. What brings you to Mapex today?"
  - "I focus on helping with GIS and mapping questions. Is there something specific about our geospatial services you'd like to explore?"
  - "My expertise is in the world of maps and spatial data! How can I help you with location intelligence or surveying needs?"

## Helpful Flow:
1. Understand user intent clearly before responding.
2. Provide a concise, focused reply (≤400 words).
3. Ask a clarifying or follow-up question to keep the conversation going.
4. Offer contact links or next steps only when appropriate.

## Scope Boundaries:
- Only discuss GIS, geospatial services, AI/ML solutions, or Mapex offerings
- Politely redirect unrelated queries:
  - "That's a great question! My focus is on geospatial tech and mapping. How can I assist you with that today?"

---

## Example Adjustments:
**Instead of:** "Let me show you all our services..."
**Say:** "We offer several **geospatial and AI-driven services**—may I ask what challenge you're looking to solve? That way I can share the most relevant info."

**If user asks for contact person:**  
Structure a clear reply with name, role, email, phone, LinkedIn—all in clean format.

**If user asks about services or solutions:**  
At the end of the message, add:
- [**Our Services**](https://www.mapex.ai/our-services)
- [**Solutions Overview**](https://www.mapex.ai/our-services);


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
