'use client'
import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { MdOutlineArrowRight } from 'react-icons/md'
import { RiYoutubeFill } from 'react-icons/ri'
import { SlSocialFacebook } from 'react-icons/sl'

const Footer = () => {
  const year = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ]

  const socialLinks = [
    {
      icon: <SlSocialFacebook size={28} />,
      href: 'https://www.facebook.com/profile.php?id=61557983775555',
    },
    {
      icon: <FaInstagram size={28} />,
      href: 'https://www.instagram.com/at_eduden/',
    },
    {
      icon: <CiLinkedin size={28} />,
      href: 'https://www.linkedin.com/company/edu-den/',
    },
  ]

  const learningLinks = [
    {
      icon: <RiYoutubeFill size={10} />,
      text: 'YouTube',
      href: 'https://www.youtube.com/',
    },
    {
      icon: <FaFacebookF size={10} />,
      text: 'Facebook',
      href: 'https://www.facebook.com/',
    },
    {
      icon: <FaInstagram size={10} />,
      text: 'Instagram',
      href: 'https://www.instagram.com/',
    },
  ]

  return (
    <footer className='bg-black text-white text-opacity-80  py-10  edn__space__top edn__lr__space'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-12'>
        {/* Logo + Description */}
        <div>
          <img src='/logo.png' alt='brand logo' className='edn__logo mb-4' />
          <p >
            Empowering learners with innovative technology to unlock their full
            potential in education and beyond.
          </p>
          <div className='flex gap-3 mt-4'>
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#FFD300] text-black p-2 rounded-full hover:scale-110 transition'
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='edn__small__title mb-3'>Quick Link</h2>
          {footerLinks.map((link, i) => (
            <Link href={link.path} key={i}>
              <p className='flex items-center gap-2 text-[#FFD300] mb-2 hover:underline edn__base__text'>
                <MdOutlineArrowRight size={18} />
                {link.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Learning Platforms */}
        <div>
          <h2 className='edn__small__title mb-3'>Learning Platform</h2>
          {learningLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 mb-2 hover:underline edn__base__text'
            >
              <span className='bg-[#FFD300] text-black w-5 h-5 flex items-center justify-center rounded-full '>
                {link.icon}
              </span>
              {link.text}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div>
          <h2 className='edn__small__title mb-3'>Get In Touch</h2>
          <div className='space-y-2'>
            <div>
              <p className='edn__small__title'>Phone:</p>
              <p >+91 92394 25164</p>
            </div>
            <div>
              <p className='edn__small__title'>Email:</p>
              <p >learn@eduden.io</p>
            </div>
            <div>
              <p className='edn__small__title'>Primary Coaching Centre:</p>
              <p >Nokia Care Building, South Dumdum, Kolkata Housing</p>
            </div>
          </div>
        </div>
      </div>

      <hr className='my-8 border-gray-600' />

      <div className='text-center text-sm'>
        <p>
          Copyright © {year} eduden | Powered by{' '}
          <a
            href='https://www.ethicalden.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-[#FFD300]'
          >
            Ethical Den
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
