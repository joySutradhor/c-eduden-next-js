function CommonHero ({ src, text, colorText }) {
  return (
    <section
      style={{ backgroundImage: `url(${src})` }}
      className={`bg-center bg-cover bg-no-repeat h-[60vh] edn__lr__space flex items-center justify-center group `}
    >
      <div className="text-center">
        <h1 className='edn__title text-center leading-relaxed'>
          {text}
        </h1>
        <div>
          {colorText && (
            <span className='animate__underline text-[#ffd300] edn__title  text-center leading-relaxed '>
              {colorText}
            </span>
          )}
        </div>
      </div>
    </section>
  )
}

export default CommonHero
