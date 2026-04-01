"use client"
import { useState, useEffect } from 'react';
import useIsMobile from '@/functions/useIsMobile'
import useWindowDimensions from '@/functions/useWindowDimensions.js'
import { ArrowRight } from 'lucide-react';
import Rose_Headpat from "../../../public/Rose_Headpat.png"
import Image from 'next/image';
import { Input } from '../ui/input';
import { motion, useAnimation } from 'framer-motion'
// used for the intro sequence
const currentDateTime = new Date()
const displayTime = new String(currentDateTime.getHours().toString().padStart(2, '0') + ":" + currentDateTime.getMinutes().toString().padStart(2, '0'))
const passwordCharArray = "BlahajOnSale".split("");

export default function LoginScreenAnim() {
  const [displayPassword, setDisplayPassword] = useState('');
  const [displayPasswordIndex, setDisplayPasswordIndex] = useState(0);
  const arrowControls = useAnimation()
  const UIChangeControls = useAnimation()
  const backgroundblurControls = useAnimation()
  useEffect(() => {
    if (displayPasswordIndex >= passwordCharArray.length) return;

    setTimeout(() => {
      setDisplayPassword(prev => prev + passwordCharArray[displayPasswordIndex]);
      setDisplayPasswordIndex(prev => prev + 1);
    }, Math.random() * 200 + 50);

  }, [displayPasswordIndex]);

  useEffect(() => {
    if (displayPasswordIndex >= passwordCharArray.length) {
      const arrowTimeout = setTimeout(() => {
        arrowControls.start({
          color: ["#ffffff", "#c98fa4", "#ffffff"],
          opacity: [1, 0.5, 1],
          scale: [1, 0.7, 1],
          transition: { duration: 0.3, easeing: "easeInOutQuad" }
        });
      }, 500)
     
      const UIchangeTimeout = setTimeout(() => {
        UIChangeControls.start({
          opacity: [1, 0],
          transition: { duration: 0.5, easings: "easeOut" }
        })
      }, 1000);
      const backgroundblurTimeout = setTimeout(()=>{
        backgroundblurControls.start({
          filter: "blur(0px)",
          transistion: {duration: 0.5}
        })
      }, 1350)
       return () => clearTimeout(arrowTimeout, UIchangeTimeout, backgroundblurTimeout)
    }

  }, [displayPasswordIndex])

  return (
    <div className="relative h-screen">
      <motion.div animate={backgroundblurControls} className="absolute inset-0 bg-[url('/Rosey-stars.png')] bg-cover bg-center blur-md" />
      <motion.div animate={UIChangeControls} className="relative flex space-y-4 flex-col items-center justify-center h-full">
        <div className='font-mono text-7xl md:text-9xl text-rose-100 opacity-80 h-full pt-36'> {displayTime} </div>
        <div className='pb-5'>
          <Image src={Rose_Headpat} width={150} height={150} />
        </div>
        <div className='space-y-3 h-full flex flex-col items-center text-xl'>
          <p>Rose van Leeuwen</p>
          <div className='relative m-5 flex items-center'>
            <Input
              value={displayPassword}
              type="password"
              className='w-56 bg-neutral-800 rounded-full text-white bg-transparent/20 p-2 inline-block'
              readOnly
            />
            <motion.div animate={arrowControls}
              className='absolute inline-block justify-self-end ml-48'>
              <ArrowRight id='arrow' color='#ffffff' className='' />

            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
// used for the optional log in screen when the user wanted to "log out" and "log back in again"
export function LoginScreen() {
  return (
    <div></div>
  )
}
