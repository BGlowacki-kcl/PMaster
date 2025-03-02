import { Stack } from '@mui/material'
import React from 'react'

const FeatureHor = ({title, text, img, isLeft}) => {
  return (
    <div className={`flex flex-row h-1/4 w-3/4 ${isLeft ? "mr-30" : "ml-30"}`} >
        {[
        <img key="img" src={img} className="ml-20 h-50 w-auto" />,
        <div key="div" className="flex flex-col w-1/2 ml-auto ">
            <div className='w-4/5 text-3xl font-font2 text-primarywood1 mb-3'> {title} </div>
            <div className='w-4/5 text-xl font-font4 text-primarysky1 ml-4' > {text} </div>
        </div>
        ].sort(() => isLeft ? 1 : -1)}
    </div>
  )
}

export default FeatureHor