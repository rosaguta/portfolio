import React, { useEffect, useState } from 'react';
import { MDXRemote } from 'next-mdx-remote'; // Import for rendering MDX content
import { getMdxContent } from '@/server/mdxLoader';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import { MDXEmbedProvider } from 'mdx-embed';

const MdxComponent = ({ pathKey }) => {
  const [MDXContent, setMDXContent] = useState(null);

  const mdxFiles = {
    'about_me': 'src/markdown/about_me.mdx',
    'portfolio': 'src/markdown/portfolio.mdx',
    'quotes': 'src/markdown/quotes.mdx'

  };

  useEffect(() => {
    const fetchData = async () => {
      const content = await getMdxContent(mdxFiles[pathKey]);
      setMDXContent(content);
    };
    fetchData();
  }, [pathKey]);

  return (
    <div className="!max-w-none prose prose-invert w-full relative">
      <MDXEmbedProvider>
        {MDXContent ? <MDXRemote {...MDXContent} /> : <p>Loading...</p>}
      </MDXEmbedProvider>
    </div>
  );
};

export default MdxComponent;
