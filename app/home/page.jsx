import AboutUs from '@/components/homepage/AboutUs'
import AllCourses from '@/components/homepage/AllCourses'
import Faq from '@/components/homepage/Faq'
import Hero from '@/components/homepage/Hero'
import NeedHelp from '@/components/homepage/NeedHelp'
import OfficeLocation from '@/components/homepage/OfficeLocation'
import StudentsPlacement from '@/components/homepage/StudentsPlacement'
import Technology from '@/components/homepage/Technology'
import Testimonial from '@/components/homepage/Testimonial'
import UpcommingMicroCourses from '@/components/homepage/UpcommingMicroCourses'
import React from 'react'

function Home () {
  return (
    <section>
      <Hero />
      <AboutUs />
      <StudentsPlacement />
      <AllCourses />
      <Technology />
      <UpcommingMicroCourses />
      <Testimonial />
      <NeedHelp />
      <OfficeLocation />
      <Faq />
    </section>
  )
}

export default Home
