import React from 'react'
import BanImage from "../assets/ban.png"

const Banner = () => {
  return (
    <div style={{backgroundImage:`url(${BanImage})` }} className='py-[150px] relative z-50 after:absolute after:content-[""] after:h-full after:w-full after:bg-[#0000002f] after:top-0 after:left-0 after:-z-0' >
        <div className="max-w-container mx-auto">
        <h2 className='text-white font-pops font-bold lg:text-[64px] lg:pr-[190px] lg:leading-[70px]'>We exist since 1975 on the oil and gas industry.</h2>
        <button className='font-semibold text-[16px] text-[white] bg-[#F40404] py-[13px] px-[30px] mt-6'>LEARN MORE</button>
        </div>
    </div>
  )
}

export default Banner