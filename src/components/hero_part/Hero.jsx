import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="hero bg_color h-[600px] flow-root">
        <div className="hero-content text-center">
            <div className="">
            <h1 className="text-[27px] md:text-[40px] xl:text-[56px] sora_font font-bold text-white leading-[40px] md:leading-[55px] xl:leading-[70px] w-[280px] md:w-11/12 m-auto mt-[100px]">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6 sora_font text-[15px] md:text-[16px] font-normal text-white w-[240px] md:w-4/6 m-auto leading-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className="btn btn-white px-8 h-[45px] sora_font text-[20px] font-bold rounded-full text_color mt-3">Shop Now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
