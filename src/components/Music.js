export default function Music(){
    return(
     <div className="bg-neutral-900 bg-opacity-60 md:w-96 md:h-[600px] rounded-[25px] py-4 px-5 backdrop-blur-sm">
        <h1 className="font-bold mb-1">My music taste</h1>
        <iframe className="w-full h-[540px]" src="https://open.spotify.com/embed/playlist/79tMiaLP6NfdSVFFA4Ur3I?utm_source=generator&theme=0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
     </div>   
    )
}