import React, { useState } from 'react';
import WaitlistDialog from './WaitlistDialog.jsx';
import { useNavigate } from 'react-router-dom';

function Navbar({ Home, Features, Pricing, AboutUs, Contact, showNotification }) {
  const [waitlist, setWaitlist] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleScroll = (ref) => () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const showWaitlist = () => {
    setWaitlist(true);
  };
  const closeWaitlist = () => {
    setWaitlist(false);
  };

  // Toggle the dropdown menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky z-20 top-0 flex flex-row justify-between items-center h-20 bg-secondarysky1/80 backdrop-blur-md backdrop-filter px-4">
      <WaitlistDialog open={waitlist} close={closeWaitlist} showNotification={showNotification} />
      
      {/* Logo Section */}
      <div className="flex items-center h-24 justify-center">
        <img src="/logos/logo_sm.png" className="min-h-32 h-24 object-contain" alt="logo" />
      </div>

      {/* Navbar Buttons */}
      <div className="relative text-sm sm:text-lg font-font3 items-center justify-center sm:ml-auto sm:mr-auto hidden sm:flex space-x-4 *:ml-3 *:mr-3 *:hover:bg-secondarywood1 *:p-2 *:rounded-md *:bg-secondarywood2 *:cursor-pointer">
        <button onClick={handleScroll(Home)} className="p-2 hover:bg-secondarywood1 rounded-md">Home</button>
        <button onClick={handleScroll(Features)} className="p-2 hover:bg-secondarywood1 rounded-md">Features</button>
        <button onClick={handleScroll(Pricing)} className="p-2 hover:bg-secondarywood1 rounded-md">Pricing</button>
        <button onClick={handleScroll(AboutUs)} className="p-2 hover:bg-secondarywood1 rounded-md">About us</button>
        <button onClick={handleScroll(Contact)} className="p-2 hover:bg-secondarywood1 rounded-md">Contact</button>
      </div>

      {/* Account Buttons */}
      <div className="relative hidden sm:block space-x-10">
        <button className="font-font2 bg-primarywood2/80 rounded-sm cursor-pointer hover:shadow hover:bg-primarywood2 p-2" onClick={() => navigate("/signin")}>Sign In</button>
        <button className="font-font2 bg-primarywood2/80 rounded-sm cursor-pointer hover:shadow hover:bg-primarywood2 p-2" onClick={() => navigate("/signup")}>Sign Up</button>
      </div>

      {/* Hamburger Menu Button for Small Screens */}
      <div className="sm:hidden flex items-center justify-center">
        <button onClick={toggleMenu} className="text-3xl text-primarysky1 hover:cursor-pointer">
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="sm:hidden absolute top-20 left-0 w-full bg-secondarysky1/80 backdrop-blur-md backdrop-filter flex flex-col items-center space-y-4 py-4 *:ml-3 *:mr-3 *:hover:bg-secondarywood1 *:p-2 *:rounded-md *:bg-secondarywood2 *:cursor-pointer">
          <button onClick={handleScroll(Home)} className="p-2 text-lg">Home</button>
          <button onClick={handleScroll(Features)} className="p-2 text-lg">Features</button>
          <button onClick={handleScroll(Pricing)} className="p-2 text-lg">Pricing</button>
          <button onClick={handleScroll(AboutUs)} className="p-2 text-lg">About us</button>
          <button onClick={handleScroll(Contact)} className="p-2 text-lg">Contact</button>
          <button className="font-font2 bg-primarywood2/80 rounded-sm cursor-pointer hover:shadow hover:bg-primarywood2 p-2" onClick={showWaitlist}>Sign In</button>
          <button className="font-font2 bg-primarywood2/80 rounded-sm cursor-pointer hover:shadow hover:bg-primarywood2 p-2" onClick={showWaitlist}>Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
