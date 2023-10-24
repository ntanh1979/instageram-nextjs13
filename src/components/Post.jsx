import React from 'react'
import {BiDotsHorizontalRounded} from 'react-icons/bi'

export default function Post({id,username,img,userImg,caption}) {
  return (
    <div className='bg-white my-7 border rounded-md'>
       {/* Post header */}
       <div className="flex items-center p-5">
            <img className="h-12 rounded-full object-cover border p-1 mr-3" src={userImg} alt={username} />
            <p className='font-bold flex-1'>{username}</p>
            <BiDotsHorizontalRounded className='text-md hover:scale-125 hover:text-green-400'/>
       </div>

        {/* Post image */}
        <img className='object-cover w-full' src={img} alt="" />
    </div>
  )
}
