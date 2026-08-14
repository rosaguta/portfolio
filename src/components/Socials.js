import React from 'react';
import Image from 'next/image';
import discord from '../../public/discord.png';
import github_edit from '../../public/github_edit.png';
import Steam_icon_logo from '../../public/Steam_icon_logo.svg.png';
import LinkedIn from '../../public/LinkedIn.png';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Socials() {
    const socials = [
        {
            src: discord,
            alt: 'Discord',
            username: 'digital.rose',
            url: 'https://discord.com/users/230645844142063626',
        },
        {
            src: github_edit,
            alt: 'GitHub',
            username: 'rosaguta',
            url: 'https://github.com/rosaguta',
        },
        {
            src: LinkedIn,
            alt: 'LinkedIn',
            username: 'Rose van Leeuwen',
            url: 'https://www.linkedin.com/in/rose-van-leeuwen-0841021b9',
        },
    ];

    const openSocial = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="relative bg-neutral-900 bg-opacity-60 w-80 h-52 rounded-[25px] py-4 px-5 backdrop-blur-sm">
            <h1 className="font-bold mb-1">Socials</h1>

            <div className="flex items-center justify-center w-full">
                <TooltipProvider delayDuration={50}>
                    <div className="grid gap-12 grid-cols-3">
                        {socials.map((social, index) => (
                            <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                    <div
                                        className="relative w-full h-auto flex items-center justify-center cursor-pointer"
                                        onClick={() => openSocial(social.url)}
                                    >
                                        <Image
                                            src={social.src}
                                            className="object-scale-down h-12 w-12"
                                            alt={social.alt}
                                        />
                                    </div>
                                </TooltipTrigger>

                                <TooltipContent className="bg-black text-white">
                                    {social.username}
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
            </div>
        </div>
    );
}