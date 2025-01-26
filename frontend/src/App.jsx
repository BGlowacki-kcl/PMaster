import { Alert, Box, Snackbar } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import { useRef, useState } from 'react';

function App() {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);
  
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'info',
  })

  const showNotification = (message, severity = 'info') => {
    setNotification({
      open: true,
      message,
      severity,
    });

    // Automatically dismiss after 5 seconds
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, open: false }));
    }, 3000);
  };

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
      <Home ref={homeRef} showNotification={showNotification} />
      <Features ref={featuresRef} showNotification={showNotification} />
      <Pricing ref={pricingRef} showNotification={showNotification} />
      <AboutUs ref={aboutUsRef} showNotification={showNotification} />
      <Contact ref={contactRef} showNotification={showNotification} />

      <Snackbar
        open={notification.open}
        anchorOrigin={{ vertical: 'down', horizontal: 'right' }}
        onClose={() => setNotification((prev) => ({ ...prev, open: false }))}
      >
        <Alert severity={notification.severity} variant="filled">
          {notification.message}
        </Alert>
      </Snackbar>

    </Box>
  )
}

export default App
