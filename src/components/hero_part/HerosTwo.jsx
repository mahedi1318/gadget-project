import React from 'react'
import heroImg from "../../assets/images/hero.png"

const HerosTwo = () => {
  return (
    <div className='h-[340px] md:h-[310px] lg:h-[250px] xl:h-[400px]'>
      <div className="container relative">
        <div className="w-full md:w-[650px] xl:w-[1000px] h-[400px] md:h-[400px] xl:h-[500px] bg-[rgba(255,255,255,0.3)] absolute top-[-70px] md:top-[-90px]
         lg:top-[-165px] xl:top-[-130px] left-0 md:left-[50%]  md:translate-x-[-50%] border-[3px] border-white rounded-xl p-4">
          <img className='w-full h-full object-cover rounded-xl' src={heroImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HerosTwo

