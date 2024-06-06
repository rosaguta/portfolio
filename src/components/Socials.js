export default function Socials() {
    return (
        <div className="bg-neutral-900 bg-opacity-60 w-80 h-52 rounded-[25px] py-4 px-5 backdrop-blur-sm">
            <h1 className="font-bold mb-1">Socials</h1>
            <div className="flex items-center justify-center w-full">
                <div className="grid gap-12 grid-cols-3">
                    <div className="w-full h-auto flex items-center justify-center">
                        <img src="/discord.png" className="object-scale-down h-12 w-12" alt="test"></img>
                    </div>
                    <div className="w-full h-auto flex items-center justify-center">
                        <img src="/github_edit.png" className="object-scale-down h-12 w-12"></img>
                    </div>
                    <div className="w-full h-auto flex items-center justify-center">
                        <img src="/Steam_icon_logo.svg.png" className="object-scale-down h-12 w-12"></img>
                    </div>
                    <div className="w-full h-auto flex items-center justify-center">
                        <img src="/etherneticon_edit.png" className="object-scale-down h-12 w-12"></img>
                    </div>
                    <div className="w-full h-auto flex items-center justify-center">
                        <img src="/Rose.png" className="object-scale-down h-12 w-12"></img>
                    </div>
                    <div className="w-full h-auto flex items-center justify-center">
                        <img src="/speakericon.png" className="object-scale-down h-12 w-12"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}