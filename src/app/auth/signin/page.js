"use client"

import React from 'react'
import Header from '../../../components/Header'
import { getProviders,signIn } from "next-auth/react"
import {useState, useEffect} from 'react'

import { useSession } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';

import { useRouter } from 'next/navigation'
import { doc, getDoc, serverTimestamp, setDoc } from '@firebase/firestore'
import {db} from '../../../../firebase'



// import SigninButton from '../../../components/SigninButton'

export default function SignInApp() {
   const [providers,setProvider] = useState(null)
   const { data: session, status } = useSession()
   const router = useRouter()


   // xu ly sign on OK and show message
   async function onGoogleClick() {
    await signIn('google')
    // signIn(pro.id,{callbackUrl:"/"})
   } 

   async function saveUserLogin(){
      try {
                console.log('Save Info')
                const user = session?.user
                const docRef = doc(db,"users",user.uid)
                const docSnap = await getDoc(docRef)
        
                if(!docSnap.exists()) {
                  await setDoc(docRef,{
                  name : user.name,
                  email : user.email,
                  userImg : user.image,
                  uid : user.uid,
                  timestamp : serverTimestamp(),                  
                  username: user.name.split(" ").join("").toLocaleLowerCase()
                  });
                }
      } catch (error) {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
              console.log(errorMessage)
      }
   }

   useEffect(() => {
    if (session?.user.username) {
          // console.log(session)
          saveUserLogin()
          toast.success("You have successfully logged in!")
          setTimeout(()=>{
            router.push("/")
          }, 800)
    }
    
  }, [session?.user.username])
   
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
  
  
  // if (status === "authenticated") {
  //   return <p>Signed in as {session.user.email}</p>
  // }


  // if(providers)   console.log(Object.values(providers))

  // console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)

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
                            // onClick={()=>signIn(pro.id,{callbackUrl:"/"})}
                            onClick={onGoogleClick}
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