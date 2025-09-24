'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { IoMenu } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'

// Menu items config
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: "What's New", path: '/whats-new' },
  { name: 'Verify', path: '/verify' },
  { name: 'Contact Us', path: '/contact' }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const isActive = path => pathname === path

  return (
    <div>
      {/* Mobile Navbar */}
      <nav className='lg:hidden  w-full z-50 bg-black  py-5'>
        <div className='edn__lr__space flex justify-between items-center  font-helvetica font-normal'>
          {/* Logo */}
          <div className='headerLogo'>
            <Link href='/'>
              <img
                className='h-8 w-full object-cover'
                src='/logo.png'
                alt='brand logo'
              />
            </Link>
          </div>
          {/* Menu Icon */}
          <IoMenu
            className='text-[#FFD300] text-3xl cursor-pointer'
            onClick={() => setOpen(true)}
          />
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className='px-5 py-5 absolute top-0 right-0  w-full h-[70vh] z-50 transition-transform duration-500 ease-in-out bg-black'>
            {/* Top Section */}
            <div className=' flex justify-between items-center pb-2   '>
              <div >
                <Link href='/'>
                  <img
                    className='h-8 object-cover'
                    src='/logo.png'
                    alt='brand logo'
                  />
                </Link>
              </div>
              <div>
                <MdClose
                  className='text-3xl cursor-pointer'
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            {/* Menu Items */}
            {menuItems.map(item => (
              <li key={item.path} className='py-3'>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`${
                    isActive(item.path)
                      ? 'text-[#fdd300] font-semibold'
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Desktop Navbar */}
      <nav className='hidden lg:block  z-50 bg-black py-8  '>
        <div className='edn__lr__space flex justify-between items-center font-helvetica font-normal  '>
          {/* Logo */}
          <div className='headerLogo'>
            <Link href='/'>
              <img
                className='h-full w-full object-cover'
                src='/logo.png'
                alt='brand logo'
              />
            </Link>
          </div>
          {/* Menu Items */}
          <ul className='flex gap-10 font-medium'>
            {menuItems.map(item => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={` ${
                    isActive(item.path)
                      ? 'text-[#ffd300] font-semibold border-2 border-[#ffd300] py-1 px-4 rounded-full'
                      : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className='bg-[#FFD300] text-black font-semibold  hover:bg-transparent hover:text-[#FFD300] border border-[#FFD300] transition-all duration-300 px-[20px] py-[10px] rounded-[50px]'>
            Enroll Now
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
