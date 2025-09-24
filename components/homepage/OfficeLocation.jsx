// import React from 'react'

// function OfficeLocation() {
//   return (
//     <div>OfficeLocation</div>
//   )
// }

// export default OfficeLocation

import { FaLocationDot } from 'react-icons/fa6'

const OfficeLocation = () => {
  return (
    <section className='edn__space__top edn__lr__space'>
      <div className=' grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[100px]'>
        <div className=' md:h-[400px] lg:h-[600px]  rounded-[8px]   relative flex justify-center items-center'>
          <div className='relative'>
            <img
              src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/Map/map.png?updatedAt=1745430432946'
              alt=''
              className='w-full h-full object-cover'
            />
            <div className='absolute top-[32%] left-[14%] md:top-[36%] md:left-[14%] lg:top-[32%] lg:left-[14%]'>
              <FaLocationDot className='text-[#fff] text-sm md:text-xl animate-pulse  ' />
            </div>
            <div className='absolute top-[45%] right-[29%] md:top-[48%] md:right-[30%] lg:top-[45%] lg:right-[29%]'>
              <FaLocationDot className='text-[#fff] text-sm md:text-xl  animate-pulse ' />
            </div>
            <div className='absolute top-[40%] right-[26.5%] md:top-[45%] md:right-[26.5%] lg:top-[40%] lg:right-[26.5%] xl:top-[42%] 2xl:top-[45%]'>
              <FaLocationDot className='text-[#fff] text-sm  md:text-xl   ' />
            </div>
          </div>
        </div>

        <div className='text-[#FFFFFF] '>
          <h1 className='edn__title'>
            Our Global Presence
          </h1>
          <p className='edn__base__text mb-[5vh]'>
            At eduden, we are committed to delivering world-class education with
            expert instructors, cutting-edge technology, and an innovative
            approach—empowering students to reach their full potential. With
            branches across multiple countries, we bring quality learning closer
            to you! Learn Beyond Borders. Grow Without Limits
          </p>

          <div className='edn__location__parent'>
            <div className='edn__location__icon__parent '>
              <FaLocationDot className='text-[#000]  ' />
            </div>

            <div>
              <h1 className='edn__small__title '>India</h1>
              <p className='edn__base__text'>
                Nokia Care Building, South Dumdum, Kolkata
              </p>
            </div>
          </div>

          <div className='edn__location__parent'>
            <div className='edn__location__icon__parent '>
              <FaLocationDot className='text-[#000]  ' />
            </div>

            <div>
              <h1 className='edn__small__title '>
                Bangladesh
              </h1>
              <p className='edn__base__text'>
                {' '}
                24/A, Road-06, Nabinagar Housing, Mohammadpur, Dhaka
              </p>
            </div>
          </div>

          <div className='edn__location__parent'>
            <div className='edn__location__icon__parent '>
              <FaLocationDot className='text-[#000]  ' />
            </div>

            <div>
              <h1 className='edn__small__title '>USA</h1>
              <p className='edn__base__text'>
                1729 N 2nd St Studio 204A,Minneapolis, MN 55411
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfficeLocation
