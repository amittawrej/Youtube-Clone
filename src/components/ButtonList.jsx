import React from 'react'
const buttonList=["All","Javascript","Vlogs", "Music","Songs", "Trending", "Live","Gaming","Mixes","Shorts",,]

const ButtonList = () => {
  return (
    <div className='mt-16'>
        {
            buttonList.map((item,index)=>{
                return(
                    <button className='bg-gray-200 px-4 py-1 rounded-lg mx-2 font-medium ' key={index} >{item}</button>
                )
            })
        }
    </div>
  )
}

export default ButtonList