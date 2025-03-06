import { Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'

const FeatureCard = ({ img, text, title }) => {
  return (
    <Card className='hover:animate-fade-in-scale h-full p-3' sx={{ backgroundColor: "#F8C794;", borderRadius: "14px"}}>
        <CardMedia>
            <img src={img} className="w-auto h-[150px] md:h-[20vw] xl:h-[15vw] shadow-md rounded-lg border-2 border-secondarysky2 ml-auto mr-auto" alt="schedule" />
        </CardMedia>

        <CardContent>
            <p className="font-font3 text-xl text-center" > {title} </p>
            <p className='font-font4 mt-3 text-justify text-[3vw] md:text-[2vw] lg:text-[1.5vw]'> {text} </p>
        </CardContent>
    </Card>
  )
}

export default FeatureCard