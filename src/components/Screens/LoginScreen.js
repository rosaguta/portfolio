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
export default function LoginScreenAnim() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('/Rosey-stars.png')] bg-cover bg-center blur-md"></div>

      <div className="relative flex space-y-4 flex-col items-center justify-center h-full">
        <Image src={Rose_Headpat} width={250} height={250}/>
        <p>Rose van Leeuwen</p>
        <Input value="some password" type="password" className='w-40 bg-neutral-800 rounded-md text-white'/>
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
