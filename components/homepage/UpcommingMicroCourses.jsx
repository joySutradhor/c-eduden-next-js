import React from 'react'
import TooltipBtn from '../utilities/TooltipBtn'
import Link from 'next/link'
import { UcommingMicroEvent } from '../../app/FakeDb/UcommingMicroEvent'
import { SlCalender } from 'react-icons/sl'
import { FaClock, FaLocationDot } from 'react-icons/fa6'

export default function UpcommingMicroCourses () {
  return (
    <div className='edn__lr__space edn__space__top'>
      {/* Top Section */}
      <div>
        <TooltipBtn
          className=' max-w-3xl mx-auto text-center'
          btnText='Upcomming'
          title='Upcoming '
          colorText= "Micro Courses"
          para='Our upcoming micro courses are designed to fit into your busy life
            while delivering real, hands-on knowledge. Perfect for anyone eager
            to learn, stay current, and make a real impact in today’s
            fast-moving world.'
        />
      </div>

      {/* Card Section */}
      <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {UcommingMicroEvent.map(
          ({ id, img, category, time, title, duration, location, slug }) => (
            <div
              key={id}
              className='p-5 grid items-center gap-6 bg-white rounded-[16px] shadow-md'
            >
              {/* Image */}
              <div className='relative w-full h-[150px] lg:h-[30vh] 2xl:h-[30vh] flex items-center overflow-hidden'>
                <img
                  src={img}
                  alt={title}
                  className='rounded-[8px] object-cover w-full h-full'
                />
                <div className='absolute 2xl:top-[10px] 2xl:left-[10px] xl:top-[10px] xl:left-[10px] top-[15px] left-[6px] '>
                  <p className='2xl:px-[12px] 2xl:py-[6px] px-5 py-1 text-white text-sm font-medium leading-[18px] border-2 border-[#FFD300] rounded-[50px]'>
                    {category}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className='text-black font-lexend flex gap-2 items-center'>
                  <SlCalender /> {time}
                </p>

                <h4 className='mt-1 text-[#1A1A1A] text-lg md:text-2xl font-bold font-sans'>
                  {title}
                </h4>

                <div className='py-3 space-y-1'>
                  <p className='flex gap-x-3 items-center text-sm md:text-lg font-medium font-lexend text-black'>
                    <FaClock /> {duration}
                  </p>
                  <p className='flex gap-x-3 items-center text-sm md:text-lg font-medium font-lexend text-black'>
                    <FaLocationDot /> {location}
                  </p>
                </div>

                <div className='mt-5 mb-5'>
                  <Link href={`/courses/${id}`}>
                    <button className='text-[#010101] px-5 py-2 text-sm lg:text-base font-medium border border-[#FFD300] rounded-[50px] w-full cursor-pointer bg-[#FFD300]'>
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
