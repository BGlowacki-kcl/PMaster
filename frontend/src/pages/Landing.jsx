import { Box } from '@mui/material'
import Navbar from '../components/Navbar'
import Home from './Home';
import Features from './Features';
import Pricing from './Pricing';
import AboutUs from './AboutUs';
import Contact from './Contact';
import { useRef } from 'react';

const Landing = ({ showNotification }) => {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Box className="bg-secondarysky2 w-full">
      <Navbar 
        Home={homeRef}
        Features={featuresRef}
        Pricing={pricingRef}
        AboutUs={aboutUsRef}
        Contact={contactRef}
        showNotification={showNotification}
      />
      <Home ref={homeRef} />
      <Features ref={featuresRef} />
      <img src="/illustrations/rocket.svg" className="absolute h-60 w-auto mt-40 top-3/4 right-0 mr-10 opacity-0 lg:opacity-100 z-0" alt="star" />
      <Pricing ref={pricingRef} />
      <AboutUs ref={aboutUsRef} />
      <Contact ref={contactRef} />
    </Box>
  )
}

export default Landing
