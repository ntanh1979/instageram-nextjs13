'use client'
import React from 'react'
import { useSession, signIn,signOut } from "next-auth/react"


export default function MiniProfile() {
  const { data: session, status } = useSession()

  return (
    <div className='flex justify-between items-center mt-14 ml-10 mr-10'>      
      <div className="flex space-x-3 items-center">        
        <img  src={session?.user.image} 
            className='h-11 w-11 rounded-full  cursor-pointer hover:scale-150 transition-transform duration-200 ease-out p-[2px] border border-blue-300'
            alt='user'
        />
        <div className="flex-1 ml-4">
            <h2 className='font-bold'>{session?.user.username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
        </div>        
      </div>
      <button  onClick={signOut} className='text-blue-400 font-semibold text-sm'>Sign out</button>
    </div>
  )
}
