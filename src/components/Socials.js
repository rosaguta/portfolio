import { motion } from "framer-motion"
export default function Socials() {
    return (
        <div className="bg-neutral-800 bg-opacity-40 absolute w-80 h-52 bottom-20 right-16 rounded-[25px] pt-4 pl-5 pr-5">
            <h1 className="font-bold">Socials</h1>
            <div className="flex">
                <div className="w-16 h-auto mr-1 mb-1 flex-auto">
                    <img src="/discord.png"></img>
                </div>
                <div className="w-16 h-auto flex-auto">
                    <img src="/github_edit.png"></img>
                </div>
                <div className="w-16 h-auto p-5 mb-1 flex-auto">
                    <img src="/Steam_icon_logo.svg.png"></img>
                </div>
            </div>
            
            
        </div>
    )
}