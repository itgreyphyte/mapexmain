// lib/getRelevantCompanyData.js
import fs from 'fs';
import path from 'path';

export function getRelevantCompanyData(query, maxWords = 350) {
  const filePath = path.join(process.cwd(), 'data', 'mapex.md');
  const content = fs.readFileSync(filePath, 'utf8');
  const sections = content.split(/^##\s+/gm).slice(1); // Remove empty before first "##"

  let matches = [];

  for (const section of sections) {
    const lines = section.split('\n');
    const title = lines[0].trim().toLowerCase();
    const body = lines.slice(1).join(' ').toLowerCase();
    const sectionFull = `## ${lines[0]}\n${lines.slice(1).join('\n')}`;

    if (
      query.toLowerCase().includes(title) ||
      body.includes(query.toLowerCase())
    ) {
      matches.push(sectionFull);
    }
  }

  // Fallback if no good matches found
  if (matches.length === 0) {
    matches = sections.slice(0, 2).map(sec => '## ' + sec.trim()); // default top sections
  }

  const joined = matches.join('\n').split(/\s+/).slice(0, maxWords).join(' ');
  return joined;
}
