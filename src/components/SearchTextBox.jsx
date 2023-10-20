"use client"
import {AiOutlineSearch} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'

export default function SearchTextBox({value, setValue,handleClick}) {
    
  return (
    <div className='flex border border-gray-200 rounded-full shadow-lg px-6 
    hover:shadow-md focus-within:shadow-md transition-shadow
    py-3 ml-10 mr-5 flex-grow max-w-3xl items-center' >                                                                                 
                 <input type="text"  className= 'w-full border-0  focus:focus:outline-none' placeholder='Search' 
                 onChange={(e)=>setValue(e.target.value)}
                 value={value}
                 />
                 
                 <RxCross2  className={` ${value.trim().length>0?'':'hidden'} text-3xl text-gray-500 cursor-pointer sm:mr-2 border-r-2 pr-2 hover:text-red-400`} 
                 onClick={()=>setValue("")} 
                 
                 />
                 
                 <AiOutlineSearch className={` ${value.trim().length>0?'':'hidden'} text-2xl mr-2  text-gray-500 cursor-pointer hover:text-blue-700 hover:transition-shadow `}   
                 disabled={true}
                 onClick={()=>handleClick()}
                 
                 />                     
            
    </div>
  )
}
