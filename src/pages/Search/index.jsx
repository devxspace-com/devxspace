import React from "react";
import {useEffect, useState, useRef} from "react";
import Card from "../../components/Card";
import useFetchServices from "../../features/services/hooks/useFetchServices";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import bg from '../../images/background2.png';
import Mobilenav from '../../components/Mobilenav';



const Search = () => {
  const {data, isLoadins, isError, error} = useFetchServices()
  const [isMobile, setIsMobile] = useState(false);
  // console.log("heee", data);
  const ref = useRef(null);
  
  const handleScroll = () =>{
      ref.current?.scrollIntoView({behavior : 'smooth'});
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
    <div className="bg-[black] text-white">
      <div className="bg-center bg-cover bg-fixed bg-no-repeat h-screen w-full xsm:w-full sm:w-full" style={{backgroundImage: `url(${bg.src})`}}>
        {isMobile ? <Mobilenav /> : <Navbar />}
        <div className='items-center h-[50%] w-[70%] sm:w-full lg:mt-52 xsm:mt-36 mx-auto'>
        <h1 className='text-white font-extrabold lg:w-[80%] mx-auto text-center lg:text-center lg:text-[4.5rem] xsm:text-[3.5rem] xsm:text-left' >Hire a Freelancer</h1>
        <p className='text-white lg:w-[50%] xsm:w-[80%] lg:mx-auto xsm:mx-0 text-center items-center lg:text-center justify-center xsm:text-left'>Devxspace is different from other freelancing platforms due to its community-focused approach, rewards for participation, emphasis on quality and integrity, and focus on developer growth.</p>
        <button className='items-center flex justify-center text-[black] rounded-lg h-[55px] text-center w-[20%] xsm:w-[50%] lg:w-[20%] mx-auto mt-6 bg-white' onClick={handleScroll}>Explore</button>
        </div>
    </div>  
        {/* <CardHover /> */}

        <div className='bg-[#000000] h-auto pt-10'>
        <h1 className='text-[#000000] text-5xl font-bold text-center mb-6'>Browse Services</h1>
      <div ref={ref} className='flex flex-wrap w-[90%] pb-4 gap-14  lgDesktop:gap-12 tabletAir:gap-14 content-center mb-10 mx-auto' >

        {data?.map((e) => {
         
          
          return (
            <Card
              key={e.id}
              imgSrc={"https://iamsuperman.pythonanywhere.com/" + e.image_file}
              avatar={"https://iamsuperman.pythonanywhere.com/" + e?.user?.avatar}
              username={e?.user?.username}
              address={e?.user?.address}
              skill = {e.name}
              description = {e.description}
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
