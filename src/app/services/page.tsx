import ServiceLocations from '@/components/ServiceLocationsChart/ServiceLocationsChart'
import Services from '@/components/Services/Services'

import React from 'react'

export default function page() {
  return (
    <section className='overflow-x-hidden'>
    <Services/>
    <ServiceLocations/>
    </section>
  )
}
