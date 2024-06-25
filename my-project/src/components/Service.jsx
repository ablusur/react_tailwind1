import React from 'react'
import slideImage1 from "../assets/slide1.png"
import slideImage2 from "../assets/slide2.png"
import slideImage3 from "../assets/slide3.png"
import slideImage4 from "../assets/slide4.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Service = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className="py-[100px]">
       <div className="max-w-container mx-auto py-[100px]">
          <div className="text-center md:text-left md:flex items-center px-4">
            <div className="md:w-5/12">
               <h2 className='md:leading-[60px] w-full text-2xl font-pops font-bold md:text-[48px] text-[#000000] md:w-[390px]'>The biggest supplier on the country</h2>
            </div>
            <div className="md:w-7/12">
               <p className='text-base md:text-sm pt-6 font-pops font-medium text-[16px] text-[#000000] md:w-[650px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
            </div>
         </div>
       </div>
           {/* Slick slider start */}
           <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
           {/* Slick slider end */}

    </div>
  )
}

export default Service