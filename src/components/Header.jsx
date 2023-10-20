"use client"
import Image from 'next/image'

import SearchTextBox from '@/components/SearchTextBox'
import {useState} from 'react'
import {AiFillHome,AiOutlinePlusCircle} from 'react-icons/ai'


export default function Header() {
  const [searchTerm, setSearchTerm]  = useState("")
  const handleOnSearch = () =>{
    setSearchTerm("Click search")
  }
  return (
   
        // <div className="flex mx-4 items-center justify-between  w-full pl-0 sm:pl-[5%] sm:pr-[5%] md:pl-[10%] md:pr-[10%] lg:pl-[20%] :pr-[20%]">
        <div className="flex mx-4 xl:mx-auto items-center justify-between  max-w-6xl ">
         {/* Left */}
            <div className="flex flex-row ml-2 ">
                    <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
                        <Image 
                            src={'/Instagram_logo.png'} 
                            alt='logo'
                            layout='fill'
                            className='object-contain'
                            
                        />
                    </div>
                    <div className="h-24 w-10 relative  lg:hidden cursor-pointer">
                        <Image 
                            src={'/Instagram_logo_mobile.svg'} 
                            alt='logo'
                            layout='fill'
                            className='object-contain'
                            
                        />
                    </div>  
            </div> 

            {/* Middle */}   
            {/* <div className="relative mt-1 mx-auto w-8/12 sm:w-6/12 items-center">
                <div className="absolute mt-2 ml-2 pl-2">
                    <AiOutlineSearch className='text-xl mr-2  text-gray-500 cursor-pointer' />                    
                 </div>
                 <input type="text"  className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-offset-blue-700
                  focus:border-gray-100  rounded-full w-11/12  ' placeholder='Search'/>
                 
            </div> */}
            <SearchTextBox value={searchTerm} setValue={setSearchTerm} handleClick={handleOnSearch}
            />
           

             {/* Right */}
             <div className="flex flex-row space-x-4 justify-center items-center">
                <AiFillHome className='hidden md:inline-flex text-xl hover:text-red-600 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
                <AiOutlinePlusCircle className='text-xl hover:text-blue-600 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
                <img src='/user_logo.png' className='h-10 w-10 rounded-full  cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
             </div>
            
       </div>

        

      

     
  )
}
