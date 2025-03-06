import { Stack, Box } from '@mui/material';
import React, { forwardRef, useState } from 'react';
import WaitlistDialog from '../components/WaitlistDialog';

const Home = forwardRef((props, ref, showNotification) => {
  const[waitlist, setWaitlist] = useState(false);

  const showWaitlist = () => {
    setWaitlist(true);
  }
  const closeWaitlist = () => {
      setWaitlist(false);
  }

  return (
    <Stack ref={ref} className='flex flex-col bg-secondarysky1 pl-10 pr-10 pb-10 pt-2 min-h-screen'>
      
      <WaitlistDialog open={waitlist} close={closeWaitlist} showNotification={showNotification} />
      <Box className="flex flex-col relative left-1/7 items-center mt-10 mb-4 justify-center lg:w-1/2 md:w-2/3 w-full">
          <p className="font-font2 font-bold text-3xl lg:text-[3vw]"  >The only Project management tool you will ever need!</p>
      </Box>
      <Box className="relative flex flex-col lg:flex-row w-full mt-2 mb-auto">
        <div className="relative flex flex-col space-y-4 items-end mt-8">

          <p className="relative min-w-28 font-font4 text-[1rem] lg:text-[1.5vw] ml-8 lg:ml-12 xl:ml-32 mr-4 bg-primarywood2/20 p-7 rounded-sm text-primarysky1">
            Take the stress out of project management! Our smart scheduler creates tailored roadmaps, understands your team’s skills, and optimizes every step to success. Focus on what matters while we handle the planning. From task alignment to goal achievement, everything is simplified. Try Krono today and make your projects seamless, efficient, and worry-free. Let’s get things done—together!
          </p>
          <div className='flex flex-row items-center w-full space-x-4 ml-8 lg:ml-12 xl:ml-32'>
            <img src="/illustrations/line.png" className="h-10 md:block hidden w-auto self-start" />

            <button
              onClick={showWaitlist}
              className="z-10 rounded-full min-w-[250px] cursor-pointer hover:shadow hover:bg-primarywood1 ml-auto mr-2 md:mr-20 h-[140%] text-bold font-font2 text-xl px-6 bg-primarywood1/80"
            >
              Sign up to Waitlist!
            </button>
          </div>
        </div>

        <img src="/illustrations/team_main.svg" className="relative mr-16 md:mr-10 lg:mr-0 md:mt-0 mt-20 ml-auto max-h-48 md:max-h-60 lg:max-h-72 xl:max-h-80 w-full" alt="schedule" />
        
      </Box>

    </Stack>
  )
})

export default Home;