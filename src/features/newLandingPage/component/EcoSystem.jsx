 import Image from 'next/image'
import React from 'react'
import istock from "../../../images/istock.jpg"
 
 const EcoSystem = () => {
   return (
     <main className=''>
      <section className=" mt-6 w-[90%] mx-auto justify-between relative ">
        <div className="absolute z-[1] w-[100%] top-[250px] smDesktop:top-[100px] tabletAir:top-[80px] mobile:top-[20px]">
          <h1 className="text-[58px] mobile:text-[24px] mobile:leading-7  font-bold leading-[62px] w-[100%] text-center">An Ecosystem of freelancers and recruiters</h1>
          <p className="text-[24px] mobile:text-[16px] font-medium  w-[80%] mx-auto text-center text-[#CCE9E7] mt-3 mobile:mt-2">Devxspace is a platform designed for recruiters, providing them with access to the best developers and designers within the ecosystem.</p>
        </div>
        <div className="w-[100%] relative left-0 top-0">
          <Image src={istock} alt="creativity" className='w-[100%] top-0 opacity-[80%]'/>
        </div>
      </section>
     </main>
   )
 }
 
 export default EcoSystem