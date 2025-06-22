import { Moon,RotateCw , Power} from 'lucide-react'
export default function StartMenu() {
    return (
        <div className="bg-neutral-900 bg-opacity-60 w-60 h-40 rounded-xl py-4 px-5 backdrop-blur-sm flex flex-col">
            <div className="py-2 flex hover:bg-black hover:bg-opacity-20 rounded-lg">
                <Moon className='mx-1 scale-90 stroke-pink-500'/>
                <p>Sleep</p>
            </div>
            <div className="py-2 flex hover:bg-black hover:bg-opacity-20 rounded-lg">
                <RotateCw className='mx-1 scale-90 stroke-purple-500'/>
                <p>Restart</p>
            </div>
            <div className="py-2 flex hover:bg-black hover:bg-opacity-20 rounded-lg">
                <Power className='mx-1 scale-90 stroke-red-500'/>
                <p>Shutdown</p>
            </div>
            
        </div>
    )
}