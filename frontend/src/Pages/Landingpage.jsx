import React from 'react'
import SlideImg from "../Components/LandingPage/Sliderimg/Sliderimg"
import AboutUs from "../Components/LandingPage/Aboutus/AboutUs"
import TestimonialContainer from "../Components/LandingPage/TestimonialContainer/TestimonialContainer"
import OurTeamContainer from "../Components/LandingPage/OurTeamContainer/ourTeamContainer"

export default function Landingpage() {
  return (
    <div>
       <SlideImg />
      <AboutUs />
      <TestimonialContainer />
      <OurTeamContainer />

    </div>
  )
}
