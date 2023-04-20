import {React, useState, useEffect} from 'react'
import LandingPage from './components/LandingPage'
import JobAdvert from './components/JobAdvert'
import HowItWorks from './components/HowItWorks'
import Started from './components/Started'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Mobilenav from '../../components/Mobilenav';

const LandingFeatures = () => {
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
    <div>
    <div className="bg-[#000000]" >
      {isMobile ? <Mobilenav /> : <Navbar />}
       <LandingPage/>
    </div>
    <div>
       <HowItWorks/>
       <Started />
       <JobAdvert/>
       <Footer />
    </div>
    </div>
  )
}

export default LandingFeatures