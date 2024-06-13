import { useState, useEffect } from 'react';
import { getMdxContent } from '@/server/mdxLoader';
import { MDXRemote } from 'next-mdx-remote';

export default function Browser({
  handleCloseClick,
  handleSizeClick,
  handleMinimizeClick,
  isMinimized,
  isMaximized,
}) {
  const [browserStyle, setBrowserStyle] = useState({ width: '1000px', height: '600px' });
  const [mdxContent, setMdxContent] = useState()
  useEffect(() => {
    if (isMaximized) {
      setBrowserStyle({ width: '100%', height: '100%' });
    } else {
      setBrowserStyle({ width: '1000px', height: '600px' });
    }
  }, [isMaximized]);
  useEffect(()=>{
    setMdxContent(getMdxContent("src\\markdown\\authentication.mdx"))
  },[])
  if (isMinimized) {
    return null;
  }

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <div className="bg-neutral-900 rounded-md relative" style={browserStyle}>
        <div className="bg-neutral-950 rounded-t-md justify-between flex w-full h-12">
          <div className="flex items-center">
            <div className="bg-neutral-900 rounded-md w-52 h-8 ml-2 flex items-center p-1">
              <img className="object-scale-down h-8 w-8 mr-1" src="/blahaj.png" />
              <p className="text-sm">tab#1</p>
            </div>
            <div className="bg-neutral-900 rounded-md w-52 h-8 ml-2 flex items-center p-1">
              <img className="object-scale-down h-8 w-8 mr-1" src="/blahaj.png" />
              <p className="text-sm">tab#2</p>
            </div>
            <div className="bg-neutral-900 rounded-md w-52 h-8 ml-2 flex items-center p-1">
              <img className="object-scale-down h-8 w-8 mr-1" src="/blahaj.png" />
              <p className="text-sm">tab#3</p>
            </div>
          </div>
          <div className="flex items-center mr-1">
            <div
              className="w-8 h-8 mr-1 bg-purple-800 rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleMinimizeClick}>
              <p>-</p>
            </div>
            <div
              className="w-8 h-8 mr-1 bg-purple-800 rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleSizeClick}>
              <p>[ ]</p>
            </div>
            <div
              className="w-8 h-8 mr-1 bg-purple-800 rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleCloseClick}>
              <p>X</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          {mdxContent}
        </div>
      </div>
    </div>
  );
}
