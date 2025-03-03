import React, { forwardRef } from 'react'
import AboutMeComponent from '../components/AboutMeComponent'

const AboutUs = forwardRef((props, ref, showNotification) => {
  return (
    <div ref={ref} className="min-h-screen bg-secondarywood1" >
      <AboutMeComponent 
        title="Mission"
        text="To simplify project management by empowering teams with intelligent tools that drive efficiency, collaboration, and success. "
      />
      <AboutMeComponent 
        title="Vision"
        text="To redefine how teams work together, creating a future where every project is streamlined, stress-free, and impactful. We envision a world where intelligent planning bridges the gap between ideas and success."
      />
      <AboutMeComponent 
        title="Goal"
        text="Our goal is to become the go-to platform for smart scheduling and project management. By combining cutting-edge technology with a user-centric approach, we aim to simplify complex workflows for teams everywhere."
      />
      <AboutMeComponent 
        title="Core Values"
        text="We believe in innovation, collaboration, and simplicity. Our focus is on creating tools that are easy to use, powerful, and foster trust. At Krono, we prioritize solutions that truly help people."
      />
    </div>
  )
})

export default AboutUs