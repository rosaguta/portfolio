import React from 'react';
import dynamic from 'next/dynamic';

// const MDXContent = dynamic(()=>import('../markdown/authentication.mdx'))

const MdxComponent = ({path}) =>{
  const MDXContent = dynamic(()=>import(path))
  return(
    <div className='!max-w-none prose prose-invert w-full relative'>
      <MDXContent />
    </div>
  )
}
export default MdxComponent