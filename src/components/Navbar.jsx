import React, { useState } from "react";
import Connect from "./Connect";
import Link from 'next/link';
import { useAccount } from "wagmi";
import Image from 'next/image';
// import logo from "../images/devlogo.png"
import Update from "./Update";
import CreateGig from "./CreateGig";
// import Logo from '../utils/1.svg'
import ImageLogo from '../images/imageLogo.png';


const Navbar = () => {
  const {address} = useAccount();
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [open, setOpen] = useState(false);
  const [showCreateGig, setCreateGig] = useState(false);
  const [openCreateGig, setOpenCreateGig] = useState(false);

  const handleUpdateProfileClick = () => {
    setShowUpdateProfile(true);
    setOpen(true)
  };
  const handleClose = () =>{
    setShowUpdateProfile(false);
    setOpen(false)
  }
  
  const handleCreateGig = () =>{
    setCreateGig(true);
    setOpenCreateGig(true);
  }

  const handleCloseCreateGig = () =>{
    setCreateGig(false);
    setOpenCreateGig(false);
  }
// style={{objectFit: 'cover', objectPosition: 'center'}}
  return (
    <div>
       <div className='flex flex-row justify-between w-[100%] mx-auto mt-2 bg-[#000000] h-16 text-[#b7b7b7] backdrop-filter backdrop-blur-lg'>
        <Link href="/" >
            <Image src={ImageLogo} width={200} height={50} style={{objectFit:'cover', objectPosition:'center', marginLeft : '10px'}} />
        </Link>      

          {address && <div className="flex items-center gap-6 text-[16px] font-medium capitalize">
          
          <Link href='/' className="flex items-center cursor-pointer hover:text-[#ffffff] pr-[8px] ">
          Home
        </Link>

        <Link href='/profile' className="cursor-pointer  hover:text-[#ffffff] pr-[8px] ">
          Dashboard
        </Link>

        <Link href='/Search' className="hover:text-[#ffffff] pr-[8px] cursor-pointer">
          Hire
        </Link>
        <div onClick={handleCreateGig} className=" cursor-pointer hover:text-[#ffffff] pr-[8px]" >
         Create Gig
        </div>

        <div onClick={handleUpdateProfileClick} className=" cursor-pointer hover:text-[#ffffff] pr-[8px]" >
         Create Profile
        </div>
        </div> }
      


        <div className=" mr-10 flex items-center">
          <Connect />
        </div>

      </div>

      {showUpdateProfile && (<Update dialog={handleUpdateProfileClick} dialogClose={handleClose}/>)}

      {showCreateGig && (<CreateGig dialog = {handleCreateGig} dialogClose={handleCloseCreateGig}/>)}

    </div>
  );
};

export default Navbar;
