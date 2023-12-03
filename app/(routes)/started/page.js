"use client"

import React from 'react';
import Image from 'next/image'
import AutoTyperNL from '@/app/_components/AutoTyperNL';
import HugeEarth from '@/app/_components/HugeEarth';
import { Form, Field } from 'react-final-form'
import SignUpForm from '@/app/_components/SignupForm';


// export const metadata = {
//   title: 'Nauvis',
//   description: '...',
// }


export default function Started() {
  return (
    <main >
      <div className="">
        <div className="grid grid-cols-5 gap-32 py-12 lg:py-32 px-10 lg:px-24">
          <div className="col-span-2 text-cont self-center prose lg:prose-2xl">
            <h2>
              <span className='underline decoration-highlight'>
                <AutoTyperNL
                  typeArray={['get started today']}
                />
              </span>
            </h2>
            <p className="text-base">
              nauvis develops leading-edge AI that powers our enterprise tools, allowing us to leverage data insights so your team can optimize workflows, spur growth, and gain performance advantages.<br /><br />

              sign up today so your team can gain access to our tools as we roll out access.
            </p>
          </div>
          <div className="col-span-3 self-center">
            <SignUpForm />
          </div>
        </div>
      </div>
    </main>
  )
}
