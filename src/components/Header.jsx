"use client"
import Image from 'next/image'
import { useSession, signIn,signOut } from "next-auth/react"

import SearchTextBox from '../components/SearchTextBox'
// '@/components/SearchTextBox'
import {useState} from 'react'
import {AiFillHome,AiOutlinePlusCircle} from 'react-icons/ai'


export default function Header() {

  const [searchTerm, setSearchTerm]  = useState("")
  const { data: session, status } = useSession()
  console.log(session)

  const handleOnSearch = () =>{
    setSearchTerm("Click search")
  }
  return (
            <div className="shadow-sm border-b sticky top-0 bg-white z-30">

            
                        <div className="flex  items-center justify-between  max-w-6xl mx-4 xl:mx-auto ">
                        {/* Left */}
                            <div className="flex flex-row ml-2 items-center">
                                    <div className="h-24 w-24 relative hidden lg:inline-grid ">
                                        <Image 
                                            src={'/Instagram_logo.png'} 
                                            alt='logo'
                                            layout='fill'                                            
                                            className='object-contain'
                                            
                                        />
                                    </div>
                                    <div className="h-24 w-10 relative  lg:hidden">
                                        <Image 
                                            src={'/Instagram_logo_mobile.svg'} 
                                            alt='logo'
                                             layout='fill'
                                            className='object-contain'
                                            
                                        />
                                    </div>  
                            </div> 

                            {/* Middle */}   
                        
                            <SearchTextBox value={searchTerm} setValue={setSearchTerm} handleClick={handleOnSearch} />
                        

                            {/* Right */}
                       
                            <div className="flex flex-row space-x-4 justify-center items-center">
                                <AiFillHome className='hidden md:inline-flex text-xl hover:text-red-600 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
                                {
                                    session ? 
                                    (
                                        <>
                                            <AiOutlinePlusCircle className='text-xl hover:text-blue-600 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
                                            {/* <img src='/user_logo.png' className='h-10 w-10 rounded-full  cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/> */}
                                            <img src={session?.user.image} 
                                            onClick={signOut}
                                            className='h-10 w-10 rounded-full  cursor-pointer hover:scale-125 transition-transform duration-200 ease-out p-[1.5px] border border-blue-300'/>
                                        </>
                                    ) :
                                    (
                                          <button onClick={signIn}>Sign in</button>  
                                    )
                                }
                                
                        
                            </div>
                                
                            
                            
                    </div>

            </div>

      

     
  )
}
