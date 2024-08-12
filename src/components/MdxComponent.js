import React from 'react';
import dynamic from 'next/dynamic';

// const MDXContent = dynamic(()=>import('../markdown/authentication.mdx'))



const MdxComponent = ({pathKey}) =>{
  console.log(pathKey)
  const mdxFiles = {
    'about_me': () => import('../markdown/about_me.mdx'),
    'portfolio': () => import('../markdown/portfolio.mdx')

  };
  
  const MDXContent = dynamic(mdxFiles[pathKey]);
  console.log(MDXContent)
    return(
    <div className='!max-w-none prose prose-invert w-full relative'>
     {MDXContent ? <MDXContent /> : <p>Loading...</p>}
    </div>
  )
}
export default MdxComponent