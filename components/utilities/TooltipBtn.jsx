import "@/components/TextAnimate/textAnimate.css"

function TooltipBtn ({btnText , title , para , className , colorText}) {
  return (
    <div className={`${className} mb-[5vh] group`}>
      <button className='py-1 px-6 mb-[2vh] border-2 border-[#ffd300] text-white rounded-full'>
         {btnText}
      </button>
      <h1 className='edn__title '> {title} <span className="animate__underline">{colorText}</span></h1>
      <p className='edn__base__text pt-5'>
         {para}
      </p>
    </div>
  )
}

export default TooltipBtn
