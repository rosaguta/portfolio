export default function Browser() {
    return (
        <div className="relative w-screen h-screen flex justify-center items-center">
            <div className="bg-neutral-900 w-[1000px] h-[600px] rounded-md relative">
                <div className="bg-neutral-950 rounded-t-md justify-between flex w-full h-12">
                    <div className="flex items-center">
                        <div className="bg-neutral-900 rounded-md w-52 h-8 ml-2 flex items-center p-1">
                            <img className="object-scale-down h-8 w-8 mr-1" src="/blahaj.png"></img>
                            <p className="text-sm">tab#1</p>
                        </div>
                        <div className="bg-neutral-900 rounded-md w-52 h-8 ml-2 flex items-center p-1">
                            <img className="object-scale-down h-8 w-8 mr-1" src="/blahaj.png"></img>
                            <p className="text-sm">tab#2</p>
                        </div>
                        <div className="bg-neutral-900 rounded-md w-52 h-8 ml-2 flex items-center p-1">
                            <img className="object-scale-down h-8 w-8 mr-1" src="/blahaj.png"></img>
                            <p className="text-sm">tab#3</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center">
                            <p className="">-</p>
                        </div>
                        <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center">
                            <p className="">[ ]</p>
                        </div>
                        <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center">
                            <p className="">X</p>
                        </div>
                    </div>
                </div>

                <p className="">wow</p>
            </div>
        </div>
    )
}
