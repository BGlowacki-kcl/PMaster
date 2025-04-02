import React, { forwardRef } from 'react'
import PricingCard from '../landingPage/PricingCard'

const Pricing = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen justify-center items-center w-full flex flex-col bg-secondarywood2">
    <p className="tracking-widest mb-auto mt-10 text-5xl font-font3 text-bold text-fuchsia-900">PRICING</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-20 justify-center items-center mb-10 ml-10 mr-10">
      <PricingCard 
        img="/illustrations/free.png"
        title="Free plan includes"
        benefits={["Smart task assignment tailored to your team’s availability", "Effortless meeting agenda creation to keep everyone aligned", "Basic risk analysis tools to anticipate and mitigate challenges", "A collaborative dashboard for tracking progress and milestones"]}
        subText="Get started with essential tools for smart project management - completely free"
      />
      <PricingCard 
        img="/illustrations/soon.png"
        title="Paid plan includes"
        benefits={["Includes all features from the Free Plan",
          "Advanced risk analysis with reports and predictive insights",
          "Auto-generated, customizable meeting minutes for seamless follow-ups",
          "Priority support for faster resolutions and guidance",
          "Enhanced team analytics to optimize performance"]}
        subText="Unlock advanced features for deeper insights, smarter collaboration, and ultimate productivity, including everything from the Free Plan."
      />
    </div>
    </div>
  )
})

export default Pricing