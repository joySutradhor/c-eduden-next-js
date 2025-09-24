import { HiOutlineMinusSmall } from 'react-icons/hi2'
import Marquee from 'react-fast-marquee'
import TooltipBtn from '../utilities/TooltipBtn'

const Technology = () => {
  return (
    <div className='edn__lr__space edn__space__top  '>
      <div>
        <TooltipBtn
          className=' max-w-3xl mx-auto  text-center'
          btnText='Teachnology'
          title='The Technology Behind '
          colorText= "Our Success"
          para='At eduden, we leverage cutting-edge technology to deliver seamless,
        interactive, and engaging learning experiences. From AI-powered learning
        tools to secure cloud-based platforms, our tech-driven approach ensures
        that students and educators stay ahead in the digital era. Explore how
        our innovation enhances education at eduden.'
        />
      </div>

      <Marquee
        autoFill='true'
        pauseOnHover='true'
        gradient='true'
        gradientColor='black'
      >
        <div className='flex  gap-[32px] mr-8 cursor-pointer'>
          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img
              className='w-16 lg:w-32 '
              src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/technology/adobe.svg?updatedAt=1745421696949'
              alt='adobe'
            />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img
              className='w-16 lg:w-32 '
              src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/technology/aws.svg?updatedAt=1745421696986'
              alt='aws'
            />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img
              className='w-16 lg:w-32 '
              src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/technology/docker.png?updatedAt=1745421696924'
              alt='docker'
            />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img
              className='w-16 lg:w-32 '
              src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/technology/linux.png?updatedAt=1745421693810'
              alt='linux'
            />
          </div>

          <div className='p-4   size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img
              className='w-16 lg:w-32 '
              src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/technology/nextjs.png?updatedAt=1745421693480'
              alt='next js'
            />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img
              className='w-16 lg:w-32 '
              src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/technology/nmap.png?updatedAt=1745421693386'
              alt='nmap'
            />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img
              className='w-16 lg:w-32 '
              src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/technology/nodejs.png?updatedAt=1745421693474'
              alt='node js'
            />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img
              className='w-16 lg:w-32 '
              src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/technology/phython.png?updatedAt=1745421693132'
              alt='python'
            />
          </div>
        </div>
      </Marquee>
    </div>
  )
}

export default Technology
