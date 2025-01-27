import React from 'react'

const AboutMeComponent = ({title, text}) => {
  return (
    <div className="flex fex-row pt-10" >
        <div className="flex flex-row justify-center items-center w-3/5">
            <p className="inline-block mr-10 text-3xl font-font2 whitespace-nowrap">{title}</p>
            <div className="relative w-1/4 bg-black h-1">
                <div className="absolute right-0 top-1/2 transform translate-y-[-50%] h-16 w-16 rounded-full border-3 bg-secondarywood1"></div>
            </div>
        </div>
        <div className="flex flex-col w-1/2">
            
            <p className="font-font4 text-md w-3/5">{text}</p>
        </div>
    </div>
  )
}

export default AboutMeComponent