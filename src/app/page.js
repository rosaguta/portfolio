"use client"
import BootScreenAnim from '@/components/BootScreen';
import BottomBar from '@/components/BottomBar';
import TopBar from '@/components/TopBar';
import Browser from '@/components/TotallyRealBrowser';
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';

export default function Home() {
  const [showBootScreen, setShowBootScreen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBootScreen(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden static">
      {showBootScreen ? (
        <div>
          <BootScreenAnim />
        </div>
      ) : (
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[url('/Rosey-stars.png')] bg-cover bg-center h-screen">
            <Browser />
            {/** grid doesnt scale well */}
            {/* <div className='flex justify-start py-10'>
              <div className='grid grid-rows-5 grid-flow-col w-screen gap-y-9 max-h-screen'>
                <div className='flex justify-center items-center'>
                  <img className='object-scale-down h-52 w-52' src='/car.jpg' />

                </div>
                <div className='flex justify-center items-center'>2</div>
                <div className='flex justify-center items-center'>3</div>
                <div className='flex justify-center items-center'>4</div>
                <div className='flex justify-center items-center'>5</div>

                <div className='flex justify-center items-center'>6</div>
                <div className='flex justify-center items-center'>7</div>
                <div className='flex justify-center items-center'>8</div>
                <div className='flex justify-center items-center'>9</div>
                <div className='flex justify-center items-center'>10</div>

                <div className='flex justify-center items-center'>11</div>
                <div className='flex justify-center items-center'>12</div>
                <div className='flex justify-center items-center'>13</div>
                <div className='flex justify-center items-center'>14</div>
                <div className='flex justify-center items-center'>15</div>
                {/** Really ugly but dont care for now, need fix 
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div> */}
            <div className='md:hidden block'>
              <TopBar />
            </div>
            <div className='md:block hidden'>
              <BottomBar />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
