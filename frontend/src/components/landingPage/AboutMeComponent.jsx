import React, { useEffect, useRef, useState } from 'react';

const AboutMeComponent = ({ title, text }) => {
  const dateRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) return;

    const calculateViewportOffset = () => {
      if (!dateRef.current) return;

      const rect = dateRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      const distanceFromCenter = (elementCenter - viewportCenter) / (windowHeight / 2);
      const maxOffset = 180;
      const offsetValue = maxOffset * (1 - Math.pow(distanceFromCenter, 2));

      setOffset(Math.max(0, offsetValue));
      setIsVisible(rect.top < windowHeight && rect.bottom > 0);
    };

    calculateViewportOffset();
    window.addEventListener('scroll', calculateViewportOffset);
    window.addEventListener('resize', calculateViewportOffset);

    return () => {
      window.removeEventListener('scroll', calculateViewportOffset);
      window.removeEventListener('resize', calculateViewportOffset);
    };
  }, [isSmallScreen]);

  return (
    <div className="pt-10">
      {isSmallScreen ? (
        // **Small Screen Layout (lg and below)**
        <div className="flex flex-col items-start px-4">
          <p className="text-xl font-font2">{title}</p>
          <p className="font-font4 text-md text-justify border-2 border-dotted p-2 w-full">{text}</p>
        </div>
      ) : (
        // **Large Screen Layout (Above lg)**
        <div className="flex flex-row">
          <div 
            className="flex flex-row justify-center items-center w-3/5" 
            ref={dateRef} 
            style={{
              transform: `translateX(${isVisible ? offset : 0}px)`,
              opacity: isVisible ? 1 : 0,
              transition: 'transform 0.3s ease-out, opacity 1s ease-out',
              willChange: 'transform, opacity',
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
              willChange: 'transform, opacity',
            }}  
          >
            <p className="font-font4 text-md w-3/5 min-w-80 text-justify border-2 border-dotted p-2">{text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMeComponent;
