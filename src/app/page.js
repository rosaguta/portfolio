"use client"
import BootScreenAnim from '@/components/BootScreen';
import BottomBar from '@/components/BottomBar';
import TopBar from '@/components/TopBar';
import Socials from '@/components/Socials';
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';

export default function Home() {
  const [showBootScreen, setShowBootScreen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBootScreen(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden">
      {showBootScreen ? (
        <div>
          <BootScreenAnim />
        </div>
      ) : (
        <div className="">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[url('/Rosey-stars.png')] bg-cover bg-center h-screen">
          </motion.div>
          
          <div className='md:block hidden'>
            <BottomBar />
            <Socials />
          </div>
          <div className='md:hidden block'>
            <TopBar/>
          </div>
        </div>
      )}
    </div>
  );
}
