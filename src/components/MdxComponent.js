import React, { useEffect, useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { getMdxContent } from '@/server/mdxLoader';
import DisplayQuoteCount from './Mdx/DisplayQuoteCount';
import { getQuoteCountOnServer } from '@/server/quoteService';
import { ExternalLink } from 'lucide-react';

const MdxComponent = ({ pathKey }) => {
  const [MDXContent, setMDXContent] = useState(null);
  const [QuoteCount, setQuoteCount] = useState([0,0,0])

  const mdxFiles = {
    'about_me': '/markdown/about_me.mdx',
    'portfolio': '/markdown/portfolio.mdx',
    'quotes': '/markdown/quotes.mdx'

  };


  useEffect(() => {
    const fetchData = async () => {
      const content = await getMdxContent(mdxFiles[pathKey]);
      setMDXContent(content);
    };
    const fetchQuoteCount = async () =>{
      setQuoteCount(await getQuoteCountOnServer())
    }
    fetchData();
    if(pathKey == 'quotes'){
      fetchQuoteCount()
    }
  }, [pathKey]);

  return (
    <div className="!max-w-none prose prose-invert w-full md:text-lg relative">
      {MDXContent ? <MDXRemote {...MDXContent} components={{
        DisplayQuoteCount: () => <DisplayQuoteCount quoteCount={QuoteCount[0]} rizzCount={QuoteCount[1]} insultCount={QuoteCount[2]} />,
        LinkIcon: () => <ExternalLink size={20} className="self-center w-5 h-5 rounded-full mx-1" />
      }}
      /> : <p>Loading...</p>}
    </div>
  );
};

export default MdxComponent;
