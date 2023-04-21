import React from 'react'
import banner from "../../../images/banner.png"
import Image from 'next/image'
import dashboardBG from '../../../images/dashboardbg.png'

const Banner = () => {
  return (
    <div>
        
        <div className="w-[100%]">
        <div className=" h-[200px]" style={{backgroundImage: `url(${dashboardBG.src})`}}>
        <div className="w-2/3 flex flex-col ml-32">
          <h2 className="text-4xl font-bold mt-10 text-[#000000]">
            Dashboard
          </h2>
          <p className="text-2xl text-[#000000] italic">Browse Your Dashboard</p>
        </div>
      </div>

       
        </div>
    </div>
  )
}

export default Banner