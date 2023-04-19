import React from 'react'
import LandingPage from './components/LandingPage'
import JobAdvert from './components/JobAdvert'
import HowItWorks from './components/HowItWorks'
import Started from './components/Started'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const LandingFeatures = () => {
  return (
    <div>
      <Navbar />
       <LandingPage/>
       <HowItWorks/>
       <Started />
       <JobAdvert/>
       <Footer />
    </div>
  )
}

export default LandingFeatures