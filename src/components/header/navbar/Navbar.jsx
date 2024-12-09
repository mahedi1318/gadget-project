import React, { useContext } from 'react'
import NavItems from './NavItems'
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { productContext } from '../../provider/ProviderData';
import { Link } from 'react-router-dom';

const Navbar = () => {

    let {cart, wish} = useContext(productContext)        

  return (
    <>
    <div className='bg_color fixed w-full z-50'>
        <div className="navbar container">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
                   <NavItems />
                </ul>
                </div>
                <a className="sora_font font-semibold text-xl text-white">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <NavItems />
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <div className='relative'>
                    <Link to="/dashboard" className="w-9 h-9 bg-white rounded-full  flex justify-center items-center text-gray-600 text-[19px]"><TiShoppingCart /></Link>
                    <div className='w-5 h-5 bg-slate-700 rounded-full flex justify-center items-center text-white absolute top-[-8px] right-[-8px]'><span className='sora_font text-[13px]'>{cart.length}</span></div>
                </div>
                <div className='relative'>                    
                    <Link to="/dashboard" className="w-9 h-9 bg-white rounded-full  flex justify-center items-center text-gray-600 text-[18px]"><FaRegHeart /></Link>
                    <div className='w-5 h-5 bg-slate-700 rounded-full flex justify-center items-center text-white absolute top-[-8px] right-[-8px]'>
                    <span className='sora_font text-[13px]'>{wish.length}</span></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
