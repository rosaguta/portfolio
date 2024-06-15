"use server"
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getMdxContent(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContent);
  return content;
}
