import WhatsNewCmp from '@/components/whatsNewCmp/WhatsNewCmp'
import React from 'react'

export default function page () {
  return (
    <section>
      <div className='edn__hero__container'>
        <h2 className='edn__title text-black'>What's New </h2>
      </div>

      {/* what new componets  */}
      <WhatsNewCmp />
    </section>
  )
}
