'use client'

import {useState, useEffect} from 'react'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import { FaHeart } from "react-icons/fa";


import {BsBookmark,BsChatDots} from 'react-icons/bs'
import {HiOutlineEmojiHappy} from 'react-icons/hi'

import { useSession } from 'next-auth/react'
import { addDoc, setDoc, collection, onSnapshot, orderBy, query, serverTimestamp, doc, deleteDoc } from '@firebase/firestore'
import {db} from '../../firebase'

import Moment from 'react-moment'

export default function Post({id,username,img,userImg,caption}) {
//    const [value,setValue]  =useState("")
   const { data: session } = useSession()
   const [comment,setComment] = useState("");
   const [comments,setComments]=useState([]);
   const [hasLiked, setHasLiked] = useState(false);
    const [likes, setLikes] = useState([])

   useEffect(()=>{
    const unsubscribe = onSnapshot(
       query(collection(db,"posts",id,"comments"),orderBy("timestamp","desc")),         
        (snapshot) =>{
            setComments(snapshot.docs)
        }
    )
   
    return unsubscribe;
  },[db,id])

  //---------------get likes------------------------------------------------
  useEffect(()=>{
    const unsubscribe = onSnapshot(
        collection(db,"posts",id,"likes"),         
         (snapshot) =>{
             setLikes(snapshot.docs)
         }
     )
    
     return unsubscribe;
  },[db])
//   --------------------------------------------------------------
  useEffect(()=>{
    setHasLiked(
        likes.findIndex(like=> like.id=== session?.user.uid) !==-1
    )
  },[likes])
  
  //   --------------------------------------------------------------
   
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

   async function likePost(){
        if(hasLiked) {
            await deleteDoc(doc(db,"posts",id,"likes",session.user.uid))
        } else
        {
            await setDoc(doc(db,"posts",id,"likes",session.user.uid),{
                username: session.user.username
            })        
        }
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
                    {
                        hasLiked?                        
                        (<FaHeart onClick={likePost} className='btn text-red-500' size={'1.5rem'} />):
                        (<AiOutlineHeart onClick={likePost} className='btn' size={'1.5rem'} />) 
                    }
                    
                    
                    <BsChatDots className='btn' size={'1.5rem'}/>
                </div>
                <BsBookmark className='btn' size={'1.5rem'}/>
                </div>
            )
        }

       

        {/* Post Comments */}
        
            
            <p className='p-5 truncate'>
                {/* display number of likes */}
            
                {
                    likes.length >0 &&
                    (<p className='font-semibold'>
                        {likes.length} like {(likes.length!==1) && ('s')}
                    </p>) 
                }
                <span className='font-bold mr-2'>{username}</span>
                {caption}
            </p>
            {   comments.length >0 &&
                (
                    <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
                        {
                            comments.map((cmt)=>{
                                return (
                                <div className='flex items-center space-x-2 mb-2'>
                                    <img src={cmt.data().userImage} alt="user-image" 
                                    className='rounded-full h-7 object-cover' />
                                    <p className='font-semibold'>{cmt.data().username}</p>
                                    <p className='flex-1 truncate'>{cmt.data().comment}</p>
                                    <Moment fromNow>{cmt.data().timestamp?.toDate()}</Moment>
                                       
                                </div>
                                )
                            })
                        }    
                    </div>
                    
                )
                
                
            }
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
