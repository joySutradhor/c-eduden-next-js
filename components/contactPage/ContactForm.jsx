'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import Tooltip from '../utilities/Tooltip'
import CommonBtn from '../utilities/CommonBtn'
import { MdOutlineFileDownloadDone } from 'react-icons/md'

const ContactForm = () => {
  const [result, setResult] = useState('')

  // Handle form submit
  const handleSubmit = async e => {
    e.preventDefault()
    setResult('Sending....')
    const formData = new FormData(e.target)

    formData.append('access_key', '1ae3fc21-a163-4ada-a316-40d8e92d5262')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      Swal.fire({
        title: 'Your Message Submit Successfully!!',
        icon: 'success',
        draggable: true
      })

      e.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
      Swal.fire({
        title: 'Error! Something went wrong!',
        icon: 'error',
        draggable: false
      })
    }
  }

  console.log(result)

  return (
    <div>
      <div className='lg:grid grid-cols-2 gap-x-[10vw] mx-0 justify-between items-center text-white'>
        <div className='h-[530px] w-full'>
          <img
            className='w-full h-full object-cover rounded-2xl'
            src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/contact%20page/contactUsImg.jpg?updatedAt=1745496329639'
            alt=''
          />
        </div>

        <div className='mt-[35px]  w-full'>
          <Tooltip btnText='Contact Us' />

          <h3 className='pb-[2vh] edn__card__title'>
            Have a Question s? Contact Us Today
          </h3>

          <form className='bg-[#010101]' onSubmit={handleSubmit}>
            <div className='mb-[30px]'>
              <input
                className='py-[10px] pl-[20px] rounded-[8px] w-full bg-[#010101] border border-[#FFFFFF33]/[.2]'
                type='text'
                placeholder='Name'
                name='name'
                required
              />
            </div>

            <div className='mb-[30px]'>
              <input
                className='py-[10px] pl-[20px] rounded-[8px] w-full bg-[#010101] border border-[#FFFFFF33]/[.2]'
                type='email'
                placeholder='Email'
                name='email'
                required
              />
            </div>

            <div className='mb-[30px]'>
              <input
                className='py-[10px] pl-[20px] rounded-[8px] w-full bg-[#010101] border border-[#FFFFFF33]/[.2]'
                type='text'
                placeholder='Subject'
                name='subject'
                required
              />
            </div>

            <div className='mb-[30px]'>
              <input
                className='py-[10px] pl-[20px] rounded-[8px] w-full bg-[#010101] border border-[#FFFFFF33]/[.2]'
                type='text'
                placeholder='Phone Number'
                name='number'
                required
              />
            </div>

            <div className='mb-[50px]'>
              <input
                className='pt-[10px] pl-[20px] pb-[70px] rounded-[8px] w-full bg-[#010101] border border-[#FFFFFF33]/[.2]'
                type='text'
                placeholder='Message'
                name='message'
                required
              />
            </div>

            <div>
              <CommonBtn text='submit Now' icon={<MdOutlineFileDownloadDone/> } type='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
