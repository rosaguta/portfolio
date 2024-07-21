"use client";
import BootScreenAnim from '@/components/BootScreen';
import BottomBar from '@/components/BottomBar';
import TopBar from '@/components/TopBar';
import Browser from '@/components/TotallyRealBrowser';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useWindowDimensions from '@/functions/useWindowDimensions';
import '../styles/removescroll.css'

export default function Home() {
  const [showBootScreen, setShowBootScreen] = useState(true);
  const [isBrowserActive, setIsBrowserActive] = useState(true);
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
                        <Browser
                          handleCloseClick={handleCloseClick}
                          handleMinimizeClick={handleMinimizeClick}
                          handleSizeClick={handleSizeClick}
                          isMinimized={isBrowserMinimized}
                          isMaximized={isBrowserMaximized}
                          openendTabs={tabsOpenend}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            )}
            <div className='relative grid grid-rows-5 grid-flow-col justify-items-center py-12 h-screen w-screen z-10'>
              <div className="w-24 justify-center items-center text-center cursor-pointer" onClick={() => handleTabClick({ pathKey: 'authentication', icon: "/Roseicon.png", title: "authentication" })}>
                <img src="/Roseicon.png" alt="test"></img>
                <p className='m-2'>About.me</p>
              </div>
              <div className="w-24 justify-center items-center text-center" onClick={() => handleTabClick({ pathKey: 'smtindifferent', icon: "/Roseicon.png", title: "WOAH" })}>
                <img src="/Roseicon.png" alt="test"></img>
                <p className='m-2'>ME :3</p>
              </div>
              <div className="w-24 justify-center items-center text-center">
                <img src="/Roseicon.png" alt="test"></img>
                <p className='m-2'>ME :3</p>
              </div>
              <div className="w-24 justify-center items-center text-center">
                <img src="/Roseicon.png" alt="test"></img>
                <p className='m-2'>ME :3</p>
              </div>
              <div className="w-24 justify-center items-center text-center">
                <img src="/Roseicon.png" alt="test"></img>
                <p className='m-2'>ME :3</p>
              </div>

              <div className="w-24 justify-center items-center text-center cursor-pointer" onClick={() => handleTabClick({ path: "../markdown/somethingelse.mdx", icon: "/twitteer.png", title: "somethingelse" })}>
                <img src="/Roseicon.png" alt="test"></img>
                <p className='m-2'>ME :3</p>
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
            </div>
            <div className="md:hidden block">
              <TopBar />
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
