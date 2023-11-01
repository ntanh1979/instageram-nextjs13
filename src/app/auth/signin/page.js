"use client"

import React from 'react'
import Header from '../../../components/Header'
import { getProviders,signIn } from "next-auth/react"
import {useState, useEffect} from 'react'



// import SigninButton from '../../../components/SigninButton'

export default function SignInApp() {
   const [providers,setProvider] = useState(null)
   
  //  get the provider list
  //---------------------------------------------------------------------------
   useEffect(()=>{
      const setProviders = async () =>{
        const res = await getProviders();        
        setProvider(res)
      }

      setProviders()
   },[])
  //---------------------------------------------------------------------------
  if(providers)   console.log(Object.values(providers))

  console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)

  return (
    <>
        <Header />
        <div className='flex justify-center space-x-7 mt-20'>
          <img 
          className='hidden object-cover rotate-6 md:inline-flex md:w-48'
          src='https://www.digi-follower.com/en/wp-content/uploads/2023/06/get-Instagram-Story-Views-100-real-and-Guaranteed-with-instant-delivery.webp' 
          alt='instagram'/>
          <div className='flex flex-col items-center'>
            {
              providers &&  (

                Object.values(providers).map((pro)=>(
                    <div key={pro.name}>
                      <img src='../../../Instagram_logo_mobile.svg' className='w-24 object-cover' />
                      <p className='text-sm italic my-10 text-center'>This app created for learning purposed</p>
                      {
                        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID?
                        (
                                <button className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500 '
                            onClick={()=>signIn(pro.id,{callbackUrl:"/"})}
                            >Sign in with {pro.name } </button>
                        ):
                        null
                      }
                      
                    </div>
                  )
                )

              )
              
            }
          </div>   
        </div>  
    </>
  )
}

