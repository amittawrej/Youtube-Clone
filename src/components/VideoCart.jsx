import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
// import { API_KEY } from '../constants/youtube'

const VideoCart = ({item}) => {
    const[videoIcon,setVideoIcon]=useState('');
    const getChannelAvatar=async()=>{
        try {
            const res=await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
            
            // console.log(res);
            setVideoIcon(res.data.items[0].snippet.thumbnails.default.url)
            // console.log(res.data.items[0].snippet.thumbnails.default.url)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getChannelAvatar();
    },[])

    return (
        <div className='cursor-pointer w-94'>
            <img className='w-full mt-3 rounded-xl' src={item.snippet.thumbnails.medium.url} alt='ytvideo' />
            <div>
                <div className='flex mt-2'>
                    <Avatar className='absolute cursor-pointer' src={videoIcon} size='35' round={true} />
                    <div className='ml-12   '>
                        <h1 className='font-bold'>{item.snippet.title}</h1>
                        <p className='text-sm text-gray-400'>{item.snippet.channelTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCart