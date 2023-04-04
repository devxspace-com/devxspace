import React from 'react'
import Panel from "../../../images/panel1.png"
import Image from "next/image";

const HeroPage = () => {
  return (
    <main>
        <section className="flex">
            <div className="w-[50%]">
                <h4 className="text-[14px] uppercase font-semibold">The Amazing home of freelancers</h4>
                <h2 className="text-[80px] font-bold leading-[100px]mt-8 ">DEVXSPACE</h2>
                <p className="text-[18px] leading-6 font-medium w-[70%] mt-5">Devxspace is a platform where recruiters can find skilled freelancers to handle their projects, regardless of their complexity. Our system is designed to maintain a high standard of work and ensure that both recruiters and freelancers are satisfied with the outcome. We take our integrity seriously and are committed to providing reliable and trustworthy freelancers that you can rely on to get the job done. So, if you're looking for a freelancer to handle your project, you don't need to worry because we've got you covered. Choose Devxspace for a seamless and satisfactory collaboration between recruiters and freelancers.</p>
            <div className="flex gap-3 mt-3 mb-4">
                <button className='text-[14px] bg-[blue] px-3 py-2 rounded-lg'>Hire Frelancer</button>
                <button className='text-[14px] bg-[blue] px-3 py-2 rounded-lg'>Learn More</button>
            </div>
            </div>
            <div className="w-[50%]">
                <Image src={Panel} alt="heello" className='w-[100%] h-[500px]'/>
            </div>
        </section>
        
    </main>
  )
}

export default HeroPage