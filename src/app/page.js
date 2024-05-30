"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import useWindowDimensions from '@/functions/useWindowDimensions.js'

export default function Home() {
  const [loadingText, setLoadingText] = useState('loading');
  const [visible, setVisible] = useState(true);
  const { width, height } = useWindowDimensions();
  const imgposX = Math.trunc(width / 2) 
  const imgposY = Math.trunc((height / 2) -70)

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

  const bootlines = "Brewing coffee\t\t\t[ok]\nAdding sugar\t\t\t[ok]\nPreparing blahaj\t\t[ok]\nSetting up connections\t[ok]\nPreparing playlist\t\t[ok]\nGathering Projects\t\t[ok]".split('\n')

  useEffect(() => {
    const totalDuration = bootlines.length * 0.1 + 0.05;
    const timeout = setTimeout(() => {
      setVisible(false);
    }, totalDuration * 1000 + 500);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <div >
      <motion.img
        initial={{ opacity: 1, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1, y: imgposY, x: -imgposX }}
        transition={{ duration: 1.25, delay: 1.5 }}
        src="/Rose.png"
        className="w-40 absolute -right-8 -top-10"
      >
      </motion.img>
      {(visible) ? (
        <div>
          {bootlines.map((el, i) => (
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.05,
                delay: i / 10,
              }}
              key={i}
              className={"lg:text-xl pt-2 pl-2 absolute"}
              style={{ top: `${i * 1.5}rem` }}
            >
              {el.includes('ok') ? (
                <>
                  {el.split('ok')[0]}
                  <span className="text-green-500">ok</span>
                  {el.split('ok')[1]}
                </>
              ) : (
                el + "\n")}
            </motion.pre>
          ))}
        </div>
      ) : (

        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center ">
            <img src="/Rose.png" className="w-40 opacity-0" /> {/** Placeholder img for the animation */}
            <motion.div initial={{ opacity: 0, }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}>
              <p className="ml-4 text-3xl font-sans font-bold">RoseOs</p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, }}
            animate={{ opacity: 1, scale: 1, }}
            transition={{ duration: 0.2, delay: 2 }}>
            <p className="mt-4 font-mono">{loadingText}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
