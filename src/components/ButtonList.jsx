import React from 'react'
const buttonList = ["All", "Javascript", "Vlogs", "Music", "Songs", "Trending", "Live", "Gaming", "Mixes", "Shorts", 'Cricket', 'Comedy', 'thriller', 'New to You',]

const ButtonList = () => {
  return (
    <div className='flex overflow-x-scroll mt-16 scroll-'>
      {
        buttonList.map((item, index) => {
          return (
            <div>
              <button className='bg-gray-200 px-4 py-1 rounded-lg mx-2 font-medium ' key={index} ><span className='whitespace-nowrap'>{item}</span></button>
              </div>
          )
        })
      }
    </div>
  )
}

export default ButtonList