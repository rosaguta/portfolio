"use client"
import BootScreenAnim from '@/components/BootScreen';
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
    <div className=" h-screen w-screen overflow-hidden">
      {showBootScreen ? (
        <div>
          <BootScreenAnim />
        </div>
      ) : (
        <div className="bg-[url('/Rosey-stars.png')] bg-cover bg-center h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-black">
          </motion.div>
          <div className='bottom-0 h-10 bg-black absolute inset-x-0'></div>
        </div>
      )}
    </div>
  );
}
