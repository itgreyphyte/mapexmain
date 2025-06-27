// lib/vectorStore.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChromaClient } from "chromadb";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const client = new ChromaClient();
const collectionName = "mapex-data";

// Gemini embedding function
async function embedText(text) {
  const model = genAI.getGenerativeModel({ model: "embedding-001" });
  const result = await model.embedContent({ content: text });
  return result.embedding.values;
}

// Store multiple chunks into Chroma vector DB
export async function storeChunks(chunks) {
  const collection = await client.getOrCreateCollection({
    name: collectionName,
    embeddingFunction: { generate: embedText }, // custom embedding function
  });

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const id = `chunk-${i}`;
    const vector = await embedText(chunk);
    await collection.add({
      ids: [id],
      embeddings: [vector],
      documents: [chunk],
      metadatas: [{}],
    });
  }
}

// Get top K relevant chunks for a user query
export async function getRelevantChunks(query, topK = 4) {
  const collection = await client.getOrCreateCollection({
    name: collectionName,
    embeddingFunction: { generate: embedText }, // custom embedding function again
  });

  const queryVector = await embedText(query);
  const results = await collection.query({
    queryEmbeddings: [queryVector],
    nResults: topK,
  });

  return results.documents[0]; // list of strings
}
