import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-base-100'>
        <div className="container pt-10">
            <h3 className='sora_font text-[#303030] text-center text-[32px] font-bold'>Gadget Heaven</h3>
            <p className='sora_font text-[#444] text-center text-[15px] font-medium mt-1'>Leading the way in cutting-edge technology and innovation.</p>
            <div className="divider"></div>
        </div>
        <div className="footer text-[#444]-content pt-4 pb-10 container">
            <nav>
                <h6 className="sora_font text-[20px] font-bold mb-2">Services</h6>
                <a className="link link-hover sora_font text-[14px] font-normal">Product Support</a>
                <a className="link link-hover sora_font text-[14px] font-normal">Order Tracking</a>
                <a className="link link-hover sora_font text-[14px] font-normal">Shipping & Delivery</a>
                <a className="link link-hover sora_font text-[14px] font-normal">Returns</a>
            </nav>
            <nav>
                <h6 className="sora_font text-[20px] font-bold mb-2">Company</h6>
                <a className="link link-hover sora_font text-[14px] font-normal">About Us</a>
                <a className="link link-hover sora_font text-[14px] font-normal">Careers</a>
                <a className="link link-hover sora_font text-[14px] font-normal">Contact</a>               
            </nav>
            <nav>
                <h6 className="sora_font text-[20px] font-bold mb-2">Legal</h6>
                <a className="link link-hover sora_font text-[14px] font-normal">Terms of Service</a>
                <a className="link link-hover sora_font text-[14px] font-normal">Privacy policy</a>
                <a className="link link-hover sora_font text-[14px] font-normal">Cookie policy</a>
            </nav>
        </div>
      </footer>
    </>
  )
}

export default Footer
