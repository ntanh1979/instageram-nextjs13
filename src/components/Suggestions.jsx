'use client'

import minifaker from 'minifaker'
import 'minifaker/locales/en'
import { useState ,useEffect } from 'react'

export default function Suggestions() {

    const [suggestions, setSuggestions] = useState([])
    const [showAll, setShowAll] = useState(false)

    const generateFollowList =(maxNumber)=> {
        const followUserList = minifaker.array(maxNumber,(i)=>({
            username: minifaker.username({locale:"en"}).toLocaleLowerCase(),
            img : `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            jobTitle : minifaker.jobTitle({locale:"en"}).toLocaleLowerCase(),
            id :  i,
        })
        )
        setSuggestions(followUserList) 
    }

    useEffect(()=>{
        if(showAll) {
            generateFollowList(10)
        } else 
        {
            generateFollowList(5)
        }
            
    },[showAll])

  return (
    <div className="mt-4 ml-10 mr-10">
        <div className='flex justify-between mb-5   text-sm'>
            <h3 className='font-bold text-gray-400'>Suggestion for you</h3>
            <button className='font-semibold text-gray-600' onClick={()=>{
                setShowAll(!showAll)
            }}>
                {
                    showAll?'See Less':'See All'
                }
            </button>
        </div>
        {/* suggestion users */}
        <div className="">
            {
                suggestions.map((user)=>(
                     <div className="flex items-center justify-between mt-3">
                        <div className="flex">
                            <img  className="h-10 rounded-full p-[2px] border-blue-300 border-2 cursor-pointer hover:scale-110  hover:border-red-300
                                transition-transform duration-200 ease-out" src={user.img} alt={user.username} />
                            <div className="flex-1 ml-4">
                                <h2 className='font-semibold'>{user.username}</h2>
                                <h3 className='text-sm text-gray-400 truncate w-[230px]'>{user.jobTitle}</h3>    
                            </div>                            
                        </div>  
                        <button className='font-semibold text-blue-400 text-sm'>Follow</button>                                           
                    </div>
                ))
            }
        </div>
    </div>
  )
}
