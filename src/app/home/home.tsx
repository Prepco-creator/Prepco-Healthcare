
import ActionAndServices from '@/components/ActionAndServices/ActionAndServices';
import Herosection from '@/components/Hero-section/Herosection';
import JoinUsSection from '@/components/JoinUsSelect/JoinUsSelect';

import React from 'react';

export default function Main() {
  return <>
    <section>
      <Herosection />
      {/* <MissionSection/>
 <ServicesSection /> */}
      <JoinUsSection />
      <ActionAndServices />
      {/* <CTASection/> */}
    </section>
  </>;
}
