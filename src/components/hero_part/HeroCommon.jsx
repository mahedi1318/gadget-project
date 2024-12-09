import React from 'react'
import { useLocation } from 'react-router-dom'

const HeroCommon = () => {

    let pathLocation = useLocation();
    let title = pathLocation?.pathname?.split("/")[1]   

  return (
    <div className="hero bg_color h-[450px] flow-root">
        <div className="hero-content text-center">
            <div className="">
            <h1 className="text-[17px] md:text-[25px] xl:text-[32px] sora_font font-bold text-white leading-[40px]
             md:leading-[55px] xl:leading-[70px] w-[280px] md:w-11/12 m-auto mt-[100px] capitalize">{title} Page</h1>
            <p className=" sora_font text-[15px] md:text-[16px] font-normal
             text-white w-[240px] md:w-4/6 m-auto leading-6">Explore the latest gadgets that will take your experience to the next level. 
             From smart devices to the coolest accessories, we have it all!</p>           
            </div>
        </div>
    </div>
  )
}

export default HeroCommon
