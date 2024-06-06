"use client"
import BootScreenAnim from '@/components/BootScreen';
import BottomBar from '@/components/BottomBar';
import TopBar from '@/components/TopBar';
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
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[url('/Rosey-stars.png')] bg-cover bg-center h-screen">
            <div className='flex justify-start p-10'>
              <div className='grid grid-rows-5 grid-flow-col w-screen gap-y-52'>
                <div className='flex justify-center items-center'> as1</div>
                <div className='flex justify-center items-center'>1 asdf</div>
                <div className='flex justify-center items-center'>1</div>
                <div className='flex justify-center items-center'>1</div>
                <div className='flex justify-center items-center'>1</div>

                <div className='flex justify-center items-center'>1</div>
                <div className='flex justify-center items-center'>1</div>
                <div className='flex justify-center items-center'>1</div>
                <div className='flex justify-center items-center'>1</div>
                <div className='flex justify-center items-center'>1</div>
                
                <div className='flex justify-center items-center'>1</div>
                <div className='flex justify-center items-center'>1</div>
                <div className='flex justify-center items-center'>1</div>
                <div className='flex justify-center items-center'>1</div>
                <div className='flex justify-center items-center'>1</div>
                
                <div></div>
              </div>
            </div>
            <div className='md:hidden block'>
              <TopBar />
            </div>
            <div className='md:block hidden'>
              <BottomBar />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
