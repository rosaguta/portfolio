import { useState, useEffect } from 'react';
import MdxComponent from './MdxComponent';
import '../styles/removescroll.css'

export default function Browser({
  handleCloseClick,
  handleSizeClick,
  handleMinimizeClick,
  isMinimized,
  isMaximized,
  openendTabs,
  setTabOpened
}) {
  const [activeTab, setActiveTab] = useState(openendTabs.length - 1);
  const [dummyState, setDummyState] = useState(0);
  const browserStyle = isMaximized ? 'w-full h-[95%]' : 'w-[85%] h-[85%]  md:w-[70%] md:h-[70%]';
  const browserCenterStyle = isMaximized ? 'items-baseline' : 'items-center';

  useEffect(() => {
    setActiveTab(activeTab);
  }, [activeTab]);

  useEffect(() => {
    setActiveTab(openendTabs.length - 1);
  }, [openendTabs]);

  if (isMinimized || openendTabs.length === 0) {
    return null;
  }

  const handleTabClose = (i) => {
    const newTabs = [...openendTabs];
    newTabs.splice(i, 1);
    setTabOpened(newTabs);
    setActiveTab((prevActiveTab) => (prevActiveTab > 0 ? prevActiveTab - 1 : 0));
    setDummyState((prev) => prev + 1);
  };

  return (
    <div className={`absolute h-screen w-screen flex justify-center ${browserCenterStyle}`}>
      <div className={`bg-neutral-900 rounded-md z-20 ${browserStyle}`}>
        <div className="bg-neutral-950 rounded-t-md justify-between flex w-full h-12">
          <div className="flex items-center basis-full overflow-hidden">
            {openendTabs.map((item, index) => (
              <div className="basis-52 truncate" key={index}>
                <div
                  className={`rounded-md flex h-8 ml-2 items-center p-1 justify-between cursor-pointer overflow-hidden ${
                    activeTab === index ? 'bg-neutral-800' : 'bg-neutral-900'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center flex-1 overflow-hidden">
                    <img className="object-scale-down h-8 w-8 mr-1" src={item.icon} alt="icon" />
                    <p className="text-sm flex-1 truncate hidden md:block">{item.title}</p>
                  </div>
                  <div
                    className="flex items-center mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTabClose(index);
                    }}
                  >
                    <p className="text-slate-300">X</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center mr-1 shrink-0">
            <div
              className="w-8 h-8 mr-1 bg-purple-800 rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleMinimizeClick}
            >
              <p>-</p>
            </div>
            <div
              className="w-8 h-8 mr-1 bg-purple-800 rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleSizeClick}
            >
              <p>[ ]</p>
            </div>
            <div
              className="w-8 h-8 mr-1 bg-purple-800 rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleCloseClick}
            >
              <p>X</p>
            </div>
          </div>
        </div>
        <div className="py-3 px-10 mx-auto h-[91%] overflow-y-auto no-scrollbar">
          {openendTabs.length !== 0 && openendTabs[activeTab] !== undefined && (
            <MdxComponent pathKey={openendTabs[activeTab].pathKey} />
          )}
        </div>
      </div>
    </div>
  );
}
