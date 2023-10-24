import React from 'react'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsBookmark,BsChatDots} from 'react-icons/bs'

export default function Post({id,username,img,userImg,caption}) {
  return (
    <div className='bg-white my-7 border rounded-md'>
       {/* Post header */}
       <div className="flex items-center p-5">
            <img className="h-12 rounded-full object-cover border p-1 mr-3" src={userImg} alt={username} />
            <p className='font-bold flex-1'>{username}</p>
            <BiDotsHorizontalRounded className='btn' size={'1.5rem'}/>
       </div>

        {/* Post image */}
        <img className='object-cover w-full' src={img} alt="" />

        {/* Post Buttons */}

        <div className="flex items-center justify-between px-4 pt-4">
            <div className="flex items-center space-x-4">
                <AiOutlineHeart className='btn' size={'1.5rem'} />
                <BsChatDots className='btn' size={'1.5rem'}/>
            </div>
            <BsBookmark className='btn' size={'1.5rem'}/>
        </div>
    </div>
  )
}
