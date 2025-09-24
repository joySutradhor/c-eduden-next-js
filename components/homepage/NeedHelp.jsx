import Link from "next/link"
import CommonBtn from "../utilities/CommonBtn"
import { FaArrowRight } from "react-icons/fa"



const NeedHelp = () => {


  return (
    <div className='edn__space__top'>
      <div className='relative'>
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${'https://i.ibb.co.com/bbJV794/group-1045-66f4e2ba50515.webp'})`
          }}
          className='bg-no-repeat bg-center bg-cover w-[100%] h-[50vh] flex justify-center items-center'
        ></div>

        {/* Text Section */}
        <div className=' absolute inset-0 flex flex-col items-center justify-center     '>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className=' edn__title   '>
              Need Help?
            </h2>
            <p
              className='edn__base__text  '
            >
              Join the Learning Party Now – No Boring Stuff Allowed. Join the
              Learning Party Now – No Boring Stuff Allowed. Join the Learning
              Party Now – No Boring Stuff Allowed.
            </p>
          </div>

          <Link href='/contactUs' className="mt-[5vh]">
             <CommonBtn text="Contact Us" icon={<FaArrowRight/>}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NeedHelp
