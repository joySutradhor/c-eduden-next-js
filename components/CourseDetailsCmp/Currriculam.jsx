/* eslint-disable react/prop-types */
import { useState } from 'react'

const Currriculam = ({ course }) => {
  const [itemsToShow, setItemsToShow] = useState(8)

  console.log(course)

  // Toggle between "View All" and "View Less"
  const handleToggleView = () => {
    if (itemsToShow === 8) {
      setItemsToShow(course.curriculum.length)
    } else {
      setItemsToShow(8) // Show limited items
    }
  }

  return (
    <div className='bg-black text-white edn__lr__space  edn__space__top'>
      {/* Title Section */}
      <div className='text-center mb-[76px]'>
        <h2 className='edn__title text-white  '>Course curriculum & tools</h2>
        <p className='text-[#FFFFFF]/[.80] text-[18px] leading-[27px] font-normal pb-[10px]'>
          {course.title}
        </p>

        <div className='flex justify-center flex-wrap space-y-2 lg:space-y-0 items-center w-full gap-x-5 mt-5'>
          {course?.tools.map(tool => {
            const Icon = tool.icon
            return (
              <div key={tool.cid} className='bg-white py-1 px-4 rounded'>
                <Icon className='text-5xl text-black mt-1' />{' '}
              </div>
            )
          })}
        </div>
      </div>

      {/* Grid Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-[40px]'>
        {course.curriculum.slice(0, itemsToShow).map(item => (
          <div
            key={item.cid}
            className='flex items-center gap-[24px] rounded-[8px] bg-[#FFD300] text-black p-[20px]'
          >
            <span className='p-5 lg:h-[60px] rounded-[8px] lg:w-[60px] text-black flex justify-center items-center text-[24px] leading-[36px] font-bold  bg-white'>
              {item.cid}
            </span>
            <p className='text-[24px] leading-[36px] font-bold  text-black'>
              {item.c}
            </p>
          </div>
        ))}
      </div>

      {course.curriculum.length > 8 && (
        <div className='text-center mt-[76px]'>
          <button
            onClick={handleToggleView}
            className='border border-[#FFD300] text-[14px] leading-[18px] font-medium  text-[#FFD300] hover:bg-[#FFD300] hover:text-black transition-all duration-300 px-[46px] py-[16px] rounded-[50px]'
          >
            {itemsToShow === 8 ? 'View All' : 'View Less'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Currriculam
