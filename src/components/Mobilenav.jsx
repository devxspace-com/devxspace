import { useState } from 'react'
import Link from 'next/link';
import ImageLogo from '../images/imageLogo.png';
import Image from 'next/image';
import Connect from "./Connect";
import Update from "./Update";
import CreateGig from "./CreateGig";
import { useAccount } from "wagmi";




function MobileNav({open, setOpen}) {
    // const {address} = useAccount();
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [openn, setOpenn] = useState(false);
  const [showCreateGig, setCreateGig] = useState(false);
  const [openCreateGig, setOpenCreateGig] = useState(false);

  const handleUpdateProfileClick = () => {
    setShowUpdateProfile(true);
    setOpenn(true)
  };
  const handleClose = () =>{
    setShowUpdateProfile(false);
    setOpenn(false)
  }
  
  const handleCreateGig = () =>{
    setCreateGig(true);
    setOpenCreateGig(true);
  }

  const handleCloseCreateGig = () =>{
    setCreateGig(false);
    setOpenCreateGig(false);
  }
  
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-[#000000] transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
           
            <div className="flex flex-col justify-center items-center mt-28">
                <Link className="text-2xl  font-bold text-[#ffffff] my-4" href="/" >
                    Home
                </Link>
                <Link className="text-2xl font-bold my-4 text-[#ffffff] hover:text-red-500" href='/profile' >
                    Dashboard
                </Link>
                <Link className="text-2xl font-bold my-4 text-[#ffffff] hover:text-red-500" href='/Search' >
                    Hire
                </Link>
                <Link onClick={handleCreateGig} className="text-2xl font-bold my-4 text-[#ffffff] hover:text-red-500" href="#" >
                Create Gig
                </Link>
                 <Link onClick={handleUpdateProfileClick} className="text-2xl font-bold my-4 text-[#ffffff] hover:text-red-500" href="#" >
                Create Profile 
               </Link>
                 <Connect />              
            </div>  
            {showUpdateProfile && (<Update dialog={handleUpdateProfileClick} dialogClose={handleClose}/>)}

            {showCreateGig && (<CreateGig dialog = {handleCreateGig} dialogClose={handleCloseCreateGig}/>)}
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav>      
        <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-11/12 flex justify-between items-center">
            <Link href="/" className='mt-2'>
            <Image src={ImageLogo} width={200} height={50} style={{objectFit:'cover', objectPosition:'center', marginLeft : '10px'}} />
             </Link> 
                <div className="group z-50 relative w-6 h-6 mt-4 cursor-pointer flex-col justify-between items-center flex" onClick={() => {
                    setOpen(!open)
                }}>
                    <span className={`h-1 w-full bg-[#ffffff] rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-[#ffffff] rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-[#ffffff] rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
            </div>
        </nav>
    )
}