import { Stack } from '@mui/material';
import React, { forwardRef } from 'react';
import FeatureCard from '../components/FeatureCard';
import FeatureHor from '../components/FeatureHor';

const Features = forwardRef((props, ref, showNotification) => {
  return (
    <>
      <Stack ref={ref} className="min-h-screen justify-center items-center w-full relative flex">
        <p className="tracking-widest text-5xl font-font3 text-bold text-fuchsia-900 mb-3 mt-5">FEATURES</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-5 mr-5 md:ml-30 md:mr-30 justify-center items-center">
          <FeatureCard
            img="/illustrations/schedule.png"
            title="Task scheduling"
            text="Let Krono do the heavy lifting by assigning tasks intelligently based on team members’ skills and availability. Maximize productivity and ensure the right people are working on the right tasks. Watch your team thrive with optimized workloads."
          />

          <FeatureCard
            img="/illustrations/meeting.png"
            title="Meeting Agenda and Minutes"
            text="Create clear, organized meeting agendas in seconds with Krono. Capture minutes automatically and ensure no detail goes unnoticed. Save time, stay aligned, and make meetings truly productive."
          />

          <FeatureCard
            img="/illustrations/risk.png"
            title="Risk Analysis"
            text="Identify potential challenges before they arise with Krono’s advanced risk analysis. Pinpoint vulnerabilities and receive actionable insights to mitigate risks effectively. Stay one step ahead to ensure your project’s success."
          />

        </div>
      </Stack>
      <Stack className="min-h-screen grid grid-rows-3 mb-10 mt-20 lg:mt-10 gap-10 justify-center items-center w-full relative">
        <FeatureHor
          title="Save Time, Maximize Impact"
          text="Stop juggling endless spreadsheets and meetings. Krono automates planning, simplifies communication, and reduces wasted time, so you can focus on progress."
          img="/illustrations/time.svg"
          isLeft={true}
        />
        <FeatureHor
          title="Empower Your Team"
          text="Foster collaboration by ensuring everyone knows their role and stays aligned. Krono’s smart system adapts to your team’s skills and keeps everyone on track."
          img="/illustrations/team.svg"
          isLeft={false}
        />
        <FeatureHor
          title="Confidence in Every Step"
          text="From roadmap creation to risk management, Krono gives you full control and visibility. Make decisions backed by real-time insights and move forward with confidence."
          img="/illustrations/tasks.svg"
          isLeft={true}
        />
      </Stack>
    </>
  )
})

export default Features