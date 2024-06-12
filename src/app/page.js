"use client";
import BootScreenAnim from '@/components/BootScreen';
import BottomBar from '@/components/BottomBar';
import TopBar from '@/components/TopBar';
import Browser from '@/components/TotallyRealBrowser';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showBootScreen, setShowBootScreen] = useState(true);
  const [isBrowserVisible, setIsBrowserVisible] = useState(true);
  const [isBrowserMinimized, setIsBrowserMinimized] = useState(false);
  const [isBrowserMaximized, setIsBrowserMaximized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBootScreen(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseClick = () => {
    setIsBrowserVisible(false);
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
            {isBrowserVisible && (
              <Browser
                handleCloseClick={handleCloseClick}
                handleMinimizeClick={handleMinimizeClick}
                handleSizeClick={handleSizeClick}
                isMinimized={isBrowserMinimized}
                isMaximized={isBrowserMaximized}
              />
            )}
            <div className="md:hidden block">
              <TopBar />
            </div>
            <div className="md:block hidden">
              <BottomBar />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
