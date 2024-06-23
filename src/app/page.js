"use client";
import BootScreenAnim from '@/components/BootScreen';
import BottomBar from '@/components/BottomBar';
import TopBar from '@/components/TopBar';
import Browser from '@/components/TotallyRealBrowser';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useWindowDimensions from '@/functions/useWindowDimensions';

export default function Home() {
  const [showBootScreen, setShowBootScreen] = useState(true);
  const [isBrowserActive, setIsBrowserActive] = useState(false);
  const [isBrowserMinimized, setIsBrowserMinimized] = useState(false);
  const [isBrowserMaximized, setIsBrowserMaximized] = useState(false);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBootScreen(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseClick = () => {
    setIsBrowserActive(false);
  };

  const handleMinimizeClick = () => {
    setIsBrowserMinimized(!isBrowserMinimized);
  };

  const handleSizeClick = () => {
    setIsBrowserMaximized(!isBrowserMaximized);
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
            className="bg-[url('/Rosey-stars.png')] bg-cover bg-center h-screen"
          >
            {isBrowserActive && (
              <AnimatePresence>
                {!isBrowserMinimized && (
                  <motion.div
                    initial={{ y: height / 1.8, x: -width / 2, opacity: 0.25, scale: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: height / 1.8, x: -width / 2, opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}>
                    <Browser
                      handleCloseClick={handleCloseClick}
                      handleMinimizeClick={handleMinimizeClick}
                      handleSizeClick={handleSizeClick}
                      isMinimized={isBrowserMinimized}
                      isMaximized={isBrowserMaximized}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            <div className='grid grid-rows-5 grid-flow-col p-10 items-centers h-screen w-screen'>
                <img src="/discord.png" className="object-scale-down h-12 w-12" alt="test"></img>
                <img src="/github_edit.png" className="object-scale-down h-12 w-12"></img>
                <img src="/Steam_icon_logo.svg.png" className="object-scale-down h-12 w-12"></img>
                <img src="/twitteer.png" className="object-scale-down h-12 w-12"></img>

                <img src="/discord.png" className="object-scale-down h-12 w-12" alt="test"></img>
                <img src="/github_edit.png" className="object-scale-down h-12 w-12"></img>
                <img src="/Steam_icon_logo.svg.png" className="object-scale-down h-12 w-12"></img>
                <img src="/twitteer.png" className="object-scale-down h-12 w-12"></img>

                <img src="/discord.png" className="object-scale-down h-12 w-12" alt="test"></img>
                <img src="/github_edit.png" className="object-scale-down h-12 w-12"></img>
                <img src="/Steam_icon_logo.svg.png" className="object-scale-down h-12 w-12"></img>
                <img src="/twitteer.png" className="object-scale-down h-12 w-12"></img>

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
            <div className="md:block hidden">
              <BottomBar BrowserActive={isBrowserActive} handleBrowserVisibility={handleMinimizeClick} />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
