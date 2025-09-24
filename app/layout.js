
import './globals.css'
import Footer from '@/components/shared/Footer/Footer'
import Navbar from '@/components/navbar/Navbar'

import { Lexend } from 'next/font/google'
import localFont from 'next/font/local'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend', 
})

const gucina = localFont({
  src: './font/gucina.bold.otf', 
  variable: '--font-gucina', 
})

export const metadata = {
  title: 'eduden | Home',
  description: 'Best course platform'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' data-arp=''>
      <body
        cz-shortcut-listen='true'
        className={`${lexend.variable} ${gucina.variable} antialiased  bg-[#010101] text-white`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
