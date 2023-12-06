'use client'

import React from "react";
import Link from 'next/link';
import AutoTyperNL from '../_components/AutoTyperNL';
import WaitlistForm from '../_components/WaitlistForm';

export default function CTABanner() {
    return (
        <div>
            <div className='hidden lg:block '>
                <div className="grid grid-cols-2 gap-6 lg:gap-8 lg:gap-y-12 bg-light py-12 px-10 lg:px-24">
                    <div className="prose lg:prose-2xl max-w-7xl prose-invert">
                        <h2 className='font-medium '>
                            <AutoTyperNL typeArray={['keep up with our progress']} />
                        </h2>
                    </div>
                    <div className="prose lg:prose-2xl max-w-7xl prose-invert grid grid-cols-1 gap-8 lg:gap-10">
                        <WaitlistForm alignSelf={"right"} />
                    </div>
                </div>
            </div>
            <div className='block lg:hidden'>
                <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:gap-y-12 bg-light py-16 px-10 lg:px-24">
                    <div className="prose lg:prose-2xl max-w-7xl prose-invert">
                        <div className="prose lg:prose-2xl max-w-7xl prose-invert">
                            <h1 className='font-medium text-center'>
                                <AutoTyperNL typeArray={['keep up with our progress']} />
                            </h1>
                        </div>
                    </div>
                    <div className="prose lg:prose-2xl max-w-7xl prose-invert grid grid-cols-1 gap-8 lg:gap-10">
                        <WaitlistForm alignSelf={"center"} />
                    </div>
                </div>
            </div>
        </div>
    )
}