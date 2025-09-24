import React from 'react'

function CommonBtn ({ text, className, icon }) {
  return (
    <button
      className={`${className} group relative min-h-[40px] w-40 overflow-hidden border border-[#ffd300] rounded-full text-white shadow-2xl transition-all duration-1000 before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#ffd300] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#ffd300] after:duration-500 hover:text-black hover:before:h-full hover:after:h-full`}
    >
      <span className='top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#ffd300] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#ffd300] after:duration-500 hover:text-black group-hover:before:h-full group-hover:after:h-full'></span>

      <span className='absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-black text-base font-semibold'>
        <span className='flex items-center gap-x-3'>
          {text}
          {icon && <span> {icon}</span>}
        </span>
      </span>
    </button>
  )
}

export default CommonBtn
