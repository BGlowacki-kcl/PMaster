import React, { forwardRef } from 'react'
import AboutMeComponent from '../components/AboutMeComponent'

const AboutUs = forwardRef((props, ref, showNotification) => {
  return (
    <div ref={ref} className="h-screen bg-secondarywood1" >
      <AboutMeComponent 
        title="Mission"
        text="To simplify project management by empowering teams with intelligent tools that drive efficiency, collaboration, and success. We strive to eliminate the stress of planning and ensure every team member can focus on what matters most. Krono is built to make achieving goals effortless."
      />
    </div>
  )
})

export default AboutUs