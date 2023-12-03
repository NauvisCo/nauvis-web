import MainNavbar from '../_components/MainNavbar'
import MainFooter from '../_components/MainFooter'
import Head from 'next/head';
import '../_style/globals.css'
import { Suspense } from "react";
import Loading from './loading';
import CTABanner from '../_components/CTABanner';

export const metadata = {
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
  manifest: '/site.webmanifest',
}

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <MainNavbar />
        <Suspense fallback={<Loading />}>
          <div className='container mx-auto min-w-full z-1'>
            <div className='mt-20'>
              <main>{children}</main>
            </div>
          </div>
        </Suspense>
        <CTABanner/>
        <MainFooter />
      </body>
    </html >
  )
}
