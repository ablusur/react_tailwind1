import React from 'react'
import { FaRegEnvelope,FaFacebookF,FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
// import { FaFacebookF } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-[#282828] py-5'>
           <div className='max-w-container mx-auto'>
        <div className="lg:flex">
            <div className="w-full lg:w-[25%] py-3 lg:py-0">
                <div className="flex items-center lg:justify-start justify-center">
                 <FaRegEnvelope className='text-white'/>
                 <h3 className='text-white font-osans pl-2'>mail@yourcompany.com</h3>
                </div>
            </div>
            <div className="w-full lg:w-[25%] py-3 lg:py-0">
                <div className="flex items-center lg:justify-start justify-center">
                 <IoIosCall className='text-white'/>
                 <h3 className='text-white font-osans pl-2'>+896 120 5889 (Toll free)</h3>
                </div>
            </div>
            <div className="w-full lg:w-[50%]">
                <div className="flex lg:justify-end gap-x-4 justify-center">
                 <FaFacebookF className='text-white'/>
                 <FaTwitter className='text-white'/>
                 <FaLinkedin className='text-white'/>
                 <FaInstagram className='text-white'/>
                </div>     
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header