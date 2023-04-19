import React from "react";
import userDetails from "../../utils/freelancerDetails";
import Card from "../../components/Card";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import useFetchServices from "../../features/services/hooks/useFetchServices";
import {BiSearch} from 'react-icons/bi'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CardHover from '../../components/CardHover'


const Search = () => {
  const {data, isLoadins, isError, error} = useFetchServices()
  console.log("heee", data);
  return (
    <div>
      <div className="bg-center bg-cover bg-fixed bg-no-repeat h-screen  bg-[url('https://img.freepik.com/free-photo/abstract-background-flowing-lines_1048-6533.jpg?w=740&t=st=1681832734~exp=1681833334~hmac=a955516f9f53c7f6812545e866ed75b988680c9fa1633fd648de31f291bd1a88')]">
        <Navbar />
        <div className='items-center h-[50%] w-[70%] mt-48  mx-auto'>
        <h1 className='text-white font-extrabold text-center' style={{fontSize: '4.5rem', lineHeight:'1'}} >Built to Enhance seamless Freelancing</h1>
        <p className='text-white w-[50%] mx-auto text-center items-center justify-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        <button className='items-center flex justify-center text-black rounded-lg h-[10%] text-center w-[20%] mx-auto mt-6 bg-white'>Explore</button>
        </div>
    </div>  
     
      {/* <div className='relative bg-white'>

      <div className='my-4 w-[30%] flex justify-end absolute right-20 items-center' >
        <div className="flex w-[100%] items-center bg-[#FFFFFF] rounded-lg h-[50px]"> */}

        {/* <BiSearch size={20} className="ml-[10px] mt-4"/>
        
    <TextField 
          variant="standard"

          fullWidth
          InputProps={{
            disableUnderline: true,
          }}
          label="Search" className="w-[90%] ml-auto" />
        </div>
      </div> */}
      {/* </div> */}
        <CardHover />

        <div className='bg-[#000000] h-auto pt-10'>
        <h1 className='text-[#000000] text-5xl font-bold text-center mb-6'>Browse Services</h1>
      <div className='flex flex-wrap w-[90%] pb-4 gap-14  lgDesktop:gap-12 tabletAir:gap-14 content-center mb-10 mx-auto' >

        {data?.map((e) => {
         
          
          return (
            <Card
              key={e.id}
              imgSrc={"https://iamsuperman.pythonanywhere.com/" + e.image_file}
              avatar={"https://iamsuperman.pythonanywhere.com/" + e?.user?.avatar}
              username={e?.user?.username}
              // order = {e.order}
              address={e?.user?.address}
              skill = {e.name}
              description = {e.description}
              // price = {e.price}
            />
          );
        })}
      </div>
      </div>
    <Footer />
    </div>
  );
};

export default Search;
