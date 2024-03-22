import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCategory } from '../store/appSlice';
const buttonList = ["All", "Javascript", "Vlogs", "Music", "Songs", "Trending", "Live", "Gaming", "Mixes", "Shorts", 'Cricket', 'Comedy', 'thriller', 'New to You',]

const ButtonList = () => {
const [active, setActive] = useState('All');
const dispatch=useDispatch();
const videoBytag=(tag)=>{
  if(active!==tag){
    dispatch(setCategory(tag));
    setActive(tag);
  }
// alert(buttonName);
}
console.log(active);
  return (
    <div className='flex overflow-x-scroll mt-16  no-scrollbar'>
      {
        buttonList.map((buttonName, index) => {
          return (
            <div key={index} >
              <button onClick={()=>{videoBytag(buttonName)}} className={`${active==buttonName? 'bg-black text-white' : 'bg-gray-200'} px-4 py-1 rounded-lg mx-2 font-medium`} ><span className='whitespace-nowrap'>{buttonName}</span></button>
              </div>
          )
        })
      }
    </div>
  )
}

export default ButtonList