import React from 'react'
import NavItems from './NavItems'
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
    <div className='bg-[#c7c7c7]'>
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
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                   <NavItems />
                </ul>
                </div>
                <a className="sora_font font-semibold text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavItems />
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <a className="w-9 h-9 bg-gray-600 rounded-full  flex justify-center items-center text-white text-[18px]"><TiShoppingCart /></a>
                <a className="w-9 h-9 bg-gray-600 rounded-full  flex justify-center items-center text-white text-[20px]"><FaRegHeart /></a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
