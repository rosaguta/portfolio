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
        <div className="relative h-full w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-black">
            <img className="absolute top-0 left-0 h-full w-full object-cover" src="/Rosey-stars.png" />
          </motion.div>
        </div>
      )}
    </div>
  );
}
