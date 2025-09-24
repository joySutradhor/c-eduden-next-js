
function Tooltip ({btnText , className}) {
  return (
    <div className={`${className} mb-[2vh]`}>
      <button className='py-1 px-6 mb-[2vh] bg-white text-black rounded-full'>
         {btnText}
      </button>
    </div>
  )
}

export default Tooltip