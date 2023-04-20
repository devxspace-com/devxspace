import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const JoinCommunity = () => {
  return (
    <main>
        <section className='w-[90%] mx-auto pb-12 mt-8'>
            <h2 className="text-[64px] leading-[60px] font-bold text-center pt-8 pb-6 mobile:text-[34px] mobile:leading-[40px]">Join the Community</h2>
            <div className="flex lgDesktop:justify-between flex-wrap gap-4">

            <div className="w-[19%] lgDesktop:w-[17%] bg-[#101515] border-[1px] border-[#101515] h-[150px] lgDesktop:h-[120px] mobile:w-[47%] rounded-lg">
                <h4 className="hover:bg-[#CCE9E7] bg-[#172D2E] text-[16px] font-medium py-1 hover:text-black  text-center rounded-lg mt-2 w-[100px] ml-2">Twitter</h4>
                <a href="/" className="">
                <FaTwitter size={40} className='mx-auto text-white mt-4'/>
              </a>
            </div>
            <div className="w-[19%] lgDesktop:w-[17%] bg-[#101515] border-[1px] border-[#101515] h-[150px] lgDesktop:h-[120px] mobile:w-[47%] rounded-lg">
                <h4 className="hover:bg-[#CCE9E7] bg-[#172D2E] text-[16px] font-medium py-1 hover:text-black  text-center rounded-lg mt-2 w-[100px] ml-2">Facebook</h4>
                <a href="/" className="">
                <FaFacebookF size={40} className='mx-auto text-white mt-4'/>
              </a>
            </div>

            <div className="w-[19%] lgDesktop:w-[17%] bg-[#101515] border-[1px] border-[#101515] h-[150px] lgDesktop:h-[120px] mobile:w-[47%] rounded-lg">
                <h4 className="hover:bg-[#CCE9E7] bg-[#172D2E] text-[16px] font-medium py-1 hover:text-black  text-center rounded-lg mt-2 w-[100px] ml-2">Linkedln</h4>
                <a href="/" className="">
                <FaLinkedin size={40} className='mx-auto text-white mt-4'/>
              </a>
            </div>
            <div className="w-[19%] lgDesktop:w-[17%] bg-[#101515] border-[1px] border-[#101515] h-[150px] lgDesktop:h-[120px] mobile:w-[47%] rounded-lg">
                <h4 className="hover:bg-[#CCE9E7] bg-[#172D2E] text-[16px] font-medium py-1 hover:text-black  text-center rounded-lg mt-2 w-[100px] ml-2">Instagram</h4>
                <a href="/" className="">
                <FaInstagram size={40} className='mx-auto text-white mt-4'/>
              </a>
            </div>
            <div className="w-[19%] lgDesktop:w-[17%] bg-[#101515] border-[1px] border-[#101515] h-[150px] lgDesktop:h-[120px] mobile:w-[47%] rounded-lg">
                <h4 className="hover:bg-[#CCE9E7] bg-[#172D2E] text-[16px] font-medium py-1 hover:text-black  text-center rounded-lg mt-2 w-[100px] ml-2">Youtube</h4>
                <a href="/" className="">
                <FaYoutube size={40} className='mx-auto text-white mt-4'/>
              </a>
            </div>
          
           
            </div>
             
        </section>
    </main>
  )
}

export default JoinCommunity