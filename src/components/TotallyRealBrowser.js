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
  const [browserStyle, setBrowserStyle] = useState({ width: '70%', height: '70%' });
  const [browserCenterStyle, setBrowserCenterStyle] = useState({ 'align-items': 'center' })
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    if (isMaximized) {
      setBrowserStyle({ width: '100%', height: '95%' });
      setBrowserCenterStyle({ 'align-items': 'baseline' })
    } else {
      setBrowserStyle({ width: '70%', height: '70%' });
      setBrowserCenterStyle({ 'align-items': 'center' })
    }
  }, [isMaximized]);
  useEffect(() => {
  }, [])
  if (isMinimized) {
    return null;
  }

  const handleActiveTab = (i) => {
    console.log("Function called with index: " + i);
    console.log("Current activeTab: ", activeTab); // Before update
    setActiveTab(i);
    console.log("Updated activeTab: ", i); // After update
  };


  return (
    <div className="absolute h-screen w-screen flex justify-center" style={browserCenterStyle}>
      <div className="bg-neutral-900 rounded-md z-20 " style={browserStyle}>
        <div className="bg-neutral-950 rounded-t-md justify-between flex w-full h-12">
          <div className="flex items-center">
          {openendTabs.map((item, index) => {
            console.log("Tab index: " + index); // Debugging index
            return (
              <div key={index} className="bg-neutral-900 rounded-md w-52 h-8 ml-2 flex items-center p-1 justify-between cursor-pointer">
                <div className='flex items-center' onClick={() => handleActiveTab(index)}>
                  <img className="object-scale-down h-8 w-8 mr-1" src={item.icon} />
                  <p className="text-sm">{item.title}</p>
                </div>
                <div className='flex items-center mr-2'>
                  <p className='text-slate-300'>x</p>
                </div>
              </div>
            );
          })}
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
          {openendTabs.length != 0 &&(
            <MdxComponent pathKey={openendTabs[activeTab].pathKey} />
          )}
        </div>
      </div>
    </div>
  );
}
