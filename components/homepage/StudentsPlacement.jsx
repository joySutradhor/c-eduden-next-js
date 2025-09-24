import { HiOutlineMinusSmall } from 'react-icons/hi2'
import Marquee from 'react-fast-marquee'

function StudentsPlacement () {
  return (
    <section className='edn__lr__space edn__space__top'>
      <div className='edn__stp__text__parent group '>
        <div>
          <div className='space-y-5'>
            <h2 className='edn__title '>Our Students in Leading <span className='animate__underline'>Global Roles</span></h2>

            <p className='edn__base__text md:pt-5 lg:pt-10'>
              From creative design to cutting-edge technology, our students have
              secured prestigious roles in top multinational companies. As a
              Python <strong>Developer</strong> at <strong>Amazon</strong> ,{' '}
              <strong>UI/UX Designer</strong> at <strong>VMware</strong> ,{' '}
              <strong>Data Scientist</strong> at <strong>EY</strong> ,{' '}
              <strong>Graphic Designer</strong> at <strong>Adobe</strong> - they
              are shaping the future with innovation and expertise. Their
              success reflects our commitment to industry-focused education and
              real-world skills.
              <br />
              <br />
              Be the next success story—start your journey with us today!
            </p>
          </div>
        </div>

        {/* student placement icons */}
        <div className='overflow-x-hidden max-w-[100vw]'>
          <Marquee
            autoFill='true'
            pauseOnHover='true'
            gradient='true'
            gradientColor='black'
            speed='15'
          >
            <div className='flex  gap-10 mr-8 cursor-pointer'>
              <div className='p-1 size-20 md:size-24 lg:size-28  flex items-center justify-center'>
                <img
                  className='w-32 '
                  src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/student%20placement/amazon.png?updatedAt=1745420548205'
                  alt='amazon'
                />
              </div>

              <div className='p-1 size-20 md:size-24 lg:size-28  flex items-center justify-center'>
                <img
                  className='w-32  '
                  src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/student%20placement/vmware.png?updatedAt=1745420548126'
                  alt='vmware'
                />
              </div>

              <div className='p-1 size-20 md:size-24 lg:size-28  flex items-center justify-center'>
                <img
                  className='w-10  '
                  src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/student%20placement/ey.png?updatedAt=1745420551519'
                  alt='ey'
                />
              </div>
            </div>
          </Marquee>

          <Marquee
            autoFill='true'
            pauseOnHover='true'
            gradient='true'
            gradientColor='black'
            speed='15'
            direction='right'
          >
            <div className='flex  gap-10 mr-8 cursor-pointer'>
              <div className='p-1 lg:size-28 size-20 md:size-24  flex items-center justify-center'>
                <img
                  className='lg:w-32 w-16'
                  src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/student%20placement/ibm.png?updatedAt=1745420548061'
                  alt='ibm'
                />
              </div>

              <div className='p-1 lg:size-28 size-20 md:size-24  flex items-center justify-center'>
                <img
                  className='lg:w-32  w-16'
                  src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/student%20placement/tcs.png?updatedAt=1745420548065'
                  alt='tcs'
                />
              </div>

              <div className='p-1 lg:size-28 size-20 md:size-24  flex items-center justify-center'>
                <img
                  className='lg:w-32 w-16'
                  src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/student%20placement/cisco.png?updatedAt=1745420548208'
                  alt='cisco'
                />
              </div>
            </div>
          </Marquee>

          <Marquee
            autoFill='true'
            pauseOnHover='true'
            gradient='true'
            gradientColor='black'
            speed='15'
          >
            <div className='flex  gap-10 mr-8 cursor-pointer'>
              <div className='p-1 lg:size-28 size-20 md:size-24  flex items-center justify-center'>
                <img
                  className='w-32 '
                  src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/student%20placement/ethicalden.png?updatedAt=1745420548201'
                  alt='ethicalden'
                />
              </div>

              <div className='p-1 lg:size-28 size-20 md:size-24  flex items-center justify-center'>
                <img
                  className='w-32 '
                  src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/student%20placement/accenture.png?updatedAt=1745420548068'
                  alt='accenture'
                />
              </div>
            </div>
          </Marquee>

          <Marquee
            autoFill='true'
            pauseOnHover='true'
            gradient='true'
            gradientColor='black'
            speed='15'
            direction='right'
          >
            <div className='flex  gap-10 mr-8 cursor-pointer'>
              <div className='p-1 lg:size-28 size-20 md:size-24  flex items-center justify-center'>
                <img
                  className='w-32 '
                  src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/student%20placement/paloalto.png?updatedAt=1745420548070'
                  alt='paloalto'
                />
              </div>

              <div className='p-1 lg:size-28 size-20 md:size-24  flex items-center justify-center'>
                <img
                  className='w-10 lg:w-16'
                  src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/student%20placement/jio.png?updatedAt=1745420548076'
                  alt='jio'
                />
              </div>

              <div className='p-1 lg:size-28 size-20 md:size-24  flex items-center justify-center'>
                <img
                  className='w-32 '
                  src='https://ik.imagekit.io/0lnr4mwox/eduden-lattest/student%20placement/deloitte.png?updatedAt=1745420548080'
                  alt='deloitte'
                />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default StudentsPlacement
