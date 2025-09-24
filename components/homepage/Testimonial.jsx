'use client'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
// import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
// import './Testimonial.css'

import testimonialPhoto from '@/app/_assets/testimonial-bg.png'

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1
    // slidesToScroll: slidesToScroll,
  }

  return (
    <div className='edn__space__top'>
      <div className='relative'>
        <div
          style={{
            backgroundImage: `url("https://pub-1dbc090f54be4d24be3c4428336248d7.r2.dev/testimonial-bg.png")`
            // backgroundImage: `url("assets/images/testimonial-bg.png")`
          }}
          className='bg-no-repeat bg-center bg-cover w-full h-[100vh] lg:h-[75vh] flex justify-center items-center opacity-40'
        ></div>
        {/* large */}
        <div className='hidden md:block '>
          <div className=' edn__tes__container'>
            {/* ------slider */}

            <div className='slider-container   '>
              <Slider {...settings}>
                <div className='edn__tes__lg__slider__parent'>
                  <div className='edn__tes__icon__parent'>
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={45}
                      className='  edn__tes__quote__icon'
                    />

                    {/* Star Rating */}
                    <div className='edn__star__rating'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className='text-[#FFFFFF] edn__base__text  pb-[25px]'>
                      "I entered this course with meager experience in design,
                      and I would say that the course has really changed the way
                      I've been thinking about digital design.
                      {/* & has literally
                      gone through the entire process, from user research to
                      wireframing, prototyping, and usability testing. */}
                      I would recommend this course to anyone who wants to make
                      a career in UI/UX design.
                    </p>
                  </div>

                  <div className='edn__tes__author__parent'>
                    <div>
                      <img
                        className='size-12 object-cover rounded-full'
                        src='https://i.ibb.co.com/6tyPyMD/output-5.jpg'
                        alt='Sarah Chowdhury'
                      />
                    </div>
                    <div>
                      <p className='edn__tes__author'>Sarah Chowdhury</p>
                      <p className='edn__tes__author__des'>UI/UX Designer</p>
                    </div>
                  </div>
                </div>
                <div className='edn__tes__lg__slider__parent '>
                  <div className='edn__tes__icon__parent'>
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={45}
                      className='  edn__tes__quote__icon'
                    />

                    {/* Star Rating */}
                    <div className='edn__star__rating'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className='text-[#FFFFFF] edn__base__text  pb-[25px]'>
                      The website was great. Entered the course with zero
                      knowledge of coding but by the end of it, I was able to
                      create complete and fully functional websites.I am now
                      working as a junior web developer, and really, I can't ask
                      for a better foundation.
                    </p>
                  </div>

                  <div className='edn__tes__author__parent'>
                    <div>
                      <img
                        className='size-12 object-cover rounded-full'
                        src='https://i.ibb.co.com/8XkWXPb/output-6.jpg'
                        alt='Audry Roy'
                      />
                    </div>
                    <div>
                      <p className='edn__tes__author'>Audry Roy</p>
                      <p className='edn__tes__author__des'>Web Developer</p>
                    </div>
                  </div>
                </div>
                <div className='edn__tes__lg__slider__parent'>
                  <div className='edn__tes__icon__parent'>
                    <FaQuoteLeft
                      size={45}
                      className='  edn__tes__quote__icon'
                    />

                    <div className='edn__star__rating'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className='text-[#FFFFFF] edn__base__text  pb-[25px]'>
                      I've got a history relating to art and drawing which has
                      always gripped me.
                      {/* however, it felt appropriate to make a
                      big move to put this area of passion into full throttle
                      with graphic design.  */}
                      Case studies were very hands-on and enabled me to build a
                      diverse portfolio. I would recommend this to anyone keen
                      to step into the realm of graphic design.
                    </p>
                  </div>

                  <div className='edn__tes__author__parent'>
                    <div>
                      <img
                        className='size-12 object-cover rounded-full'
                        src='https://i.ibb.co.com/mTzDs5N/ellipse-14-1-66f6556b12a75.webp'
                        alt='Lisa Dowen'
                      />
                    </div>
                    <div>
                      <p className='edn__tes__author'>Rifat Islam</p>
                      <p className='edn__tes__author__des'>Graphics Designer</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>

            {/* text */}

            <div className=' '>
              <h1 className='edn__base__text text-[#FFD300] testimonialSub pb-[25px]'>
                Testimonial
              </h1>
              <h1 className='edn__title text-[#FFFFFF]  '>What students say</h1>
              <div className='pb-[35px]'>
                <p className='edn__base__text text-[#FFFFFF] pb-[10px]'>
                  I Never Thought Learning Could Be This Fun! Studying feels so
                  easy with all the hands-on activities and engaging quizzes.
                  This website made learning so much more fun, and I'm able to
                  track my progress step by step. It's like having a tutor in my
                  pocket 24/7!
                </p>
                <p className='edn__base__text text-[#FFFFFF]  '>
                  {' '}
                  - Adnan Mahmud, College Student
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* phone */}
        <div className='md:hidden block'>
          <div className=' edn__lr__space  edn__space__top absolute inset-0 grid grid-cols-1  items-center justify-between gap-x-[30px]'>
            {/* text */}

            <div className=' text-center'>
              <h1 className='edn__base__text text-[#FFD300]  mb-[5px] '>
                Testimonial
              </h1>
              <h1 className='edn__card__title   text-[#FFFFFF]  '>
                What students say
              </h1>
              <div className='pt-[20px] pb-10'>
                <p className='edn__base__text text-[#FFFFFF] text-left '>
                  I Never Thought Learning Could Be This Fun! Studying feels so
                  easy with all the hands-on activities and engaging quizzes.
                  This website made learning so much more fun, and I'm able to
                  track my progress step by step. It's like having a tutor in my
                  pocket 24/7!
                </p>
                <p className='edn__base__text text-[#FFFFFF] text-center pt-[10px]'>
                  {' '}
                  - Adnan Mahmud, College Student
                </p>
              </div>

              {/* <button className="text-[#010101] buttonPara"></button> */}
            </div>
            {/* ------slider */}
            <div className='slider-container mb-[50px]'>
              <Slider {...settings}>
                <div className='text-[#FFFFFF] rounded-[10px]  max-w-[100%] py-[15px] px-[15px]  relative bg-[#22212199]/[.6] '>
                  <div className='edn__tes__icon__parent'>
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className='  text-[#FFFFFF] mb-[10px]'
                    />

                    {/* Star Rating */}
                    <div className='flex items-center mb-[10px] text-[#FFD300]  gap-x-[6px] pr-[20px]'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className='text-[#FFFFFF] customPara pr-[5px] pb-[10px]'>
                      "I entered this course with meager experience in design,
                      and I would say that the course has really changed the way
                      I've been thinking about digital design.
                      {/* & has literally
                      gone through the entire process, from user research to
                      wireframing, prototyping, and usability testing. */}
                      I would recommend this course to anyone who wants to make
                      a career in UI/UX design.
                    </p>
                  </div>

                  <div className='flex items-center mb-[5px]'>
                    <div>
                      <img
                        className='w-[40px] h-[40px] object-cover  rounded-full'
                        src='https://i.ibb.co.com/6tyPyMD/output-5.jpg'
                        alt='Sarah Chowdhury'
                      />
                    </div>
                    <div>
                      <p className='text-[16px] leading-[16px] font-bold font-gucina text-[#FFD300] mb-1'>
                        Sarah Chowdhury
                      </p>
                      <p className='font-sans font-normal text-[10px] leading-[10px] text-[#FFFFFF] '>
                        UI/UX Designer
                      </p>
                    </div>
                  </div>
                </div>

                <div className='text-[#FFFFFF] rounded-[10px]  max-w-[100%] py-[15px] px-[15px]  relative bg-[#22212199]/[.6] '>
                  <div className='edn__tes__icon__parent'>
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className='  text-[#FFFFFF] mb-[10px]'
                    />

                    {/* Star Rating */}
                    <div className='flex items-center mb-[10px] text-[#FFD300] gap-x-[6px] pr-[20px]'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className='text-[#FFFFFF] customPara pr-[5px] pb-[10px]'>
                      The website was great. Entered the course with zero
                      knowledge of coding but by the end of it, I was able to
                      create complete and fully functional websites.I am now
                      working as a junior web developer, and really, I can't ask
                      for a better foundation.
                    </p>
                  </div>

                  <div className='flex items-center mb-[5px]'>
                    <div>
                      <img
                        className='w-[40px] h-[40px] object-cover rounded-full'
                        src='https://i.ibb.co.com/8XkWXPb/output-6.jpg'
                        alt='Audry Roy'
                      />
                    </div>
                    <div>
                      <p className='text-[16px] leading-[16px] font-bold font-gucina text-[#FFD300] mb-1'>
                        Audry Roy
                      </p>
                      <p className='font-sans font-normal text-[10px] leading-[10px] text-[#FFFFFF]'>
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className='text-[#FFFFFF] rounded-[10px]  max-w-[100%] py-[15px] px-[15px]  relative bg-[#22212199]/[.6] '>
                  <div className='edn__tes__icon__parent'>
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className='  text-[#FFFFFF] mb-[10px]'
                    />

                    {/* Star Rating */}
                    <div className='flex items-center mb-[10px] text-[#FFD300] gap-x-[6px] pr-[20px]'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className='text-[#FFFFFF] customPara pr-[5px] pb-[10px]'>
                      I've got a history relating to art and drawing which has
                      always gripped me.
                      {/* however, it felt appropriate to make a
                      big move to put this area of passion into full throttle
                      with graphic design.  */}
                      Case studies were very hands-on and enabled me to build a
                      diverse portfolio, now ready to tackle both print and
                      digital design projects. I would recommend this to anyone
                      keen to step into the realm of graphic design.
                    </p>
                  </div>

                  <div className='flex items-center mb-[5px]'>
                    <div>
                      <img
                        className='w-[40px] h-[40px] object-cover rounded-full'
                        src='https://i.ibb.co.com/mTzDs5N/ellipse-14-1-66f6556b12a75.webp'
                        alt='Lisa Dowen'
                      />
                    </div>
                    <div>
                      <p className='text-[16px] leading-[16px] font-bold font-gucina text-[#FFD300] mb-1 '>
                        Rifat Islam
                      </p>
                      <p className='font-sans font-normal text-[10px] leading-[10px] text-[#FFFFFF]'>
                        Graphic Designer
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
