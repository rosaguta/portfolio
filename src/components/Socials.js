import React, { useState } from 'react';

export default function Socials() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [tooltip, setTooltip] = useState('');
    const [showTooltip, setShowTooltip] = useState(false);

    const socials = [
        { src: '/discord.png', alt: 'Discord', username: 'digital.rose' },
        { src: '/github_edit.png', alt: 'GitHub', username: 'rosaguta' },
        { src: '/Steam_icon_logo.svg.png', alt: 'Steam', username: 'rosaguta' },
        { src: '/twitteer.png', alt: 'Twitter', username: '@DigitalRose_UwU' },
    ];

    const copyToClipboard = (username) => {
        navigator.clipboard.writeText(username);
        setTooltip('Copied!');
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
    };

    return (
        <div className="relative bg-neutral-900 bg-opacity-60 w-80 h-52 rounded-[25px] py-4 px-5 backdrop-blur-sm">
            <h1 className="font-bold mb-1">Socials</h1>
            <div className="flex items-center justify-center w-full">
                <div className="grid gap-12 grid-cols-3">
                    {socials.map((social, index) => (
                        <div
                            key={index}
                            className="relative w-full h-auto flex items-center justify-center"
                            onMouseEnter={() => {
                                setHoveredIndex(index);
                                setTooltip(social.username);
                            }}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => copyToClipboard(social.username)}
                        >
                            <img src={social.src} className="object-scale-down h-12 w-12" alt={social.alt}></img>
                            {hoveredIndex === index && (
                                <div className="absolute bg-black text-white text-xs rounded px-2 py-1 -mt-20">
                                    {tooltip}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
