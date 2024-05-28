"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

export default function Home() {
  const [loadingText, setLoadingText] = useState('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(prev => {
        if (prev === 'loading...') {
          return 'loading';
        } else {
          return prev + '.';
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <motion.div initial={{ opacity: 0, }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}>
        <div className="flex flex-row items-center justify-center ">
          <img src="/Rose.png" className="w-40" />
          <p className="ml-4 text-3xl font-sans font-bold">RoseOs</p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0,}}
        animate={{ opacity: 1, scale: 1 ,}}
        transition={{ duration: 0.2 , delay: 1}}>
        <p className="mt-4 font-mono">{loadingText}</p>
      </motion.div>
    </div>
  );
}
