import axios from 'axios'
import React, { useEffect } from 'react'
import VideoCart from './VideoCart'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setHomeVideo} from '../store/appSlice'
const VideoContainer = () => {
const dispatch=useDispatch();
 
const video=useSelector((store)=>store.app.video)
const category=useSelector((store)=>store.app.category)
  const fetchYoutubeVideo = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)

      dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }
  }
  const fetchVideoByTag=async()=>{
    try {
      const res=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
      console.log(res);
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if(category==='All'){
      fetchYoutubeVideo();
    }
    else{
    fetchVideoByTag();}
  }, [category]);

  return (
    <div className='grid grid-cols-3 gap-3'>

      {
        video.map((item) => {
          return (
            <Link to={`/watch?v=${typeof item.id==='object' ? item.id.videoId: item.id}`} key={typeof item.id==='object' ? item.id.videoId: item.id}>
              <VideoCart key={item.id} item={item} />
            </Link>
          )
        })

      }
    </div>
  )
}

export default VideoContainer