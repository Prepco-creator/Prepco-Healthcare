import HealthCallToAction from '@/components/HealthCallToAction/HealthCallToAction'
import HealthCrisis from '@/components/HealthCrisis/HealthCrisis'
import React from 'react'

export default function page() {
  return (
    <>
    <section className='overflow-x-hidden'>
    <HealthCrisis/>
    <HealthCallToAction/>
    </section>
    </>
  )
}
