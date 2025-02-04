
import ActionAndServices from '@/components/ActionAndServices/ActionAndServices';
import CTASection from '@/components/CTASection/CTASection';
import Herosection from '@/components/Hero-section/Herosection';
import JoinUsSection from '@/components/JoinUsSelect/JoinUsSelect';
import MissionSection from '@/components/Mission/Mission';

import ServicesSection from '@/components/ServicesSection/ServicesSection';
import React from 'react';

export default function Main() {
  return <>
 <Herosection/>
{/* <MissionSection/>
 <ServicesSection /> */}
 <JoinUsSection/>
 <ActionAndServices/>
{/* <CTASection/> */}
  </>;
}
