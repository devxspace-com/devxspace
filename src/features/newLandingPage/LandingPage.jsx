import React from 'react'
import HeroPage from './component/HeroPage'
import HowItWorks from './component/HowItWorks'
import ComingSoon from './component/ComingSoon'
import EcoSystem from './component/EcoSystem'
import JoinCommunity from './component/JoinCommunity'

const LandingPage = () => {
  return (
    <div>
        <HeroPage/>
        <HowItWorks/>
        <ComingSoon/>
        <EcoSystem/>
        <JoinCommunity/>
    </div>
  )
}

export default LandingPage