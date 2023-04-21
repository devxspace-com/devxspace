import { AiOutlineTeam } from 'react-icons/ai'
import { FiHelpCircle } from 'react-icons/fi'
import { MdSentimentSatisfiedAlt, MdSentimentDissatisfied } from 'react-icons/md'

const HowItWorks = () => {
  return (
    <main className='w-[100%]'>
        <section className="w-[90%] mx-auto pb-10">
            <h2 className="text-[80px] mobile:text-[44px] font-bold mt-[50px]"> How It Works</h2>

            <div className="flex justify-between gap-12 smDesktop:gap-6 mt-4 flex-wrap smDesktop:justify-between">
                <div className="w-[48%] lgDesktop:w-[45%]  tabletAir:w-[100%] border-[1px] rounded-xl px-[20px] py-[40px] bg-[#1C2020] shadow-lg border-[#1C2020]">
                    <div className="flex items-center gap-2">
                        <AiOutlineTeam size={40} className='text-[#CCE9E7]'/>
                        <h2 className="text-[42px] text-[#C5C8C7] font-bold smDesk:leading-[40px] mobile:text-[24px]"> Choose Freelancer</h2>
                    </div>
                    <p className="text-[20px] mobile:text-[16px] mobile:leading-5 mt-2 leading-[25px] text-[#C5C8C7] text-justify">No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!</p>
                </div>
                <div className="w-[48%] lgDesktop:w-[45%] tabletAir:w-[100%] border-[1px] rounded-xl px-[20px] py-[40px] bg-[#1C2020] shadow-lg border-[#1C2020]">
                    
                    <div className="flex items-center gap-2">
                        <MdSentimentSatisfiedAlt size={40} className='text-[#CCE9E7]'/>
                        <h2 className="text-[42px] mobile:text-[24px] text-[#C5C8C7] font-bold"> Satisfied</h2>
                    </div>
                    <p className="text-[20px] mt-2 leading-[25px] mobile:text-[16px] mobile:leading-5 text-[#C5C8C7] text-justify">Satisfied with jobs been done by the freelancer, Accept the submission to enable agent to release fund. Fund is released when you are satisfied. </p>
                </div>
                
                <div className="w-[48%] lgDesktop:w-[45%] tabletAir:w-[100%] border-[1px] rounded-xl px-[20px] py-[40px] bg-[#1C2020] shadow-lg border-[#1C2020]">
                    <div className="flex items-center gap-2">
                        <MdSentimentDissatisfied size={40} className='text-[#CCE9E7]'/>
                        <h2 className="text-[42px] mobile:text-[24px] text-[#C5C8C7] font-bold">Not Satisfied</h2>
                    </div>
                    <p className="text-[20px] mt-2 leading-[25px] mobile:text-[16px] mobile:leading-5 text-[#C5C8C7] text-justify">Not Satisfied with jobs been done by the freelancer,  Reject the submission and the freelancer will be notified to get the job re-done. </p>
                </div>
                <div className="w-[48%] lgDesktop:w-[45%] tabletAir:w-[100%] border-[1px] rounded-xl px-[20px] py-[40px] bg-[#1C2020] shadow-lg border-[#1C2020]">
                    <div className="flex items-center gap-2">
                        <FiHelpCircle size={40} className='text-[#CCE9E7]'/>
                        <h2 className="text-[42px] mobile:text-[24px] text-[#C5C8C7] smDesk:leading-[40px] font-bold">We’re here to help</h2>
                    </div>
                    <p className="text-[20px] mt-2 leading-[25px] mobile:text-[16px] mobile:leading-5 text-[#C5C8C7] text-justify">Our talented team of freelancers can help you get any of your task done and weare here to make sure you are satisfied. Do not worry your funds are safe.</p>
                </div>
                
            </div>
        </section>
    </main>
  )
}

export default HowItWorks