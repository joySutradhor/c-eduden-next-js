import React from 'react'
import TooltipBtn from '../utilities/TooltipBtn'
import Link from 'next/link'
import { UcommingMicroEvent } from '../../app/FakeDb/UcommingMicroEvent'
import { SlCalender } from 'react-icons/sl'
import { FaClock, FaLocationDot } from 'react-icons/fa6'

export default function WhatsNewCmp () {
  return (
    <div className='edn__lr__space edn__space__top'>
      {/* Top Section */}
      <div>
        <TooltipBtn
          className=' max-w-4xl mx-auto text-center'
          btnText='Whats new'
          title='Upcoming Our Courses'
          para='Our upcoming new courses are designed to fit into your busy life
            while delivering real, hands-on knowledge. Perfect for anyone eager
            to learn, stay current, and make a real impact in today’s
            fast-moving world.'
        />
      </div>

      {/* Card Section */}
      <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {UcommingMicroEvent.map(
          ({
            id,
            img,
            category,
            time,
            title,
            duration,
            location,
            shortDes
          }) => (
            <div
              key={id}
              className='rounded-[20px]  relative w-full h-[515px] overflow-hidden shadow-md group'
            >
              <img
                className='w-full h-full object-cover transition-all duration-500 opacity-15 md:opacity-100  group-hover:opacity-15'
                src={img}
                alt=''
              />
              <div className='absolute inset-0 md:top-[277px]  flex flex-col justify-center items-center text-center  md:opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <h1 className='edn__card__title mb-[15px] lg:px-[50px] px-[20px]'>
                  {title}
                </h1>
                <p className='edn__base__text mb-[20px] lg:px-[50px] px-[20px]'>
                  {shortDes}
                </p>
              </div>
              <div className='absolute bottom-20 md:bottom-5 text-center left-0 w-full px-5 md:px-[10%] flex-wrap flex justify-center md:justify-between items-center  md:opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <div>
                  <p className='flex gap-x-2 items-center'>
                    <span>
                      <FaClock />
                    </span>{' '}
                    {duration}
                  </p>
                </div>

                <div>
                  <p className='flex gap-x-2 items-center'>
                    <span>
                      <FaLocationDot />
                    </span>{' '}
                    {location}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
