'use client'
import Link from 'next/link'
import { useState } from 'react'
import { BiMessageDetail, BiSolidArrowToRight } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import CommonBtn from '../utilities/CommonBtn'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = index => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2  text-[#FFFFFF] gap-[10vw] edn__space__top edn__lr__space '>
      {/* FAQ Section */}
      <div className=''>
        <h2 className='edn__title '>
          Frequently {''} {''}
          <br />
          Asked Question
        </h2>

        <div className=' space-y-4'>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#1A1A1A] rounded-lg overflow-hidden ${
                activeIndex === index ? 'bg-[#1A1A1A]' : ''
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className='w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none'
              >
                <span className='joinClanPara text-white'>{faq.question}</span>
                <span className='text-white'>
                  {activeIndex === index ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className='px-4 py-2 text-white'>
                  <p className='faqPara'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className=' bg-[#1A1A1A] rounded-lg  flex flex-col justify-center items-center py-10  xl:py-0 '>
        <div className='edn__title'>
          <BiMessageDetail />
        </div>
        <h3 className='edn__title text-center'>Do you have more questions?</h3>
        <p className='edn__base__text px-[5vw] text-center'>
          Learn more about our services, course offerings, or support.
          We&apos;re here to help.
        </p>

        <Link href='/contactUs' className='mt-[5vh]'>
          {/* <button className='homeLargeAppoinMent  bg-[#FFD300]  text-[#010101]   rounded-[50px]'>
            Contact Us
          </button> */}
          <CommonBtn text="Contact Us" icon={<BiSolidArrowToRight/>}/>
        </Link>
      </div>
    </div>
  )
}

const faqData = [
  {
    question: 'What is eduden ?',
    answer:
      'eduden is an EdTech platform offering innovative and accessible learning solutions.'
  },
  {
    question: 'How do I enroll in a course on eduden ?',
    answer:
      'Simply sign up, browse courses, and follow the easy registration process to get started.'
  },
  {
    question: 'Do eduden courses come with certificates?',
    answer:
      'Yes, eduden provides certificates upon successful course completion.'
  },
  {
    question: 'Is there tutor support available on eduden ?',
    answer:
      'Yes, expert tutors are available to guide and support you throughout your learning journey.'
  },
  {
    question: 'How do I make payments for eduden courses?',
    answer:
      'Payments can be made securely using credit/debit cards, digital wallets, or other online methods.'
  },
  {
    question: 'Are eduden courses suitable for beginners?',
    answer:
      'Absolutely, eduden offers beginner-friendly courses designed for learners with no prior experience.'
  }
]

export default Faq
