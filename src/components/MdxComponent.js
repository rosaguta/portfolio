import React from 'react';
import dynamic from 'next/dynamic';

// const MDXContent = dynamic(()=>import('../markdown/authentication.mdx'))



const MdxComponent = ({pathKey}) =>{
  const mdxFiles = {
    'authentication': () => import('../markdown/authentication.mdx'),
    'smtindifferent': () => import('../markdown/smtindifferent.mdx')
  };
  
  const MDXContent = dynamic(mdxFiles[pathKey], { ssr: false });
  // console.log(MDXContent)
    return(
    <div className='!max-w-none prose prose-invert w-full relative'>
     {MDXContent ? <MDXContent /> : <p>Loading...</p>}
    </div>
  )
}
export default MdxComponent