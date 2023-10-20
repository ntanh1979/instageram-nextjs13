import Image from 'next/image'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

export default function Header() {
  return (
   
      
       <div className="flex items-center justify-between max-w-6xl">
         {/* Left */}
            <div className="flex flex-row ">
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
            <div className="relative mt-1  sm:w-7/12 items-center">
                <div className="absolute mt-2 ml-2 pl-2">
                    <AiOutlineSearch className='text-xl  text-gray-500 cursor-pointer' />                    
                 </div>
                 <input type="text"  className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-offset-blue-700
                  focus:border-gray-100  rounded-full sm:w-11/12  ' placeholder='Search'/>
            </div>

             {/* Right */}
             <div className="">
             <h1 className=''>Right Side</h1>
             </div>
             
       </div>

    
       

      

     
  )
}
