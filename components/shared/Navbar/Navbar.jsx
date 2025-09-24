import Navitem from '@/components/navbar/Navbar'
import CommonBtn from '@/components/utilities/CommonBtn'
import Image from 'next/image'
import React from 'react'

function Navbar () {
  return (
    <div className='edn__nav__parent edn__lr__space'>
      <div>
        <Image
          src='/logo.png'
          width={100}
          height={100}
          className='object-cover edn__logo'
          alt='eduden brand logo'
        ></Image>
      </div>

      <div>
        {/* menu item */}
        <Navitem />
      </div>

      {/* common button */}
      <div>
        <CommonBtn text="Enroll Now"/>
      </div>
    </div>
  )
}

export default Navbar
