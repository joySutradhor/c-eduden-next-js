import { MdLiveTv, MdOutlineAssignment, MdOutlineQuiz } from 'react-icons/md'
/* eslint-disable react/prop-types */
const JoinOurClan = ({ course }) => {
  console.log(course)
  return (
    <div className='edn__lr__space  edn__space__top'>
      <div className='mb-[75px] text-center xl:max-w-[1140px] mx-auto'>
        <h1 className='edn__title  text-white '>Course Overview</h1>
        <p className='edn__base__text text-white/[.8]'>{course.overView}</p>
      </div>
      <div className='bg-[#181717] px-[50px] py-[50px]  2xl:px-[80px] 2xl:py-[100px] xl:px-[50px] xl:py-[50px] rounded-[14px] text-white '>
        <div className='grid lg:grid-cols-[45%_1%_45%] justify-between gap-y-10 lg:gap-y-20 items-center'>
          <div className='text-center'>
            <div className='flex flex-row gap-[30px] justify-center items-center'>
              <div>
                <div className=' mb-[20px]'>
                  <MdOutlineAssignment className='text-white w-[30px] h-[20px] mx-auto' />
                </div>
                <h3 className='menuHead mb-[8px]'>
                  {course.features[0]?.title1}
                </h3>
                <p className='menuPara'>{course.features[0]?.description1}</p>
              </div>
              {/* Dotted divider */}

              {/* <div className="border-r-2  border-dotted border-gray-500 h-[100px] mx-auto hidden lg:block"></div> */}
            </div>
          </div>
          {/* border dotted */}
          <div className='h-full w-[1px] border-l border-1 border-white border-dotted'></div>
          <div className='text-center'>
            <div className='flex flex-row gap-[30px] justify-center items-center'>
              <div>
                <div className=' mb-[20px]'>
                  <MdOutlineQuiz className='text-white w-[30px] h-[20px] mx-auto' />
                </div>
                <h3 className='menuHead mb-[8px]'>
                  {course.features[1]?.title2}
                </h3>
                <p className='menuPara'>{course.features[1]?.description2}</p>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <div className='flex flex-row gap-[30px] justify-center items-center'>
              <div>
                <div className=' mb-[20px]'>
                  <MdLiveTv className='text-white w-[30px] h-[20px] mx-auto' />
                </div>
                <h3 className='menuHead mb-[8px]'>
                  {course.features[2]?.title3}
                </h3>
                <p className='menuPara'>{course.features[2]?.description3}</p>
              </div>
              {/* Dotted divider */}

              {/* <div className="border-r-2  border-dotted border-gray-500 h-[100px] mx-auto hidden lg:block"></div> */}
            </div>
          </div>
          {/* border dotted */}
          <div className='h-full w-[1px] border-l border-1 border-white border-dotted'></div>
          <div className='text-center'>
            <div className='flex flex-row gap-[30px] justify-center items-center'>
              <div>
                <div className=' mb-[20px]'>
                  <svg
                    width='30'
                    height='20'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-white mx-auto'
                  >
                    <path
                      d='M20.0002 11.6663C20.9206 11.6663 21.6668 10.9201 21.6668 9.99967C21.6668 9.0792 20.9206 8.33301 20.0002 8.33301C19.0797 8.33301 18.3335 9.0792 18.3335 9.99967C18.3335 10.9201 19.0797 11.6663 20.0002 11.6663Z'
                      fill='currentColor'
                    />
                    <path
                      d='M10 28.333H30V31.6663H10V28.333ZM16.6667 19.7163L21.32 24.373L27.8733 17.8147L30 19.9997V13.333H23.3333L25.5167 15.458L21.3183 19.6563L16.6667 14.9997L10 21.6663L12.3567 24.023L16.6667 19.7163Z'
                      fill='currentColor'
                    />
                    <path
                      d='M31.6668 5.00044H26.1702C26.0051 4.75503 25.8271 4.51859 25.6368 4.29211L25.6202 4.27211C24.3952 2.84639 22.6726 1.94157 20.8035 1.74211C20.2726 1.64195 19.7277 1.64195 19.1968 1.74211C17.3278 1.94157 15.6051 2.84639 14.3802 4.27211L14.3635 4.29211C14.1733 4.51804 13.9953 4.75393 13.8302 4.99877V5.00044H8.3335C7.00782 5.00176 5.73682 5.52897 4.79942 6.46637C3.86203 7.40376 3.33482 8.67476 3.3335 10.0004V33.3338C3.33482 34.6594 3.86203 35.9304 4.79942 36.8678C5.73682 37.8052 7.00782 38.3324 8.3335 38.3338H31.6668C32.9925 38.3324 34.2635 37.8052 35.2009 36.8678C36.1383 35.9304 36.6655 34.6594 36.6668 33.3338V10.0004C36.6655 8.67476 36.1383 7.40376 35.2009 6.46637C34.2635 5.52897 32.9925 5.00176 31.6668 5.00044ZM33.3335 33.3338C33.3335 33.7758 33.1579 34.1997 32.8453 34.5123C32.5328 34.8248 32.1089 35.0004 31.6668 35.0004H8.3335C7.89147 35.0004 7.46755 34.8248 7.15498 34.5123C6.84242 34.1997 6.66683 33.7758 6.66683 33.3338V10.0004C6.66683 9.55841 6.84242 9.13449 7.15498 8.82193C7.46755 8.50937 7.89147 8.33377 8.3335 8.33377H15.9168C16.1081 7.39186 16.6191 6.54504 17.3633 5.93679C18.1075 5.32854 19.039 4.99626 20.0002 4.99626C20.9613 4.99626 21.8929 5.32854 22.637 5.93679C23.3812 6.54504 23.8922 7.39186 24.0835 8.33377H31.6668C32.1089 8.33377 32.5328 8.50937 32.8453 8.82193C33.1579 9.13449 33.3335 9.55841 33.3335 10.0004V33.3338Z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
                <h3 className='menuHead mb-[8px]'>
                  {course.features[3]?.title4}
                </h3>
                <p className='menuPara'>{course.features[3]?.description4}</p>
              </div>
              {/* Dotted divider */}
              {/* {(index + 1) % 2 !== 0 && index !== features.length - 1 && (
                  <div className="border-r-2  border-dotted border-gray-500 h-[100px] mx-auto hidden lg:block"></div>
                )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinOurClan
