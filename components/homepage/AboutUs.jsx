import Link from 'next/link'
import { MdArrowRightAlt } from 'react-icons/md'
import CommonBtn from '../utilities/CommonBtn'
import { FaArrowRight } from 'react-icons/fa'

const AboutUs = () => {
  //   useEffect(() => {
  //     const handleCopy = e => e.preventDefault()
  //     const handleCut = e => e.preventDefault()
  //     const handlePaste = e => e.preventDefault()
  //     const handleContextMenu = e => e.preventDefault()
  //     // const handleSelectStart = e => e.preventDefault()

  //     document.addEventListener('copy', handleCopy)
  //     document.addEventListener('cut', handleCut)
  //     document.addEventListener('paste', handlePaste)
  //     document.addEventListener('contextmenu', handleContextMenu)
  //     // document.addEventListener('selectstart', handleSelectStart)

  //     return () => {
  //       document.removeEventListener('copy', handleCopy)
  //       document.removeEventListener('cut', handleCut)
  //       document.removeEventListener('paste', handlePaste)
  //       document.removeEventListener('contextmenu', handleContextMenu)
  //       // document.removeEventListener('selectstart', handleSelectStart)
  //     }
  //   }, [])

  return (
    <section className='  edn__lr__space edn__space__top'>
      <div className='edn__about__parent group '>
        <div>
          <h2 className='edn__title '>
            {' '}
            <span className='animate__underline'>
              Inside {''} {''}
            </span>
            {''} <span>{''}eduden</span>
          </h2>
          <div className='2xl:mt-[10vh] mt-[5vh] group hidden lg:block'>
            <button
              className={` group py-2 px-6 relative  overflow-hidden border border-[#ffd300] rounded-full text-white shadow-2xl transition-all duration-1000 `}
            >
              {/* <span className='top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#ffd300] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#ffd300] after:duration-500 hover:text-black group-hover:before:h-full group-hover:after:h-full'></span> */}

              <span className='text-white text-base font-semibold'>
                <span className='flex items-center gap-x-3'>
                  Read More
                  <span>
                    <FaArrowRight />
                  </span>
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className='space-y-[2vh]'>
          <p className='edn__base__text line-clamp-2  lg:line-clamp-none  '>
            Well, because we’re not your grandma’s boring old school! At eduden,
            we’re the rebels of education, the mavericks of learning, and the
            champions of fun-filled knowledge. We’ll teach you how to slay
            dragons and code websites, all while cracking jokes and sipping on
            virtual coffee. So, why settle for snooze-worthy lectures when you
            can join the eduden revolution? Let’s make learning epic together!
            Well, because we’re not your grandma’s boring old school! At eduden,
            we’re the rebels of education, the mavericks of learning, and the
            champions of fun-filled knowledge. We’ll teach you how to slay
            dragons and code websites, all while cracking jokes and sipping on
            virtual coffee.
          </p>

          <p className=' edn__base__text  '>
            Well, because we’re not your grandma’s boring old school! At eduden,
            we’re the rebels of education, the mavericks of learning, and the
            champions of fun-filled knowledge. We’ll teach you how to slay
            dragons and code websites, all while cracking jokes and sipping on
            virtual coffee.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
