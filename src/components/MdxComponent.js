import React from 'react';
import dynamic from 'next/dynamic';

const MDXContent = dynamic(()=>import('./authentication.mdx'))

const MdxComponent = () =>{
  return(
    <div className='!max-w-none prose prose-invert w-full relative'>
      <MDXContent />
    </div>
  )
}
export default MdxComponent