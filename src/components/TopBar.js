import React, { useState } from 'react';
import Socials from "./Socials";
import { motion, AnimatePresence } from "framer-motion";
import Music from './Music';


export default function TopBar({ BrowserActive, handleBrowserVisibility }) {
    const [socialActive, setSocialActive] = useState(false);
    const [musicActive, setMusicActive] = useState(false)
    let date = new Date().toLocaleDateString();

    const handleEthernetClick = () => {
        setMusicActive(false)
        console.log(socialActive)
        setSocialActive(!socialActive);
    };
    const handleMusicClick = () => {
        setSocialActive(false)
        setMusicActive(!musicActive)
    }

    return (
        <>
            <div className='top-0 h-10 bg-black flex items-center absolute inset-x-0 bg-opacity-50 justify-between'>
                <div className='flex mr-4'>
                    {BrowserActive && (
                        <div className='z-20 transition duration-150 ease-in-out hover:bg-neutral-700 rounded-full p-1.5 w-14 h-12 flex items-center' onClick={handleBrowserVisibility}>
                            <img src="/firefox.png" className='p-2.5'></img>
                        </div>
                    )}
                </div>
                <div className='flex mr-2 '>
                    <div className='hover:bg-opacity-50 z-10 transition duration-150 ease-in-out hover:bg-neutral-700 rounded-full w-10 h-10 flex items-center justify-center' onClick={handleEthernetClick}>
                        <img src="/wifi.png" className='object-scale-down h-6'></img>
                    </div>
                    <div className='hover:bg-opacity-50 z-10 transition duration-150 ease-in-out hover:bg-neutral-700 rounded-full w-10 h-10 flex items-center justify-center' onClick={handleMusicClick}>
                        <img src="/speakericon.png" className='object-scale-down h-6'></img>
                    </div>
                    <div className='hover:bg-opacity-50 transition duration-150 ease-in-out hover:bg-neutral-700 rounded-full p-2 flex items-center'>
                        <p className='text-base md:text-lg'>{date}</p>
                    </div>
                </div>


            </div>
            <AnimatePresence>
                {socialActive && (
                    <motion.div
                        initial={{ y: 0, opacity: 0.25 }}
                        animate={{ y: 25, opacity: 1 }}
                        exit={{ y: 0, opacity: 0 }}
                        transition={{ duration: 0.20 }}
                        className="top-20 z-20 right-12 absolute">
                        <Socials />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {musicActive && (
                    <motion.div
                        initial={{ y: 0, opacity: 0.25 }}
                        animate={{ y: 25, opacity: 1 }}
                        exit={{ y: 0, opacity: 0 }}
                        transition={{ duration: 0.20 }}
                        className="top-20 z-20 right-10 w-80 absolute">
                        <Music />
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
} 