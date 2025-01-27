import { Stack } from '@mui/material';
import React, { forwardRef } from 'react';
import FeatureCard from '../components/FeatureCard';
import FeatureHor from '../components/FeatureHor';

const Features = forwardRef((props, ref, showNotification) => {
  return (
    <>
      <Stack ref={ref} className="h-screen justify-center items-center w-full relative flex">
        <p className="tracking-widest text-5xl font-font3 text-bold text-fuchsia-900">FEATURES</p>
        <div className="grid grid-cols-1 md:grid-cols-3 ml-30 mr-30 gap-20 h-3/4 justify-center items-center">
          <FeatureCard
            img="/illustrations/schedule.png"
            title="Task scheduling"
            text="Identify potential challenges before they arise with Krono’s advanced risk analysis. Pinpoint vulnerabilities and receive actionable insights to mitigate risks effectively. Stay one step ahead to ensure your project’s success."
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
      <Stack className="h-screen grid grid-rows-3 gap-10 justify-center items-center w-full relative">
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