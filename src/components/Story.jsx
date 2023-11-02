import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

export default function Story({img,username,isUser}) {
  return (
    <div className='relative group cursor-pointer'>
      <img  className="h-14 rounded-full p-[1.5px] border-blue-300 border-2 group-hover:scale-110  hover:border-red-300
      transition-transform duration-200 ease-out" src={img} alt={username} />
      {
        isUser && 
        (<AiOutlinePlus size={'1.5rem'} className='absolute top-4 left-4 text-red-700 ' />)
      }
      
      <p className='text-xs w-14 truncate'>{username}</p>
    </div>
  )
}
