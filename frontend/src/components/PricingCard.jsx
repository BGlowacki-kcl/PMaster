import { List } from '@mui/material'
import React from 'react'

const PricingCard = ({img, title, benefits, subText}) => {
  return (
    <div className="h-full w-full items-center bg-secondarysky1 rounded-md border-2 border-black shadow-xl flex flex-col p-3" >
        <img src={img} className='shadow-2xl rounded-md border-2 w-4/5 lg:w-[400px] lg' />
        <p className='mt-4 text-3xl font-font2' >{title}:</p>
        <ul className="ml-4 mr-4 mt-3">
            {benefits.map((benefit, index) => (
                <li className="font-font4 text-md mb-1" key={index}> &#x2022; {benefit} </li>
            ))}
        </ul>
        <p className="text-gray-600 text-md mt-auto mb-2 font-font4" >{subText}</p>
    </div>
  )
}


export default PricingCard