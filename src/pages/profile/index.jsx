import {React, useState, useEffect} from 'react'
import ProfileFeatures from '../../features/profile/ProfileFeatures'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Mobilenav from '../../components/Mobilenav';
const Profile = () => {
  const [isMobile, setIsMobile] = useState(false);
    
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1030);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
    <div className='bg-[#000000]'>
    {isMobile ? <Mobilenav /> : <Navbar />}
        <ProfileFeatures/>
    </div>
      <Footer/>
    </div>
  )
}

export default Profile