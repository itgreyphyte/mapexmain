// scripts/loadCompanyData.js
import fs from "fs";
import path from "path";
import { storeChunks } from "../lib/vectorStore.js";


async function run() {
  const filePath = path.join(process.cwd(), "data", "mapex.md");
  const markdown = fs.readFileSync(filePath, "utf-8");

  // Split the markdown into ~1000-character chunks (customize if needed)
  const chunks = markdown.match(/(.|[\r\n]){1,1000}/g);
  console.log(`Storing ${chunks.length} chunks...`);
  await storeChunks(chunks);
  console.log("✅ Company data embedded and stored.");
}

run();
