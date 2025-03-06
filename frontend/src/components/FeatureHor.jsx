import { Stack } from '@mui/material'
import React from 'react'

const FeatureHor = ({title, text, img, isLeft}) => {
  return (
  <div className={`flex flex-col-reverse ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} items-center h-auto w-full md:w-3/4 ${isLeft ? "md:mr-30" : "md:ml-30"} gap-6`}>
      <img 
          src={img} 
          className="w-[70%] md:w-auto max-w-[400px] h-auto md:h-[50vh] object-contain"
          alt="Image"
      />,
      
      <div className="flex flex-col w-4/5 md:w-1/2 text-center md:text-left">
          <div className="w-full md:w-4/5 text-[6vw] md:text-[2.2vw] font-font2 text-primarywood1 mb-3">
              {title}
          </div>
          <div className="w-full md:w-4/5 min-w-52 md:min-w-72 text-[4vw] md:text-[1.5vw] font-font4 text-primarysky1">
              {text}
          </div>
      </div>
  </div>

  )
}

export default FeatureHor