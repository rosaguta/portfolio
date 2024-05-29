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
    <div>
      <motion.img initial={{ opacity: 1, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 , y: 310 ,x: -170}}
        transition={{ duration: 2 , delay: 2}}
        src="/Rose.png"
        className="w-40 absolute right-1 top-1">
      </motion.img>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center ">
          <img src="/Rose.png" className="w-40 opacity-0" /> {/** Placehoder img for the animation */}
          <motion.div initial={{ opacity: 0, }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 3.5 }}>
            <p className="ml-4 text-3xl font-sans font-bold">RoseOs</p>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, }}
          animate={{ opacity: 1, scale: 1, }}
          transition={{ duration: 0.2, delay: 4 }}>
          <p className="mt-4 font-mono">{loadingText}</p>
        </motion.div>
      </div>
    </div>

  );
}
