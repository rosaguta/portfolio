"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import useWindowDimensions from '@/functions/useWindowDimensions.js'
import BootScreen from '@/components/BootScreen';

export default function Home() {
 
  return (
    <div >
      <BootScreen/>
    </div>
  );
}
