import React from 'react'
import Panel from "../../../images/office.png"
import Image from "next/image";
// import bg from '../../../images/homeBG.png';
import bg from '../../../images/bg.png';
import Mobilenav from '../../../components/Mobilenav';
import Navbar from '../../../components/Navbar';
import {useEffect, useState} from "react";
import Update from '../../../components/Update'
import { useAccount } from "wagmi";
import useFetchProfile from "../../../features/profile/hooks/useFetchProfile";
import { useRouter } from 'next/router';


const HeroPage = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const {address} = useAccount();
    const router = useRouter();
    const {data, isLoading, isError, error, refetch} = useFetchProfile(address);

    const handleOpen = () =>{
        if(data !== undefined){
            router.push('/Search');
        }else{
            setIsStarted(true)
        }
    }
    const handleClose = () =>{
        setIsStarted(false)
    }


    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1030);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <main className=''>
        <div className=" bg-center bg-cover bg-fixed bg-no-repeat h-screen w-full xsm:w-full sm:w-full " style={{backgroundImage: `url(${bg.src})`}}>
        <div className='bg-[#000000]'>
        {isMobile ? <Mobilenav /> : <Navbar />}
        </div>
        <div className='items-center h-[50%] w-[70%] sm:w-full lg:mt-52 xsm:mt-32 mx-auto opacity-[100%]'>
        <h1 className='text-[white] font-extrabold lg:w-[80%] mx-auto text-center lg:text-center lg:text-[4.5rem] xsm:text-[3rem] xsm:text-left leading-[80px]' >Built to Enhance seamless Freelancing</h1>
        <p className='text-[text-[#CCE9E7] lg:w-[50%] xsm:w-[100%] lg:mx-auto xsm:mx-0 text-center items-center lg:text-center justify-center xsm:text-justify mt-4'>Getting paid via ETH/DXC provides a fast, secure, and decentralized way for freelancers to receive their earnings while utilizing community-focused approaches and laying emphasis on quality and integrity</p>
        <button className='items-center flex justify-center text-[black] rounded-lg h-[55px] text-center w-[20%] xsm:w-[50%] lg:w-[20%] mx-auto mt-8 bg-[white] text-[18px] font-bold' onClick={handleOpen}> {data === undefined ? "Get Started" : "Hire"}</button>
        </div>
    </div> 
        {isStarted && <Update dialog={handleOpen} dialogClose={handleClose} />}       
    </main>
  )
}

export default HeroPage