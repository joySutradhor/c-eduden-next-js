'use client'
import { useParams } from 'next/navigation'
import { CourseData } from '@/app/FakeDb/CourseData'
import Benifits from '@/components/CourseDetailsCmp/Benifits'
import Currriculam from '@/components/CourseDetailsCmp/Currriculam'
import JoinOurClan from '@/components/CourseDetailsCmp/JoinOurClan'
import CourseInfo from '@/components/CourseDetailsCmp/CourseInfo'

export default function Page () {
  const { id } = useParams()
  console.log('URL id:', id)

  // find course by id
  const course = CourseData.find(item => String(item.id) === String(id))

  if (!course) {
    return (
      <div className='flex items-center justify-center h-[50vh]'>
        <h2 className='text-2xl font-bold text-red-600'>Course Not Found!</h2>
      </div>
    )
  }

  return (
    <div>
      <div className='edn__hero__container'>
        <h2 className='edn__title'>Course Details</h2>
        <p className='edn__small__title'>Home / courses / {course.title}</p>
      </div>

      <section>
        <CourseInfo course={course} />
        <JoinOurClan course={course} />
        <Currriculam course={course} />
        <Benifits course={course} />
      </section>
    </div>
  )
}
