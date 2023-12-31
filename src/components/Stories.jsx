'use client'

import { useSession, signIn,signOut } from "next-auth/react"

import minifaker from 'minifaker'
import 'minifaker/locales/en'

import { useState ,useEffect } from 'react'
import Story from './Story'

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([])

  const { data: session, status } = useSession()


  useEffect(()=>{
    const storyUsers = minifaker.array(20,(i)=>({
        username: minifaker.username({locale:"en"}).toLocaleLowerCase(),
        img : `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
        id :  i,
    })
    )
  
  setStoryUsers(storyUsers)  
  console.log(storyUsers)
  
},[])

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none'>
      {
        session && (<Story username={session.user.username} img = {session.user.image} isUser={true}/>) 
      }
       

      {
        storyUsers.map((user)=>(
            <Story key={user.id} username={user.username} img = {user.img} />
        ))
      }
    </div>
  )
}
