import React from 'react'
import { FaRegEnvelope,FaFacebookF,FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
// import { FaFacebookF } from "react-icons/fa";

const Header = () => {
  return (
    <div className='max-w-container mx-auto'>
        <div className="flex ">
            <div className="w-[20%]">
                <div className="flex items-center">
                 <FaRegEnvelope/>
                 <h3>mail@yourcompany.com</h3>
                </div>
            </div>
            <div className="w-[20%] ">
                <div className="flex items-center">
                 <IoIosCall/>
                 <h3>+896 120 5889 (Toll free)</h3>
                </div>
            </div>
            <div className="w-[60%]">
                <div className="flex justify-end">
                 <FaFacebookF/>
                 <FaTwitter />
                 <FaLinkedin />
                 <FaInstagram />
                </div>     
            </div>
        </div>
    </div>
  )
}

export default Header