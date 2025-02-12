import { useState } from 'react';
import homeStyle from './home.module.css';

import Main from './main/Main'  // MAIN
import Slider from './slider/Slider'  // SLIDER
import Services from './services/Services'  // SERVICES
import CaseStudies from './CaseStudies/CaseStudies'; // CASESTUDIES
import OurWorkingProcess from './OurWorkingProcess/OurWorkingProcess'; // OURWORKINGPROGRESS
import Team from './team/Team'  // TEAM
import Testimonials from './testimonials/Testimonials'; // TESTIMONIALS
import ContactUs from './contactUs/ContactUs'


function Home() {
  return (
    <>
      <div className={homeStyle.body}>
        <Main />
        <Slider />
        <Services />
        <CaseStudies />
        <OurWorkingProcess/>
        <Team />
        <Testimonials />
        <ContactUs />
      </div>
    </>
  );
}

export default Home;
