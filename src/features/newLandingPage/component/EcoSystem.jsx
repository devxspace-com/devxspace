 import Image from 'next/image'
import React from 'react'
import istock from "../../../images/istock.png"
 
 const EcoSystem = () => {
   return (
     <main>
      <section className="flex justify-between">
        <div className="w-[50%]">
          <h1 className="text-[40px] font-bold leading-[60px] w-[70%]">An Ecosystem of freelancers and recruiters</h1>
          <p className="text-[16px] font-medium leading-[20px]">Devxspace is a platform designed for recruiters, providing them with access to the best developers and designers within the ecosystem.</p>
        </div>
        <div className="w-[50%]">
          <Image src={istock} alt="heello" className='w-[100%] h-[500px]'/>
        </div>
      </section>
     </main>
   )
 }
 
 export default EcoSystem