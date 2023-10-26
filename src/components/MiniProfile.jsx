import React from 'react'

export default function MiniProfile() {
  return (
    <div className='flex justify-between items-center mt-14 ml-10 mr-10'>      
      <div className="flex space-x-3 items-center">        
        <img src={`data:image/jpeg;base64,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`} 
            className='h-11 w-11 rounded-full  cursor-pointer hover:scale-150 transition-transform duration-200 ease-out p-[2px] border border-blue-300'
            alt='user'
        />
        <div className="flex-1 ml-4">
            <h2 className='font-bold'>ntanh</h2>
            <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
        </div>        
      </div>
      <button className='text-blue-400 font-semibold text-sm'>Sign out</button>
    </div>
  )
}