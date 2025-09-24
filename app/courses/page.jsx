import AllCourses from '@/components/homepage/AllCourses'

import React from 'react'

function Courses () {
  return (
    <section>
      <div className='edn__hero__container'>
        <h2 className='edn__title text-black'>Course </h2>
      </div>
      {/*All Courses */}
      <AllCourses />
    </section>
  )
}

export default Courses
