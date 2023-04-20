import React from 'react'
import Panel from "../../../images/office.png"
import Image from "next/image";
// import bg from '../../../images/homeBG.png';
import bg from '../../../images/bg.jpeg';
import Mobilenav from '../../../components/Mobilenav';
import Navbar from '../../../components/Navbar';
import {useEffect, useState} from "react";

const HeroPage = () => {

    const [isMobile, setIsMobile] = useState(false);
    
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <main className=''>
        <div className=" bg-center bg-cover bg-fixed bg-no-repeat h-screen w-full xsm:w-full sm:w-full opacity-[70%] " style={{backgroundImage: `url(${bg.src})`}}>
        <div className='bg-[#000000]'>
        {isMobile ? <Mobilenav /> : <Navbar />}
        </div>
        <div className='items-center h-[50%] w-[70%] sm:w-full lg:mt-52 xsm:mt-36 mx-auto'>
        <h1 className='text-white font-extrabold lg:w-[80%] mx-auto text-center lg:text-center lg:text-[4.5rem] xsm:text-[3.5rem] xsm:text-left leading-[80px]' >Built to Enhance seamless Freelancing</h1>
        <p className='text-[text-[#CCE9E7] w-[50%] xsm:w-[80%] lg:mx-auto xsm:mx-0 text-center items-center lg:text-center justify-center xsm:text-left mt-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        <button className='items-center flex justify-center text-[black] rounded-lg h-[55px] text-center w-[20%] xsm:w-[50%] lg:w-[20%] mx-auto mt-8 bg-[white] text-[18px] font-bold'>Get Started</button>
        </div>
    </div>        
    </main>
  )
}

export default HeroPage