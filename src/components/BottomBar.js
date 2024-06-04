import Socials from "./Socials";
import { motion } from "framer-motion";
export default function BottomBar() {
    let date = new Date().toLocaleDateString();
    let ToggleIsActive = false;
    return (
        <>
            <div className='bottom-0 h-14 bg-black flex items-center absolute inset-x-0 bg-opacity-50 justify-between'>
                <div className='flex ml-4'>
                    <div className='hover:bg-opacity-50 transition duration-150 ease-in-out hover:bg-neutral-700 rounded-full p-1.5 w-14 h-12 flex items-center'> {/** TODO: Fix roundness */}
                        <img src="/Rose.png" className='p-1'></img>
                    </div>
                </div>
                <div className='flex mr-4 '>
                    <div className='flex items-center w-12 h-12'>
                        <p className='text-lg'>NLD</p>
                    </div>
                    <div className='hover:bg-opacity-50 transition duration-150 ease-in-out hover:bg-neutral-700 rounded-full w-12 h-12 flex items-center justify-center'>
                        <img src="/etherneticon_edit.png" className='object-scale-down h-9' onClick={ToggleIsActive}></img>
                    </div>

                    <div className='hover:bg-opacity-50 transition duration-150 ease-in-out hover:bg-neutral-700 rounded-full w-12 h-12 flex items-center justify-center'>
                        <img src="/speakericon.png" className='object-scale-down h-7'></img>
                    </div>
                    <div className='hover:bg-opacity-50 transition duration-150 ease-in-out hover:bg-neutral-700 rounded-full p-2 flex items-center'>
                        <p className='text-lg'>{date}</p>
                    </div>
                </div>
            </div>
            <div className="bottom-20 right-16 absolute">
                <motion.div initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}>
                    <Socials />
                </motion.div>
            </div>
        </>
    )
} 