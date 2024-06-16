import React from 'react';
import dynamic from 'next/dynamic';

const MDXContent = dynamic(()=>import('./authentication.mdx'))

const MdxComponent = () =>{
  return(
    <div className='prose prose-invert'>
      <MDXContent />
    </div>
  )
}
export default MdxComponent