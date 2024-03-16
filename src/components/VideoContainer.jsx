import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API, API_KEY } from '../constants/youtube'
import VideoCart from './VideoCart'
import { Link } from 'react-router-dom'
const VideoContainer = () => {

  const [video, setVideo] = useState([])

  const fetchYoutubeVideo = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`)
      // console.log(res?.data?.items);
      setVideo(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchYoutubeVideo()
  }, [])

  return (
    <div className='grid grid-cols-3 gap-3'>

      {
        video.map((item) => {
          return (
            <Link to={`/watch?v=${item.id}`} key={item.id}>
              <VideoCart key={item.id} item={item} />
            </Link>
          )
        })

      }
    </div>
  )
}

export default VideoContainer