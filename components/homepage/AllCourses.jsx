'use client'
import React, { useState } from 'react'
import { CourseData } from '@/app/FakeDb/CourseData'
import TooltipBtn from '../utilities/TooltipBtn'
import Swal from 'sweetalert2'
import { FaStar } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { CiClock2 } from 'react-icons/ci'
import Link from 'next/link'

export default function AllCourses () {
  console.log(CourseData, 'data')

  // Extract unique categories
  const categories = [...new Set(CourseData.map(c => c.category))]

  const [activeCategory, setActiveCategory] = useState('Cyber Security')

  // Filter courses by active category
  const filteredCourses = CourseData.filter(c => c.category === activeCategory)

  const [selectedCourse, setSelectedCourse] = useState('')
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    candidate_type: '',
    selected_course: selectedCourse || '',
    query: ''
  })

  const [inquiryData, setInquiryData] = useState(false)
  const handleInquiry = title => {
    setInquiryData(true)
    setSelectedCourse(title)
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('Submitting form data:', formData)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FFD300',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!',
      customClass: {
        confirmButton: 'custom-confirm-btn'
      }
    }).then(async result => {
      if (result.isConfirmed) {
        const loadingAlert = Swal.fire({
          title: 'Submitting...',
          text: 'Please wait while we submit your form.',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
          }
        })

        try {
          const response = await axios.post(
            'https://eduden.mrshakil.com/api/enroll/',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          )
          setInquiryData(false)
          console.log('Form submitted successfully:', response.data)

          loadingAlert.close()
          Swal.fire({
            title: 'Success!',
            text: 'Your form has been submitted successfully.',
            icon: 'success',
            confirmButtonText: 'Got it!',
            customClass: {
              confirmButton: 'custom-ok-btn'
            }
          })
        } catch (error) {
          console.error('Error submitting form message:', error)

          let errorMessage = 'Failed to submit the form.'

          loadingAlert.close()
          Swal.fire({
            title: 'Error!',
            text: errorMessage,
            icon: 'error'
          })
        }
      }
    })
  }

  return (
    <div className='edn__lr__space edn__space__top'>
      <div>
        <TooltipBtn
          className='max-w-3xl mx-auto text-center'
          btnText='Courses'
          title='All'
          colorText='Courses'
          para="Discover a wide range of expertly designed courses that help you build skills, gain knowledge, and achieve your goals. Whether you're a beginner or advancing your expertise, our courses are structured to provide practical learning, interactive sessions, and real-world applications to support your growth."
        />
      </div>
      {/* Category Tabs */}
      <div>
        {/* Mobile Dropdown - hidden on large screens */}
        <div className='block lg:hidden pb-[5vh]'>
          <select
            value={activeCategory}
            onChange={e => setActiveCategory(e.target.value)}
            className='w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-600 focus:border-[#ffd300] focus:outline-none'
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Buttons - hidden on mobile */}
        <div className='hidden lg:flex flex-wrap gap-3 pb-[5vh] justify-start'>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-lg font-semibold transition ${
                activeCategory === cat
                  ? 'bg-[#ffd300] text-black shadow'
                  : ' hover:bg-[#ffd300] hover:text-black text-white transition'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, i) => (
            <Link key={i} href={`/courses/${course.id}`}>
              <div
                className={` cursor-pointer w-full h-full bg-white rounded-[20px] flex flex-col gap-1  justify-between group  hover:bg-gradient-to-b from-[#FFD300]  to-[#FAB70A]  flex-grow-0 flex-shrink-0 transition-colors ease-in-out duration-500  box-borders `}
                // onClick={() => navigate("/courseDetails")}
              >
                {/* Content shown when not hovered */}
                <div className='group-hover:hidden block transition-opacity duration-500 ease-in-out  '>
                  <div className='relative bg-black'>
                    <img
                      src={course.image}
                      alt={course.title}
                      className='w-full rounded-t-[20px] h-[296px] transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover '
                    ></img>
                    <div className='w-[80px] h-[80px] md:w-[102px] md:h-[102px] rounded-full bg-[#FAB70A] absolute bottom-0 flex items-center justify-center right-[35px] translate-y-1/2    '>
                      <div className='flex flex-col w-full justify-center items-center '>
                        <p className='text-3xl font-bold font-gucina text-[#111]'>
                          {Math.floor(Math.random() * (25 - 15 + 1)) + 15}%
                        </p>{' '}
                        <span className='text-base font-light text-[#111] -mt-2 '>
                          OFF
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='px-[14px] md:px-[25px] mt-10 md:mt-[68px]'>
                    <div>
                      <div className='lg:flex items-center justify-between  '>
                        <button className='bg-[#FAB70A] text-[14px] py-3 px-4 font-bold text-black rounded-[50px] mb-2 lg:mb-auto'>
                          {course.category}
                        </button>
                        <div className='flex items-center gap-[4px] sm:gap-[8px]'>
                          <FaStar
                            fill='#FF8A00'
                            className='h-[16px] w-[16px]'
                          />
                          <FaStar
                            fill='#FF8A00'
                            className='h-[16px] w-[16px]'
                          />
                          <FaStar
                            fill='#FF8A00'
                            className='h-[16px] w-[16px]'
                          />
                          <FaStar
                            fill='#FF8A00'
                            className='h-[16px] w-[16px]'
                          />
                          <FaStar
                            fill='#FF8A00'
                            className='h-[16px] w-[16px]'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='mt-5 md:mt-[25px]'>
                      <h3 className='font-gucina text-[20px] md:text-[30px] text-[#010101] font-bold'>
                        {course.title}
                      </h3>
                      <p className='edn__base__text text-black mt-[6px] md:mt-[15px]  line-clamp-3'>
                        {course.crsDetails}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content shown on hover */}
                <div className='h-full px-[14px] md:px-[25px]  pt-[30px] group-hover:block hidden transition-opacity duration-500 ease-in-out'>
                  <div>
                    <div className='md:flex items-center justify-between'>
                      <p className='py-1 px-4 flex justify-center items-center bg-[#010101] text-sm  text-white rounded-[50px] mb-2 md:mb-auto'>
                        {course.category}
                      </p>
                      <div className='flex items-center gap-[4px] sm:gap-[8px]'>
                        <FaStar color='#010101' className='h-[16px] w-[16px]' />
                        <FaStar fill='#010101' className='h-[16px] w-[16px]' />
                        <FaStar fill='#010101' className='h-[16px] w-[16px]' />
                        <FaStar fill='#010101' className='h-[16px] w-[16px]' />
                        <FaStar fill='#010101' className='h-[16px] w-[16px]' />
                      </div>
                    </div>
                    <h2 className='font-bold md:text-[30px] text-[20px] mt-[35px] font-gucina leading-[34.5px] text-black'>
                      {course.title}
                    </h2>
                    <p className='mt-[14px] text-[14px]  text-black leading-[21px] '>
                      {course.crsDetails}
                    </p>
                  </div>
                </div>

                <div className='px-[15px] md:px-[25px] '>
                  <div>
                    <div className='group-hover:opacity-100 flex opacity-0 transition-all ease-linear duration-300  items-center gap-[20px] justify-between h-full z-50 pb-5'>
                      <div>
                        <button className='py-3 px-4 bg-[#010101]  text-white rounded-[50px] text-nowrap cursor-pointer hover:scale-105 text-[14px] '>
                          Enroll Now
                        </button>
                      </div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 200 60'
                        className='w-[30px] shrink-0 md:w-12 h-12  text-[#010101] transition-transform duration-500 ease-in-out hover:scale-125'
                      >
                        <line
                          x1='0'
                          y1='30'
                          x2='170'
                          y2='30'
                          stroke='#000'
                          strokeWidth='3'
                        />
                        <polygon points='170,30 150,20 150,40' fill='#000' />
                      </svg>
                      <div>
                        <button
                          onClick={() => handleInquiry(title)}
                          className='px-4 py-3   rounded-[50px] bg-[#010101]  text-white   text-[14px] '
                        >
                          inquiry
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center justify-between  pb-5 border-t-[1px] pt-5 border-black '>
                    <div className='flex items-center gap-[5px] font-[300] text-[14px]'>
                      <span>
                        <IoIosPeople className='text-[#010101] group-hover:text-black ' />
                      </span>
                      <p className='text-[#010101] group-hover:text-black '>
                        25
                      </p>
                    </div>
                    <div className='flex items-center gap-[5px]  font-[300] text-[14px] text-[#010101]'>
                      <CiClock2 className='group-hover:text-black' />

                      <p className='group-hover:text-black'>36hr</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className='text-gray-600 col-span-full text-center'>
            No courses available in this category.
          </p>
        )}
      </div>

      {/* students inquiry data form  */}
      {inquiryData && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 '>
          <form
            onSubmit={handleSubmit}
            className='p-6 bg-[#1A1A1A] rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg w-[90%] xl:w-[40%] mx-auto '
          >
            {/* Close Button */}
            <button
              onClick={() => setInquiryData(false)}
              className='absolute top-2 right-4 text-white text-2xl font-bold hover:text-gray-400'
            >
              &times;
            </button>

            <div className='flex justify-center items-center'>
              <div>
                <h2 className='text-xl font-bold text-white mb-4 text-center'>
                  Admission Inquiry
                </h2>

                <input
                  type='text'
                  name='full_name'
                  placeholder='Full Name'
                  value={formData.full_name}
                  onChange={handleChange}
                  className='w-full p-2 mb-3 lg:mb-5 rounded bg-[#222] text-white'
                  required
                />

                <input
                  type='tel'
                  name='phone'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full p-2 mb-3 lg:mb-5 rounded bg-[#222] text-white'
                  required
                />

                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full p-2 mb-3 lg:mb-5 rounded bg-[#222] text-white'
                  required
                />

                <select
                  name='candidate_type'
                  value={formData.candidate_type}
                  onChange={handleChange}
                  className='w-full p-2 mb-3 lg:mb-5 rounded bg-[#222] text-white'
                  required
                >
                  <option value=''>Select Candidate Type</option>
                  <option value='Student'>Student</option>
                  <option value='Job Holder'>Job Holder</option>
                  <option value='Other'>Other</option>
                </select>

                {/* Select Course */}
                <select
                  name='selected_course'
                  value={formData.selected_course}
                  onChange={handleChange}
                  className='w-full p-2 mb-3 lg:mb-5  rounded bg-[#222] text-white'
                  required
                >
                  <option value={selectedCourse}>{selectedCourse}</option>
                </select>

                <textarea
                  name='query'
                  placeholder='Your Query'
                  value={formData.query}
                  onChange={handleChange}
                  className='w-full p-2 mb-3 lg:mb-5 rounded bg-[#222] text-white'
                ></textarea>

                <button
                  type='submit'
                  className='w-full py-2 my-5 bg-[#FFD300] text-black rounded font-bold hover:bg-yellow-500'
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
