import { useState, useEffect } from 'react';;
import MdxComponent from './MdxComponent';
import '../styles/removescroll.css'

export default function Browser({
  handleCloseClick,
  handleSizeClick,
  handleMinimizeClick,
  isMinimized,
  isMaximized,
  openendTabs
}) {
  const [browserStyle, setBrowserStyle] = useState({width: '70%', height: '70%'});
  const [browserCenterStyle , setBrowserCenterStyle] = useState({ 'align-items':'center' })
  // const [mdxContent, setMdxContent] = useState()
  useEffect(() => {
    if (isMaximized) {
      setBrowserStyle({ width: '100%', height: '95%' });
      setBrowserCenterStyle({'align-items':'baseline'})
    } else {
      setBrowserStyle({ width: '70%', height: '70%' });
      setBrowserCenterStyle({'align-items':'center'})
    }
  }, [isMaximized]);
  useEffect(() => {
    // setMdxContent(getMdxContent("src\\markdown\\authentication.mdx"))
  }, [])
  if (isMinimized) {
    return null;
  }

  return (
    <div className="absolute w-screen h-screen flex justify-center" style={browserCenterStyle}>
      <div className="bg-neutral-900 rounded-md " style={browserStyle}>
        <div className="bg-neutral-950 rounded-t-md justify-between flex w-full h-12">
          <div className="flex items-center">
            <div className="bg-neutral-900 rounded-md w-52 h-8 ml-2 flex items-center p-1">
              <img className="object-scale-down h-8 w-8 mr-1" src="/blahaj.png" />
              <p className="text-sm">Authentication</p>
            </div>
            {/* <div className="bg-neutral-900 rounded-md w-52 h-8 ml-2 flex items-center p-1">
              <img className="object-scale-down h-8 w-8 mr-1" src="/blahaj.png" />
              <p className="text-sm">tab#2</p>
            </div>
            <div className="bg-neutral-900 rounded-md w-52 h-8 ml-2 flex items-center p-1">
              <img className="object-scale-down h-8 w-8 mr-1" src="/blahaj.png" />
              <p className="text-sm">tab#3</p>
            </div> */}
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
        <div className='py-3 px-10 mx-auto h-[91%] overflow-y-auto no-scrollbar'>
            <MdxComponent/>
        </div>
      </div>
    </div>
  );
}
