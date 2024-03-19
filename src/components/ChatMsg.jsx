import React from 'react'
import Avatar from 'react-avatar'

const ChatMessage = ( {item}) => {
  return (
    <div className='flex items-center mt-2  '>
        <div>
        <Avatar className=' cursor-pointer' src='r' size='30' round={true} />
        </div>
        <div className='flex items-center'>
            <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
            <p className='ml-2 text-sm'>{item.message}</p>
        </div>
    </div>
  )
}

export default ChatMessage