// pages/api/ollama.js
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { query } = req.query;
  const companyData = fs.readFileSync(path.join(process.cwd(), "data/mapex.md"), 'utf8');
  const payload = {
    model: 'mistral',
    stream: true,
    messages: [
      { role: 'system', content: `Only based on:\n${companyData}` },
      { role: 'user', content: query }
    ],
  };

  const response = await fetch('http://127.0.0.1:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop();

    for (const line of lines) {
      try {
        const obj = JSON.parse(line);
        const text = obj.message?.content;
        if (text) res.write(`data: ${JSON.stringify({ text })}\n\n`);
      } catch {}
    }
  }
  res.write(`event: done\ndata: {}\n\n`);
  res.end();
}
