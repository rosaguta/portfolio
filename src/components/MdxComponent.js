import React from 'react';
import dynamic from 'next/dynamic';

const MDXContent = dynamic(()=>import('./authentication.mdx'))

const MdxComponent = () =>{
  return(
    <>
      <MDXContent/>
    </>
  )
}
export default MdxComponent