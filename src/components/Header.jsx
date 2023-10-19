import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
       {/* Left */}
       <div className="flex items-center justify-between max-w-6xl">
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
            <h1>Right Side</h1>
       </div>

       {/* Middle */}
       

       {/* Right */}

    </div>
  )
}
