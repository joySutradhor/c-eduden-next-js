/* eslint-disable react/prop-types */
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { LuDownload } from 'react-icons/lu'
import Image from 'next/image'

const CourseInfo = ({ course }) => {
  console.log(course.img, 'chekc')
  const [activeButton, setActiveButton] = useState('Admission')
  const [admission, setAdmission] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    candidate_type: '',
    selected_course: course?.title || '',
    query: ''
  })

  const handleToogleButton = updatedBtn => {
    setAdmission(updatedBtn === 'Admission')
    setActiveButton(updatedBtn)
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
            formData
          )
          setAdmission(false)
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
    <div className='edn__lr__space  edn__space__top bg-[#010101] grid  xl:grid-cols-2 gap-[80px] items-start '>
      <div className='order-2 xl:order-1'>
        <h1 className='text-[#FFFFFF] edn__title pb-8'>{course.title}</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[16px] pb-[20px]'>
          <div className='flex flex-col justify-center items-center py-[8px] border border-white rounded-[16px]'>
            <p className='text-[#FFFFFFCC] edn__small__title '>Duration</p>
            <p className='text-[#FFFFFFCC] courseDetailsPara '>
              {course.duration}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center py-[8px] border border-white rounded-[16px]'>
            <p className='text-[#FFFFFFCC] edn__small__title'>Lecture</p>
            <p className='text-[#FFFFFFCC] courseDetailsPara '>
              {course.lecture}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center py-[8px] border border-white rounded-[16px]'>
            <p className='text-[#FFFFFFCC] edn__small__title '>Projects</p>
            <p className='text-[#FFFFFFCC] courseDetailsPara '>
              {course.projects}
            </p>
          </div>
        </div>
        <p className='text-[#FFFFFFCC] edn__base__text pb-[30px] py-3'>
          {course.crsDetails}
        </p>

        {course?.eligibility?.length > 0 && (
          <div className='border border-white rounded-xl  text-white p-5 lg:p-10 mb-16'>
            <h2 className='text-2xl font-bold mb-5 text-[#FFD300]'>
              Eligibility
            </h2>
            <ul className='space-y-3'>
              {course.eligibility.map((item, index) => (
                <li key={index} className='edn__base__text'>
                  • {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}

        {course?.join?.length > 0 && (
          <div className='border border-white rounded-xl  text-white p-5 lg:p-10 mb-16'>
            <h2 className='text-2xl font-bold mb-5 text-[#FFD300]'>
              Who Can Join
            </h2>
            <ul className='space-y-3'>
              {course?.join.map((item, index) => (
                <li key={index} className='text-base'>
                  • {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className='lg:flex space-y-5 lg:space-y-0 flex-row gap-[16px]'>
          <button
            onClick={() => handleToogleButton('Admission')}
            className={`px-4 py-2 lg:py-3 lg:px-6  2xl:py-3 2xl:px-14 rounded-[50px] text-lg CourseUi text-black ${
              activeButton === 'Admission'
                ? 'bg-[#FFD300] text-black'
                : 'bg-[#1A1A1A] text-white'
            }`}
          >
            Admission Inquiry
          </button>
          <button
            onClick={() => handleToogleButton('Seminar')}
            className={`px-4 py-2 rounded-[50px] lg:py-3 lg:px-6  2xl:py-3 2xl:px-14  text-lg CourseUi text-black flex gap-2 items-center ${
              activeButton === 'Seminar'
                ? 'bg-[#FFD300] text-[#010101]'
                : 'bg-[#1A1A1A] text-white'
            }`}
          >
            Download Brochure{' '}
            <span>
              <LuDownload />
            </span>
          </button>
        </div>
      </div>

      {/* picture */}
      <div className='order-1'>
        <Image
          className='w-full h-[280px] md:h-[90vh] rounded-[16px] object-center object-cover'
          src={course?.img}
          alt={course?.title}
          height={600}
          width={600}
        ></Image>
      </div>

      {/* Admission Form */}
      {admission && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 '>
          <form
            onSubmit={handleSubmit}
            className='p-6 bg-[#1A1A1A] rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg w-[90%] xl:w-[40%] mx-auto '
          >
            {/* Close Button */}
            <button
              onClick={() => setAdmission(false)}
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
                  {/* <option value='' className='text-white/80'>
                    Select Course
                  </option>
                  <option value='Data Science and Machine Learning'>
                    Data Science and Machine Learning
                  </option>
                  <option value='Graphic Design'>Graphic Design</option>
                  <option value='Introduction to Python Programming'>
                    Introduction to Python Programming
                  </option>
                  <option value='UI/UX Design'>UI/UX Design</option>
                  <option value='Ethical Hacking and Penetration Testing'>
                    Ethical Hacking and Penetration Testing
                  </option>
                  <option value='Network Administration (CCNA)'>
                    Network Administration (CCNA)
                  </option>
                  <option value='Mastering Web Development'>
                    Mastering Web Development
                  </option>
                  <option value='DevOps and Continuous Integration'>
                    DevOps and Continuous Integration
                  </option> */}
                  <option value={course?.title}>{course?.title}</option>
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

export default CourseInfo
