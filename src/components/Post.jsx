'use client'

import {useState} from 'react'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsBookmark,BsChatDots} from 'react-icons/bs'
import {HiOutlineEmojiHappy} from 'react-icons/hi'

import { useSession } from 'next-auth/react'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import {db} from '../../firebase'

export default function Post({id,username,img,userImg,caption}) {
//    const [value,setValue]  =useState("")
   const { data: session } = useSession()
   const [comment,setComment] = useState("");
   
   async function sendComment(event) {
        event.preventDefault();
        const commentToSend = comment.trim();
        setComment("")
        await addDoc(collection(db,"posts",id,"comments"),
        {
            comment : commentToSend,
            username : session.user.username,
            userImage : session.user.image,
            timestamp: serverTimestamp()
        }
        )
   }

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
        {
            session && (
                <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center space-x-4">
                    <AiOutlineHeart className='btn' size={'1.5rem'} />
                    <BsChatDots className='btn' size={'1.5rem'}/>
                </div>
                <BsBookmark className='btn' size={'1.5rem'}/>
                </div>
            )
        }

       

        {/* Post Comments */}
            <p className='p-5 truncate'>
                <span className='font-bold mr-2'>{username}</span>
                {caption}
            </p>
        {/* Post input box */}
        {
            session && (
                <form action="" className='flex items-center p-4'>
                    <HiOutlineEmojiHappy className='pr-2' size={'1.5rem'} />
                    <input type="text"  className= 'flex-1 border-0  focus:focus:outline-none' 
                    placeholder='Enter your comment...' 
                        onChange={(e)=>setComment(e.target.value)}
                        value={comment}
                        />
                    <button className='text-blue-400 cursor-pointer font-bold  disabled:text-blue-200 disabled:cursor-not-allowed' 
                     disabled={!comment.trim()}
                     onClick={sendComment}
                     type='submit'
                    >Post</button>
                </form>
            )
        }
       

    </div>
  )
}
