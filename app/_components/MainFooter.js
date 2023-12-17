'use client'

import React from "react";
import Link from 'next/link';
import Image from 'next/image'
import MainButton from './MainButton'
import { SiLinkedin, SiDiscord, SiInstagram, SiTwitter, SiX } from "react-icons/si";


export default function MainFooter() {
    return (
        <nav className="container mx-auto min-w-full z-40">
            <div className="relative bottom-0 left-0 right-0 px-10 lg:px-24 py-12 z-39 bg-dark text-bg">
                {/* Desktop */}
                <div className='hidden lg:block '>
                    <div className='grid grid-cols-6 gap-x-6 justify-between justify-items-stretch content-start'>
                        <div className='justify-self-start grid items-top justify-between justify-items-stretch gap-8 content-start'>
                            <Link href="/">
                                <Image
                                    src="/INauvis-White.png"
                                    alt="Nauvis Icon"
                                    sizes="100vw"
                                    style={{
                                        width: 'auto',
                                        height: '30px',
                                    }}
                                    width={8000}
                                    height={8000}
                                />
                            </Link>
                            <div className='flex flex-row justify-between justify-items-center'>
                                <Link href="https://x.com/NauvisCo" target="_blank" className='flex-auto'><SiX /></Link>
                                <Link href="https://www.linkedin.com/company/nauvis/" target="_blank" className='flex-auto'><SiLinkedin /></Link>
                                <Link href="https://discord.com/invite/bv4zddNM5s" target="_blank" className='flex-auto'><SiDiscord /></Link>
                                <Link href="https://www.instagram.com/Nauvis.Co/" target="_blank" className='flex-auto'><SiInstagram /></Link>
                            </div>
                            <div>
                                <a href='mailto:hey@nauvis.co' className='hover:underline hover:decoration-highlight'> hey@nauvis.co </a>
                            </div>
                            <div>
                                <Link className="hover:underline hover:decoration-highlight" href="/terms">
                                    Terms
                                </Link>
                                <span>, </span>
                                <Link className="hover:underline hover:decoration-highlight" href="/privacy">
                                    Privacy
                                </Link>
                                <span> & </span>
                                <Link className="hover:underline hover:decoration-highlight" href="/use">
                                    Acceptable Use
                                </Link>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        {/* <div className='grid items-top justify-between justify-items-stretch gap-6 content-start'>
                            <Link className="hover:underline hover:decoration-highlight" href="/about">
                                about
                            </Link>
                            <Link className="hover:underline hover:decoration-highlight" href="/product">
                                products
                            </Link>
                            <Link className="hover:underline hover:decoration-highlight" href="/contact">
                                contact us
                            </Link>
                        </div>
                        <div className='grid items-top justify-between justify-items-stretch gap-6 content-start'>
                            <Link className="hover:underline hover:decoration-highlight" href="/xcope">
                                xcope
                            </Link>
                            <Link className="hover:underline hover:decoration-highlight" href="/blog">
                                blog
                            </Link>
                            <Link className="hover:underline hover:decoration-highlight" href="/careers">
                                careers
                            </Link>
                        </div> */}
                        <div className='justify-self-end grid items-top justify-between justify-items-stretch gap-6 content-start'>
                            <p className=''>Designed & built in California.<br />
                                © 2023 Nauvis Co.<br />
                                All rights reserved. </p>

                            {/* <Link href="/started" className=''>
                                <MainButton btn_txt='get started' />
                            </Link> */}
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className='block lg:hidden'>
                    <div className='grid grid-cols-1 auto-rows-auto gap-y-10 justify-stretch justify-items-center'>
                        <div className='grid items-top justify-between justify-items-center gap-6 content-start text-center'>
                            <Link href="/">
                                <Image
                                    src="/INauvis-White.png"
                                    alt="Nauvis Icon"
                                    sizes="100vw"
                                    style={{
                                        width: 'auto',
                                        height: '30px',
                                    }}
                                    width={8000}
                                    height={8000}
                                />
                            </Link>
                            <div className='flex flex-row justify-between my-2.5 gap-x-10 justify-items-center'>
                                <Link href="https://x.com/NauvisCo" target="_blank" className='flex-auto'><SiX /></Link>
                                <Link href="https://www.linkedin.com/company/nauvis/" target="_blank" className='flex-auto'><SiLinkedin /></Link>
                                <Link href="https://discord.com/invite/bv4zddNM5s" target="_blank" className='flex-auto'><SiDiscord /></Link>
                                <Link href="https://www.instagram.com/Nauvis.Co/" target="_blank" className='flex-auto'><SiInstagram /></Link>
                            </div>
                            <div>
                                <a href='mailto:hey@nauvis.co'> hey@nauvis.co </a>
                            </div>
                            <div>
                                <Link href="/started" className=''>
                                    <MainButton btn_txt='get started' />
                                </Link>
                            </div>
                        </div>
                        {/* <div className='grid items-top justify-between justify-items-stretch gap-6 content-start text-center'>
                            <Link className="" href="/about">
                                about
                            </Link>
                            <Link className="" href="/product">
                                products
                            </Link>
                            <Link className="" href="/contact">
                                contact us
                            </Link></div>
                        <div className='grid items-top justify-between justify-items-stretch gap-6 content-start text-center'>
                            <Link className="" href="/xcope">
                                xcope
                            </Link>
                            <Link className="" href="/blog">
                                blog
                            </Link>
                            <Link className="" href="/careers">
                                careers
                            </Link></div> */}
                        <div className='grid items-top justify-between justify-items-stretch gap-6 content-start text-center'>
                            <p className=''>Designed & built in California.<br />
                                © 2023 Nauvis Co. All rights reserved. </p>
                            <div>
                                <Link className="" href="/terms">
                                    Terms
                                </Link>
                                <span>, </span>
                                <Link className="" href="/privacy">
                                    Privacy
                                </Link>
                                <span> & </span>
                                <Link className="" href="/use">
                                    Acceptable Use
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}