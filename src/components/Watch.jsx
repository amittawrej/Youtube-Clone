

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import { useSearchParams } from 'react-router-dom'
import { API_KEY } from '../constants/youtube';
import { AiOutlineLike } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
import { AiOutlineDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
const Watch = () => {
  const [singleVideo, setSingleVideo] = useState('');
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  // console.log(videoId);
  const getSingleVideo = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&regionCode=US&key=${API_KEY}`)
      console.log(res);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSingleVideo();
  }, [])

  return (
    <div className='mt-16 ml-4 w-[52%]'>
      <div>
        <iframe
          width="700"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
              <AiOutlineLike className='mr-4' size={"20px"}/>
              <AiOutlineDislike size={"20px"}/>
            </div>

            <div className='flex  item-center cursor-pointer bg-gray-200 rounded-full px-4 py-2 gap-1'><FaShare size={"20px"} className='mr-2'/><span>Share</span>
            </div>

            <div className='flex  item-center cursor-pointer bg-gray-200 rounded-full px-4 py-2 gap-1'><FaDownload className='mr-2' size={"20px"}/><span>Download</span></div>

          </div>
        </div>

      </div>
      <div>

      </div>



    </div>
  )
}

export default Watch