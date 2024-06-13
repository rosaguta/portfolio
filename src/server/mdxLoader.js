"use server"
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export async function getMdxContent(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
//   console.log(fileContent)
  const { content } = matter(fileContent);
  console.log(content)
  return fileContent;
}
