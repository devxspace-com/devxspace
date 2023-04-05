import React from 'react'
import Panel from "../../../images/office.png"
import Image from "next/image";

const HeroPage = () => {
  return (
    <main className=''>
        <section className="flex w-[90%] mx-auto">
            <div className="w-[50%] tabletAir:w-[80%] tabletAir:z-[1] mobile:w-[100%] tabletAir:relative mobile:mt-8">
                <h4 className="text-[20px] uppercase font-semibold bg-[#141414] w-[350px] text-center mt-2 py-2 rounded-lg text-[#C5C8C7] mobile:text-[16px] mobile:w-[300px]">The Amazing home of freelancers</h4>
                <h2 className="text-[80px] font-bold leading-[100px]mt-8 mobile:text-[60px] ">DEVXSPACE</h2>
                <p className="text-[24px] leading-8  w-[90%] mt-5 text-[#C5C8C7] mobile:text-[14px] mobile:leading-[18px] smDesktop:w-[100%]">Devxspace is a platform where recruiters can find skilled freelancers to handle their projects, regardless of their complexity. Our system is designed to maintain a high standard of work and ensure that both recruiters and freelancers are satisfied with the outcome. We take our integrity seriously and are committed to providing reliable and trustworthy freelancers that you can rely on to get the job done. So, if you're looking for a freelancer to handle your project, you don't need to worry because we've got you covered. Choose Devxspace for a seamless and satisfactory collaboration between recruiters and freelancers.</p>
            <div className="flex gap-4 mb-4 mt-5 mobile:gap-5">
                <button className='text-[16px] bg-[#CCE9E7] hover:bg-[#A3BAB9] border-2 border-[#CCE9E7] px-3 py-2 rounded-lg text-[black]'>Hire Frelancer</button>
                <button className='text-[16px]  hover:bg-[#A3BAB9] border-2 border-[#CCE9E7] px-4 py-2 rounded-lg text-[#CCE9E7]'>Learn More</button>
            </div>
            </div>
            <div className="w-[50%] pt-4 tabletAir:absolute tabletAir:right-0 mobile:w-[70%] ">
                <Image src={Panel} alt="heello" className='w-[100%] h-[500px] mobile:h-[400px]'/>
            </div>
        </section>
        
    </main>
  )
}

export default HeroPage