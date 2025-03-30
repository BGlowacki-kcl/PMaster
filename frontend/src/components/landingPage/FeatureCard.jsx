import { Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'

const FeatureCard = ({ img, text, title }) => {
  return (
    <Card 
      className='hover:animate-fade-in-scale flex flex-col justify-between h-full min-h-[450px] sm:min-h-[500px] p-3' 
      sx={{ backgroundColor: "#F8C794;", borderRadius: "14px" }}
    >
      <CardMedia>
        <img 
          src={img} 
          className="w-auto h-[150px] md:h-[20vw] xl:h-[15vw] shadow-md rounded-lg border-2 border-secondarysky2 mx-auto" 
          alt={title} 
        />
      </CardMedia>

      <CardContent className="flex flex-col flex-grow">
        <p className="font-font3 text-xl text-center"> {title} </p>
        <p className='font-font4 mt-3 text-justify text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] flex-grow'>
          {text}
        </p>
      </CardContent>
    </Card>
  )
}

export default FeatureCard
