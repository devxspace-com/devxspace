import React from "react";
import {useEffect, useState} from "react";

import userDetails from "../../utils/freelancerDetails";
import Card from "../../components/Card";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import useFetchServices from "../../features/services/hooks/useFetchServices";
import {BiSearch} from 'react-icons/bi'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CardHover from '../../components/CardHover'
import bg from '../../images/background2.png';
import Mobilenav from '../../components/Mobilenav';



const Search = () => {
  const {data, isLoadins, isError, error} = useFetchServices()
  const [isMobile, setIsMobile] = useState(false);
  console.log("heee", data);
  
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1030);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="bg-[black] text-white">
      <div className="bg-center bg-cover bg-fixed bg-no-repeat h-screen w-full xsm:w-full sm:w-full" style={{backgroundImage: `url(${bg.src})`}}>
        {isMobile ? <Mobilenav /> : <Navbar />}
        <div className='items-center h-[50%] w-[70%] sm:w-full lg:mt-52 xsm:mt-36 mx-auto'>
        <h1 className='text-white font-extrabold lg:w-[80%] mx-auto text-center lg:text-center lg:text-[4.5rem] xsm:text-[3.5rem] xsm:text-left' >Built to Enhance seamless Freelancing</h1>
        <p className='text-white w-[50%] xsm:w-[80%] lg:mx-auto xsm:mx-0 text-center items-center lg:text-center justify-center xsm:text-left'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        <button className='items-center flex justify-center text-black rounded-lg h-[10%] text-center w-[20%] xsm:w-[50%] lg:w-[20%] mx-auto mt-6 bg-white'>Explore</button>
        </div>
    </div>  
        {/* <CardHover /> */}

        <div className='bg-[#000000] h-auto pt-10'>
        <h1 className='text-[#000000] text-5xl font-bold text-center mb-6'>Browse Services</h1>
      <div className='flex flex-wrap w-[90%] pb-4 gap-14  lgDesktop:gap-12 tabletAir:gap-14 content-center mb-10 mx-auto' >

        {data?.map((e) => {
         
          
          return (
            <Card
              key={e.id}
              imgSrc={"https://iamsuperman.pythonanywhere.com/" + e.image_file}
              avatar={"https://iamsuperman.pythonanywhere.com/" + e?.user?.avatar}
              username={e?.user?.username}
              // order = {e.order}
              address={e?.user?.address}
              skill = {e.name}
              description = {e.description}
              // price = {e.price}
            />
          );
        })}
      </div>
      </div>
    <Footer />
    </div>
  );
};

export default Search;
