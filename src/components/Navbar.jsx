import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../store/appSlice';
const Navbar = () => {

  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleSidebar())
  }

  return (
    <div className='fixed flex w-full justify-center items-center z-10  py-2 bg-white'>
      <div className='flex w-[96%] justify-between px-2 '>
        <div className='flex items-center' >
          <GiHamburgerMenu onClick={toggleHandler} size={"24px"} className='cursor-pointer' />
         <a href='/'> <img className='px-5 cursor-pointer' width={'127px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/337px-YouTube_Logo_2017.svg.png" alt="youtube logo" /></a>
        </div>

        <div className='flex items-center w-[40%]'>
          <div className='w-[100%] border rounded-l-full border-gray-400 px-4 py-2'>
            <input type='text' placeholder='search' className='border-none  outline-none m-full' />
          </div>
          <button className='rounded-r-full border border-gray-400 px-4 py-2 cursor-pointer' ><CiSearch size={'24px'} /></button>
        </div>

        <div className='flex items-center w-[10%] justify-between'>
          <RiVideoAddFill size={"24px"} className='cursor-pointer' />
          <IoIosNotificationsOutline size={"24px"} className='cursor-pointer' />
          <Avatar className='cursor-pointer' src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400" size='35' round={true} />
        </div>
      </div>
    </div>
  )
}

export default Navbar