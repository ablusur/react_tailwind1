import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let [show, setShow] = useState(false)
    let handleShow = ()=>{
        setShow(!show)
    }
  return (
<nav className='bg-[#F40404] py-[30px]'>
    <div className='max-w-container mx-auto'>
        <div className="flex items-center justify-between flex-wrap">
            <div className="">
                <img src={Logo}/>
            </div>
            <div className="">
                <ul className={`lg:flex lg:gap-x-12 lg:static py-6 text-center lg:py-0 ${show == true ? "bg-[green] absolute left-0 top-[-275px] duration-700 ease-in-out w-full -z[99999]" : " bg-[gray] -z-10 absolute left-0 top-[257px] duration-300 ease-in-out w-full" }`}>
                    <li className='font-pops font-semibold text-[#ffff] text-[16px] py-2 lg:p-4 hover:text-black duration-300 ease-in-out'>Home</li>
                    <li className='font-osans font-semibold text-[#ffff] text-[16px] py-2 lg:p-4 hover:text-black duration-300 ease-in-out'>About</li>
                    <li className='font-pops font-semibold text-[#ffff] text-[16px] py-2 lg:p-4 hover:text-black duration-300 ease-in-out'>Service</li>
                    <li className='font-pops font-semibold text-[#ffff] text-[16px] py-2 lg:p-4 hover:text-black duration-300 ease-in-out'>Gallary</li>
                    <li className='font-pops font-semibold text-[#ffff] text-[16px] py-2 lg:p-4 hover:text-black duration-300 ease-in-out'>Blog</li>
                    <li className='font-pops font-semibold text-[#ffff] text-[16px] lg:p-4 border-2 border-white inline-block p-3'>CONTACT</li>
                </ul>
            </div>
            <div className="lg:hidden" onClick={handleShow}>
                {show == true ? <RxCross2/> :<FaBars/> }
            </div>
        </div>
    </div>
 </nav>
  )}

export default Navbar