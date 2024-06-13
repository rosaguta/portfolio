"use client"
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion'
import useWindowDimensions from '@/functions/useWindowDimensions.js'

export default function BootScreenAnim() {
  const [loadingText, setLoadingText] = useState('loading');
  const [visible, setVisible] = useState(true);
  const { width, height } = useWindowDimensions();
  const imgposX = Math.trunc(width / 2);
  const imgposY = Math.trunc((height / 2) - 80);

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

  const bootlines = `Brewing coffee\t\t\t\t\t\t[ok]
Adding sugar\t\t\t\t\t\t[ok]
Preparing blahaj\t\t\t\t\t[ok]
Setting up connections\t\t\t\t[ok]
Preparing playlist\t\t\t\t\t[ok]
Gathering Projects\t\t\t\t\t[ok]
Applying inclusive CSS styles\t\t[ok]
Updating pronoun preferences\t\t[ok]
Synchronizing rainbow stickers\t\t[ok]
Optimizing self-care routines\t\t[ok]
Installing gender-affirming patches\t[ok]
Authenticating true self\t\t\t[ok]
Loading empowerment protocols\t\t[ok]
Initializing confidence boost\t\t[ok]
Integrating diversity modules\t\t[ok]
Deploying positivity framework\t\t[ok]`.split('\n');

  useEffect(() => {
    const totalDuration = bootlines.length * 0.1 + 0.05;
    const timeout = setTimeout(() => {
      setVisible(false);
    }, totalDuration * 1500 + 500);

    return () => clearTimeout(timeout);
  }, []);

  const getRandomDelay = (min, max) => Math.random() * (max - min) + min;

  const delays = useMemo(() => {
    let totalDelay = 0;
    return bootlines.map(() => {
      const delay = getRandomDelay(0.05, 0.25);
      totalDelay += delay;
      return totalDelay;
    });
  }, [bootlines.length]);

  return (
    <motion.div 
      initial={{ opacity: 1 }} 
      animate={{ opacity: 0 }}  
      transition={{ duration: 0.5, delay: 6.5  }}  
      className="bg-black"
    >
      <motion.img 
        initial={{ opacity: 1, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: imgposY, x: -imgposX }} 
        transition={{ duration: 1.25, delay: 3 }}
        src="/Rose.png"
        className="w-40 absolute -right-4 -top-5 hidden font-mono md:block"
      ></motion.img>
      
      <motion.img 
        initial={{ opacity: 1, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1, y: imgposY, x: -imgposX }}
        transition={{ duration: 1.25, delay: 3 }}
        src="/Rose.png"
        className="w-40 absolute -right-8 -top-10 font-mono md:hidden block"
      ></motion.img>
      
      {visible ? (
        <div>
          {bootlines.map((el, i) => (
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.05,
                delay: delays[i],
              }}
              key={i}
              className={"lg:text-xl pt-2 pl-2 absolute"}
              style={{ top: `${i * 2}rem` }}
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
            <img src="/Rose.png" className="w-40 opacity-0" />
            <motion.div initial={{ opacity: 0, }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}>
              <p className="ml-4 text-3xl font-sans font-bold">RoseOs</p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, }}
            animate={{ opacity: 1, scale: 1, }}
            transition={{ duration: 0.2, delay: 2 }}>
            <p className="mt-4 font-thin font-mono">{loadingText}</p>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
