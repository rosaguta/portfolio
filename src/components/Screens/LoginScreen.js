"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import useIsMobile from '@/functions/useIsMobile'
import useWindowDimensions from '@/functions/useWindowDimensions.js'
import { ArrowRight } from 'lucide-react';
import Rose_Headpat from "../../../public/Rose_Headpat.png"
import Image from 'next/image';
import { Input } from '../ui/input';
// used for the intro sequence
const currentDateTime = new Date()
const displayTime = new String(currentDateTime.getHours().toString().padStart(2, '0') + ":" + currentDateTime.getMinutes().toString().padStart(2, '0'))
const passwordCharArray = "BlahajOnSale".split(""); // change to an easteregg :3

export default function LoginScreenAnim() {
  const [displayPassword, setDisplayPassword] = useState('');
  const [displayPasswordIndex, setDisplayPasswordIndex] = useState(0);

  useEffect(() => {
    if (displayPasswordIndex >= passwordCharArray.length) return;

    const timeout = setTimeout(() => {
      setDisplayPassword(prev => prev + passwordCharArray[displayPasswordIndex]);
      setDisplayPasswordIndex(prev => prev + 1);
    }, Math.random() * 200 + 50);

    return () => clearTimeout(timeout);
  }, [displayPasswordIndex]);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('/Rosey-stars.png')] bg-cover bg-center blur-md" />
      <div className="relative flex space-y-4 flex-col items-center justify-center h-full">
        <div className='font-mono text-7xl md:text-9xl text-rose-100 opacity-80 h-full pt-36'> {displayTime} </div>
        <div className='pb-5'>
          {/* <Image src={Rose_Headpat} width={150} height={150}/> */}
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
              <ArrowRight className='absolute inline-block justify-self-end ml-48' />
            </div>
        </div>
      </div>
    </div>
  );
}
// used for the optional log in screen when the user wanted to "log out" and "log back in again"
export function LoginScreen() {
  return (
    <div></div>
  )
}
