"use client"
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion'
import useIsMobile from '@/functions/useIsMobile'
import useWindowDimensions from '@/functions/useWindowDimensions.js'
import { SquareUser } from 'lucide-react';
import Rose_Headpat from "../../../public/Rose_Headpat.png"
import Image from 'next/image';
import { Input } from '../ui/input';
// used for the intro sequence
const currentDateTime = new Date()
const displayTime = new String(currentDateTime.getHours().toString().padStart(2, '0') + ":" + currentDateTime.getMinutes().toString().padStart(2, '0'))
export default function LoginScreenAnim() {

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('/Rosey-stars.png')] bg-cover bg-center blur-md"></div>

      <div className="relative flex space-y-4 flex-col items-center justify-center h-full">
        <div className='font-mono text-9xl text-rose-100 opacity-80 h-full pt-24'>
          {displayTime}
        </div>
        <div className='space-y-6 h-full'>
          {/* <Image src={Rose_Headpat} width={250} height={250}/> */}
          <p>Rose van Leeuwen</p>
          <Input defaultValue="some password" type="password" className='w-56 bg-neutral-800 rounded-md text-white' />
        </div>
      </div>

    </div>
  )
}
// used for the optional log in screen when the user wanted to "log out"
export function LoginScreen() {
  return (
    <div></div>
  )
}
