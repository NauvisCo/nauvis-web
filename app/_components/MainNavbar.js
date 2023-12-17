'use client'

import React from "react";
import Link from 'next/link';
import Image from 'next/image'
import MainButton from './MainButton'
import Hamburger from "./Hamburger";
import { useState } from "react";

export default function MainNavbar() {
  const [burgerOn, setBuger] = useState(false);

  function toggleBuger() {
    setBuger(!burgerOn);
  }

  return (
    <nav className="container mx-auto min-w-full z-40">
      <div className="fixed top-0 left-0 right-0 px-10 lg:px-24 py-6 z-40 bg-bg bg-opacity-95">
        {/* Desktop */}
        <div className='hidden lg:block '>
          <div className='grid grid-cols-3 gap-x-3.5 justify-stretch content-center'>
            <div className='flex items-center justify-self-start'>
              <Link href="/">
                <Image
                  src="/Logo Full - BlackPNX x2.png"
                  alt="Nauvis Full Logo"
                  sizes="100vw"
                  style={{
                    width: 'auto',
                    height: '30px',
                  }}
                  width={8000}
                  height={2000}
                />
              </Link>
            </div>
            {/* <div className='flex items-center justify-self-center gap-12'>
              <Link className="flex-auto decoration-2 hover:underline hover:decoration-highlight" href="/about">
                about
              </Link>
              <Link className="flex-auto decoration-2 hover:underline hover:decoration-highlight" href="/product">
                products
              </Link>
              <Link className="flex-auto decoration-2 hover:underline hover:decoration-highlight" href="/contact">
                contact us
              </Link>
            </div>
            <div className='flex items-center justify-self-end'>
              <Link href="/started" className=''>
                <MainButton btn_txt='get started' />
              </Link>
            </div> */}
          </div>
        </div>
        {/* Mobile */}
        <div className='block lg:hidden'>
          <div className='grid grid-cols-2 gap-x-3.5 justify-stretch content-center'>
            <div className='flex items-center justify-self-start'>
              <Link href="/">
                <Image
                  src="/Logo Full - BlackPNX x2.png"
                  alt="Picture of the author"
                  sizes="100vw"
                  style={{
                    width: 'auto',
                    height: '30px',
                  }}
                  width={8000}
                  height={2000}
                />
              </Link>
            </div>
            {/* <div className='flex items-center justify-self-end'>
              <div onClick={toggleBuger}><Hamburger burgeron={burgerOn} /></div>
            </div> */}
          </div>
          {burgerOn ? <div className='grid grid-cols-1 auto-rows-auto gap-y-8 py-6 my-4 justify-items-center content-center bg-bg2'>
            <Link className="self-center" href="/about">
              about
            </Link>
            <Link className="self-center" href="/product">
              products
            </Link>
            <Link className="self-center" href="/contact">
              contact us
            </Link>
            <Link href="/started" className='self-center'>
              <MainButton btn_txt='get started' />
            </Link>
          </div> : null}
        </div>
      </div>
    </nav>
  )
}