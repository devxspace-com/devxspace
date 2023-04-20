import {React, useState, useEffect} from 'react'
import HeroPage from './component/HeroPage'
import HowItWorks from './component/HowItWorks'
import ComingSoon from './component/ComingSoon'
import EcoSystem from './component/EcoSystem'
import JoinCommunity from './component/JoinCommunity'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'
import Mobilenav from '../../components/Mobilenav';

const LandingPage = () => {
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
    <div className='bg-[#000000] text-[#FFFFFF]'>
    <div>
      {isMobile ? <Mobilenav /> : <Navbar />}
      </div>
      <div>
      <HeroPage/>
        <HowItWorks/>
        <ComingSoon/>
        <EcoSystem/>
        <JoinCommunity/>
        <Footer />
      </div>               
    </div>
  )
}

export default LandingPage