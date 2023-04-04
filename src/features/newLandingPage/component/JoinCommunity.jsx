import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const JoinCommunity = () => {
  return (
    <main>
        <section className='flex justify-between'>
            <h2 className="text-[40px] leading-[50px]">Join the Community</h2>
            <div className="w-[20%]">
                <h4 className="">Twitter</h4>
                <a href="/" className="">
                <FaTwitter size={30}/>
              </a>
            </div>
          
            <div className="w-[20%]">
                <h4 className="">Facebook</h4>  
            <a href="/" className="">
                <FaFacebookF className="" size={30}/>
              </a>
            </div>
            <div className="w-[20%]">
                <h4 className="">Linkedln</h4>  
              <a href="/" className="">
                <FaLinkedin size={30} />
              </a>
            </div>
            <div className="w-[20%]">
                <h4 className="">Instagram</h4>  
              <a href="/" className="">
                <FaInstagram size={30}/>
              </a>
            </div>
<div className="w-[20%]">
<h4 className="">Youtube</h4>
              <a href="/" className="text-red-700 ">
                <FaYoutube size={30}/>
              </a>
</div>
             
        </section>
    </main>
  )
}

export default JoinCommunity