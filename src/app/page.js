"use client";
import BootScreenAnim from '@/components/BootScreen';
import BottomBar from '@/components/BottomBar';
import TopBar from '@/components/TopBar';
import Browser from '@/components/TotallyRealBrowser';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useWindowDimensions from '@/functions/useWindowDimensions';
import '../styles/removescroll.css'
import Image from 'next/image';
import me from '../../public/Roseicon.png'
import roseflower from '../../public/Rose.png'
import Quote from '../../public/quote.png'



export default function Home() {
  const [showBootScreen, setShowBootScreen] = useState(true);
  const [isBrowserActive, setIsBrowserActive] = useState(false);
  const [isBrowserMinimized, setIsBrowserMinimized] = useState(false);
  const [isBrowserMaximized, setIsBrowserMaximized] = useState(false);
  const { width, height } = useWindowDimensions();
  const [tabsOpenend, setTabOpenend] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBootScreen(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(()=>{
    if(tabsOpenend.length === 0){
      setIsBrowserActive(false)
    }
  },[tabsOpenend])
  const handleCloseClick = () => {
    setTabOpenend([])
    setIsBrowserActive(false);
  };

  const handleMinimizeClick = () => {
    setIsBrowserMinimized(!isBrowserMinimized);
  };

  const handleSizeClick = () => {
    setIsBrowserMaximized(!isBrowserMaximized);
  };


  const handleTabClick = (tabclicked) => {
    setIsBrowserActive(true);
    setIsBrowserMinimized(false)
    setTabOpenend(oldArr => [...oldArr, tabclicked]);
  };

  return (
    <div className="h-screen w-screen overflow-hidden static">
      {showBootScreen ? (
        <div>
          <BootScreenAnim />
        </div>
      ) : (
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[url('/Rosey-stars.png')] bg-cover bg-center h-screen "
          >
            {tabsOpenend.length !== 0 && (
              <div>
                {isBrowserActive && (
                  <AnimatePresence>
                    {!isBrowserMinimized && (
                      <motion.div
                        initial={{ y: height, x: -width / 2.1, opacity: 0.25, scale: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: height, x: -width / 2.1, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}>
                        {tabsOpenend.length > 0 && (
                          <Browser
                            handleCloseClick={handleCloseClick}
                            handleMinimizeClick={handleMinimizeClick}
                            handleSizeClick={handleSizeClick}
                            isMinimized={isBrowserMinimized}
                            isMaximized={isBrowserMaximized}
                            openendTabs={tabsOpenend}
                            setTabOpened={setTabOpenend}
                          />)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            )}
            <div className='relative grid grid-rows-5 grid-flow-col justify-items-center py-12 h-screen w-screen z-10'>
              <div className="w-20 md:w-24 justify-center items-center text-center cursor-pointer" onClick={() => handleTabClick({ pathKey: 'about_me', icon: "/Roseicon.png", title: "About me" })}>
                <Image src={me} alt="test"></Image>
                <p className='m-2 text-sm'>About.me</p>
              </div>
              <div className="w-16 justify-center items-center text-center cursor-pointer" onClick={() => handleTabClick({ pathKey: 'portfolio', icon: "/Rose.png", title: "Porfolio" })}>
                <Image className='' src={roseflower} alt="test"></Image>
                <p className='m-2 text-sm break-normal'>Porfolio. project</p>
              </div>
              <div className="w-16 justify-center items-center text-center cursor-pointer" onClick={() => handleTabClick({ pathKey: 'quotes', icon: "/quote.png", title: "Quotes project" })}>
                <Image src={Quote} alt="test"></Image>
                <p className='m-2 text-sm break-normal'>Quotes. project</p>
              </div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="md:hidden block">
              <TopBar BrowserActive={isBrowserActive} handleBrowserVisibility={handleMinimizeClick}/>
            </div>
            <div className="md:block hidden ">
              <BottomBar BrowserActive={isBrowserActive} handleBrowserVisibility={handleMinimizeClick} />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
