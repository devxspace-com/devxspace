import React from 'react'
import hand from "../../../images/hands.png"
import Image from "next/image";

const ComingSoon = () => {
  return (
    <main>
        <section className='flex w-[90%] tabletAir:flex-col mx-auto border-[1px] rounded-lg bg-[#0b0e04] border-[#121806]  shadow-xl px-2 mobile:px-auto relative '>
            <div className="w-[50%] smDesktop:w-[100%] pt-10 pb-12 relative z-[1]">
                <h3 className="text-[24px] font-semibold text-[#CCE9E7] mobile:text-[20px]">Coming Soon</h3>
                <h1 className='text-[58px] leading-[62px] font-bold mobile:text-[34px] mobile:leading-[40px]'>Community Owned Developer DAO</h1>
                <p className="text-[24px]  mobile:mt-2 text-[#C5C8C7] mobile:text-[16px] mobile:leading-5 leading-8 text-justify">

                Devxspace aims to create a platform that unites developers and rewards them for their participation. We want to bring developers together to form a community that can collaborate and learn from each other. By participating in our platform, developers can earn rewards and recognition for their contributions.
                </p>
<p className="text-[24px] mobile:text-[16px] mobile:leading-5 text-[#C5C8C7] tabletAir:w-[100%] leading-8 text-justify">
Our goal is to build a space where developers can come together to exchange knowledge, skills, and ideas. We believe that by creating a supportive community, we can help developers grow and reach their full potential. At Devxspace, we are committed to providing a platform that encourages participation and rewards excellence.
</p>
            </div>
            <div className="w-[50%] ">
                <Image src={hand} alt='community dao' className='absolute right-0 h-[570px] smDesktop:h-[694px] smDesk:h-[760px] tabletAir:top-0 tabletAir:h-[660px] mobile:h-[566px] opacity-[50%]'/>
            </div>
        </section>
        </main>
  )
}

export default ComingSoon