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
    <Stack ref={ref} className='h-screen flex bg-secondarysky1'>
      
      <WaitlistDialog open={waitlist} close={closeWaitlist} showNotification={showNotification} />
        <Box className="flex flex-col absolute left-1/7 mt-10 items-center justify-center w-1/2">
            <p className="font-font2 text-5xl font-bold" >The only Project management tool you will ever need!</p>
        </Box>
        <Box className="absolute h-full w-full">
          <img src="/illustrations/team_main.svg" className="absolute right-0 mr-10 top-1/4 h-80 w-auto" alt="schedule" />
          <p className="absolute font-font4 w-2/5 text-xl ml-10 bg-primarywood2/20 p-7 rounded-sm left-1/7 top-1/4 text-primarysky1" >Take the stress out of project management! Our smart scheduler creates tailored roadmaps, understands your team’s skills, and optimizes every step to success. Focus on what matters while we handle the planning. From task alignment to goal achievement, everything is simplified. Try Krono today and make your projects seamless, efficient, and worry-free. Let’s get things done—together!</p>
          <button onClick={showWaitlist} className="rounded-full cursor-pointer hover:shadow hover:bg-primarywood1 h-12 text-bold font-font2 text-xl pl-4 pr-4 absolute bottom-1/4 left-1/3 bg-primarywood1/80" >Sign up to Waitlist!</button>
          <img src="/illustrations/line.png" className="h-80 w-auto absolute bottom-1/6 left-1/12" />
        </Box>

    </Stack>
  )
})

export default Home;