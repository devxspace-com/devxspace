import React from 'react'
import hand from "../../../images/hands.png"
import Image from "next/image";

const ComingSoon = () => {
  return (
    <main>
        <section className='flex'>
            <div className="w-[50%]">
                <h3 className="text-[16px] font-bold">Coming Soon</h3>
                <h1 className='text-[40px] font-bold leading-[46px]'>Community Ownned Developer Governed by DAO</h1>
                <p className="">

                Devxspace aims to create a platform that unites developers and rewards them for their participation. We want to bring developers together to form a community that can collaborate and learn from each other. By participating in our platform, developers can earn rewards and recognition for their contributions.
                </p>
<p className="">
Our goal is to build a space where developers can come together to exchange knowledge, skills, and ideas. We believe that by creating a supportive community, we can help developers grow and reach their full potential. At Devxspace, we are committed to providing a platform that encourages participation and rewards excellence.
</p>
            </div>
            <div className="w-[50%]">
                <Image src={hand}/>
            </div>
        </section>
        </main>
  )
}

export default ComingSoon