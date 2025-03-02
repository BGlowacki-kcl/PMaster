import React, { useEffect, useRef, useState } from 'react'

const AboutMeComponent = ({title, text}) => {

    const dateRef = useRef(null);
    const [offset, setOffset] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const calculateViewportOffset = () => {
        if (!dateRef.current) return;
        
        const rect = dateRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        
        // Calculate distance from center of viewport (normalized between -1 and 1)
        const distanceFromCenter = (elementCenter - viewportCenter) / (windowHeight / 2);
        
        // Create a parabolic curve effect that peaks at the viewport center
        const maxOffset = 150; // Maximum pixel offset
        const offsetValue = maxOffset * (1 - Math.pow(distanceFromCenter, 2));
        
        setOffset(Math.max(0, offsetValue)); // Ensure offset is never negative
        setIsVisible(rect.top < windowHeight && rect.bottom > 0);
      };
  
      // Initial calculation
      calculateViewportOffset();
  
      // Recalculate on scroll
      const handleScroll = () => {
        window.requestAnimationFrame(calculateViewportOffset);
      };
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', calculateViewportOffset);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', calculateViewportOffset);
      };
    }, []);

  return (
    <div className="flex fex-row pt-10" >
        <div 
          className="flex flex-row justify-center items-center w-3/5" 
          ref={dateRef} 
          style={{
            transform: `translateX(${isVisible ? offset : 0}px)`,
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.3s ease-out, opacity 1s ease-out',
            willChange: 'transform, opacity'
          }}
        >
            <p className="ml-auto inline-block mr-10 text-3xl font-font2 whitespace-nowrap">{title}</p>
            <div className="relative w-1/4 bg-black h-1 mr-96">
                <div className="absolute right-0 top-1/2 transform translate-y-[-50%] h-16 w-16 rounded-full border-3 bg-secondarywood1"></div>
            </div>
        </div>
        <div 
          className="flex flex-col w-1/2"
          style={{
            transform: `translateX(${isVisible ? -offset : 0}px)`,
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.3s ease-out, opacity 1.5s ease-out',
            willChange: 'transform, opacity'
          }}  
        >
            <p className="font-font4 text-md w-3/5 text-justify border-2 border-dotted p-2">{text}</p>
        </div>
    </div>
  )
}

export default AboutMeComponent