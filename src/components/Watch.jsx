

import axios from 'axios';
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import { useSearchParams } from 'react-router-dom'
import { AiOutlineLike } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
import { AiOutlineDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from './LiveChat';
import { useDispatch } from 'react-redux';
import { setMessage } from '../store/chatSlice';
const Watch = () => {

  const [input, setInput] = useState('')
  const [singleVideo, setSingleVideo] = useState('');
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  // console.log(videoId);
  const dispatch=useDispatch();
  const getSingleVideo = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&regionCode=US&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
      console.log(res);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSingleVideo();
  }, [])

  const sendMessage = () => {
    dispatch(setMessage({
      name:'CoderAAT',
      message:input,
    }));
    setInput('');
  }

  return (
    <div className=' flex mt-16 ml-4 w-[85%]'>
      <div className='w-[70%]'>
        <iframe
          width="750"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
        <h1 className='font-bold mt-2 text-lg'>{singleVideo?.snippet?.title}</h1>

        <div className='flex items-center justify-between mt-1'>
          <div className='flex items-center'>
            <Avatar className=' cursor-pointer' src="yt" size='35' round={true} />
            <h1 className='font-bold text-m ml-2'>{singleVideo?.snippet?.channelTitle}</h1>
            <button className='rounded-full border border-black bg-black text-white ml-2 px-3 py-1 cursor-pointer'>Subscribe</button>
          </div>

          <div className='flex item-center gap-2 '>

            <div className='flex item-center cursor-pointer bg-gray-200 rounded-full px-4 py-2'>
              <AiOutlineLike className='mr-4' size={"20px"} />
              <AiOutlineDislike size={"20px"} />
            </div>

            <div className='flex  item-center cursor-pointer bg-gray-200 rounded-full px-4 py-2 gap-1'><FaShare size={"20px"} className='mr-2' /><span>Share</span>
            </div>

            <div className='flex  item-center cursor-pointer bg-gray-200 rounded-full px-4 py-2 gap-1'><FaDownload className='mr-2' size={"20px"} /><span>Download</span></div>

          </div>
        </div>

      </div>

      <div className='  w-[30%] mx-4 border px-3 py-2 rounded-lg h-fit  border-gray-300'>
        <div className='flex justify-between'>
          <h1>Top chat</h1>
          <BsThreeDotsVertical size={'20px'} />
        </div>
        <div className='overflow-y-auto h-[27rem] flex flex-col-reverse'>
          <LiveChat />
        </div>
        <div className='flex items-center justify-between border-t p-2'>
          <div>
            <Avatar className=' cursor-pointer ' src='res' size='35' round={true} />
          </div>
          <input value={input} onChange={(e) => (setInput(e.target.value))} className='border-b border-gray-300 w-full outline-none ml-2' type="text" placeholder='Send Message' />
          <div>
            <div className='bg-gray-200 cursor-pointer p-2 rounded-full ' ><LuSendHorizonal size={'24px'} onClick={sendMessage} /></div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Watch