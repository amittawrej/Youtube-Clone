import React, { useEffect } from 'react'
import ChatMessage from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../store/chatSlice';
import { generateRandomMessage,generateRandomName } from '../store/randomName';

const LiveChat = () => {
  const message=useSelector((store)=>store.chat.message);
  const dispatch=useDispatch();
  useEffect(()=>{
    const timer= setInterval(()=>{
      dispatch(setMessage({name:generateRandomName(),message:generateRandomMessage(10)}))
    },1000)
    return(()=>{
      clearInterval(timer);
    })
  },[])

  return (
    <div className='px-3 py-1'>
      {
        message.map((item,index)=>{
          return(
            <ChatMessage key={index} item={item}/>

          )
        })
      }
    

 
    </div>
    
  )
}

export default LiveChat