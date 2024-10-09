"use server";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import { serialize } from 'next-mdx-remote/serialize'

export async function getMdxContent(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  
  // Optional: Parse front-matter if your file contains it
  const { content } = matter(fileContent);
  
  // Process and serialize MDX content
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });
  
  return mdxSource;
}