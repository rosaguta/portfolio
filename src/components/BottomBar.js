import React, { useState } from 'react';
import Socials from "./Socials";
import { motion, AnimatePresence } from "framer-motion";
import Music from './Music';
import StartMenu from './StartMenu';

export default function BottomBar() {
    const [socialActive, setSocialActive] = useState(false);
    const [musicActive, setMusicActive] = useState(false)
    let date = new Date().toLocaleDateString();

    const handleEthernetClick = () => {
        setMusicActive(false)
        setSocialActive(!socialActive);
    };
    const handleMusicClick = () => {
        setSocialActive(false)
        setMusicActive(!musicActive)
    }

    return (
        <>
            <div className='bottom-0 h-14 bg-black flex items-center absolute inset-x-0 bg-opacity-50 justify-between'>
                <div className='flex ml-4'>
                    <div className='hover:bg-opacity-50 transition duration-150 ease-in-out hover:bg-neutral-700 rounded-full p-1.5 w-14 h-12 flex items-center'>
                        <img src="/Rose.png" className='p-1'></img>
                    </div>
                </div>
                <div className='flex mr-4 '>
                    <div className='flex items-center w-12 h-12'>
                        <p className='text-lg'>NLD</p>
                    </div>
                    <div className='hover:bg-opacity-50 transition duration-150 ease-in-out hover:bg-neutral-700 rounded-full w-12 h-12 flex items-center justify-center' onClick={handleEthernetClick}>
                        <img src="/etherneticon_edit.png" className='object-scale-down h-9' ></img>
                    </div>

                    <div className='hover:bg-opacity-50 transition duration-150 ease-in-out hover:bg-neutral-700 rounded-full w-12 h-12 flex items-center justify-center' onClick={handleMusicClick}>
                        <img src="/speakericon.png" className='object-scale-down h-7' ></img>
                    </div>
                    <div className='hover:bg-opacity-50 transition duration-150 ease-in-out hover:bg-neutral-700 rounded-full p-2 flex items-center'>
                        <p className='text-lg'>{date}</p>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {socialActive && (
                    <motion.div
                        initial={{ y: 25, opacity: 0.25 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 25, opacity: 0 }}
                        transition={{ duration: 0.20 }}
                        className="bottom-20 right-12 absolute">
                        <Socials />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {musicActive && (
                    <motion.div initial={{ y: 25, opacity: 0.25 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 25, opacity: 0 }}
                        transition={{ duration: 0.20 }}
                        className="bottom-20 right-10 absolute">
                        <Music />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className='bottom-20 left-10 absolute'>
                <StartMenu/>
            </div>
        </>
    );
}
