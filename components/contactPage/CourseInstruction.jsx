import { FiAward } from 'react-icons/fi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md'
import { BsGraphUpArrow } from 'react-icons/bs'

const CourseInstruction = () => {
  const cardData = [
    {
      id: 1,
      title: 'Course Certificate',
      description:
        'Every assignment and the final exams with a minimum 50% mark will earn a course certificate.',
      icon: FiAward
    },
    {
      id: 2,
      title: 'Best Instructors',
      description:
        'Learn from industry-leading instructors with years of experience in their respective fields.',
      icon: FaChalkboardTeacher
    },
    {
      id: 3,
      title: 'Verified Assignments',
      description:
        'All assignments are carefully evaluated to ensure quality and accuracy before certification.',
      icon: MdOutlineAssignmentTurnedIn
    },
    {
      id: 4,
      title: 'Career Growth',
      description:
        'Our courses are tailored to boost your professional growth and industry readiness.',
      icon: BsGraphUpArrow
    }
  ]

  return (
    <>
      <div className='flex lg:flex-row  flex-col xl:gap-x-[68px] gap-x-[30px] justify-between items-start '>
        <div className='grid xl:grid-cols-2 gap-[3vw] xl:gap-[10vw] items-start'>
          <h2 className='edn__title'>
            We Provide The Best Quality Online Courses
          </h2>
          <p className='edn__base__text '>
            Well, because we’re not your grandma’s boring old school! At eduden,
            we’re the rebels of education, the mavericks of learning, and the
            champions of fun-filled knowledge. We’ll teach you how to slay
            dragons and code websites, all while cracking jokes and sipping on
            virtual coffee. So, why settle for snooze-worthy lectures when you
            can join the eduden revolution? Let’s make learning epic
            together!Well, because we’re not your grandma’s boring old school!
            At eduden, we’re the rebels of education, the mavericks of learning,
            and the champions of fun-filled knowledge. We’ll teach you how to
            slay dragons and code websites, all while cracking jokes and sipping
            on virtual coffee.
          </p>
        </div>
      </div>

      <div className='edn__space__top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4  items-center gap-5'>
        {cardData.map(({ id, title, description, icon: Icon }) => (
          <div
            key={id}
            className='group   bg-[#141414] p-5 lg:p-10 transition-all duration-500 h-full rounded-xl  hover:translate-y-[5vh] ease-in-out'
          >
            <div className='size-14 mb-[3vh] bg-white  rounded-full flex justify-center items-center transition-colors duration-500 ease-in-out'>
              <Icon className='w-8 h-8 text-black  transition-colors duration-500  ease-in-out rounded-full ' />
            </div>
            <h3 className='edn__card__title   transition-colors duration-500 ease-in-out'>
              {title}
            </h3>
            <p className='edn__base__text   transition-colors duration-500 ease-in-out' >
              {description}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default CourseInstruction
