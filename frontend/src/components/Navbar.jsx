import React, { useState } from 'react';
import WaitlistDialog from './WaitlistDialog.jsx';

function Navbar({Home, Features, Pricing, AboutUs, Contact, showNotification}) {
    const [waitlist, setWaitlist] = useState(false);

    const handleScroll = (ref) => () => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }

    const showWaitlist = () => {
        setWaitlist(true);
    }
    const closeWaitlist = () => {
        setWaitlist(false);
    }

  return (
    <div className="sticky z-20 top-0 flex flex-row jestify-center h-20 bg-secondarysky1/80 backdrop-blur-md backdrop-filter">
        <WaitlistDialog open={waitlist} close={closeWaitlist} showNotification={showNotification} />
        <div className="relative flex items-center justify-center h-20 left-10">
            <img src="/logos/logo_sm.png" className="h-50 w-auto object-contain" alt="logo" />
        </div>
        <div className="relative text-lg flex font-font3 items-center justify-center h-full ml-auto mr-auto left-30 *:ml-3 *:mr-3 *:hover:bg-secondarywood1 *:p-2 *:rounded-md *:bg-secondarywood2 *:cursor-pointer">
            <button onClick={handleScroll(Home)} >Home</button>
            <button onClick={handleScroll(Features)} >Features</button>
            <button onClick={handleScroll(Pricing)} >Pricing</button>
            <button onClick={handleScroll(AboutUs)} >About us</button>
            <button onClick={handleScroll(Contact)} >Contact</button>
        </div>
        <div className="relative flex items-center justify-center h-full right-10">
            <button className="font-font2 bg-primarywood2/80 rounded-sm cursor-pointer hover:shadow hover:bg-primarywood2 p-2" onClick={showWaitlist} >Waitlist</button>
        </div>
    </div>
  )
}

export default Navbar;