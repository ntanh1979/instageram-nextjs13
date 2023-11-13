"use client"
import {modalState} from '../atom/modalAtom'
import {useRecoilState} from 'recoil'
import Modal from 'react-modal'
import {FiCamera} from 'react-icons/fi'
import { useRef ,useState} from 'react'

export default function UploadModal() {
  const [open,setOpen] = useRecoilState(modalState)
  const filePickerRef = useRef(null)
  const [selectedFile,setSelectedFile] = useState(null)

  function addImageToPost (event) {
      const reader = new FileReader()
      if(event.target.files[0]){
        reader.readAsDataURL(event.target.files[0])
      }
      reader.onload = (readerEvent) =>{
        setSelectedFile(readerEvent.target.result)
      }
      

  }
  return (
    <div>
       {open &&
        (<Modal
          className="max-w-lg w-[90%] p-6
          absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md
          "
          isOpen = {open}
          onRequestClose={()=>{
              setOpen(false);
              setSelectedFile(null);
            }}
        >
          <div 
          className='flex flex-col justify-center items-center h-[100%]'>
            
            {
              selectedFile ? (
                 <img src={selectedFile} alt="" 
                 className='w-full max-h-[250px] object-cover cursor-pointer'
                 onClick={()=>setSelectedFile(null)}/> 
              ) : 
              (
                <FiCamera className='cursor-pointer bg-red-200 p-2 rounded-full text-red-500
                hover:scale-125 transition-transform duration-200 ease-out 
                ' size={'2.5rem'} 
                onClick={()=>filePickerRef.current.click()}
                />
              )
            }
           


              <input type="file" hidden ref={filePickerRef} onChange={addImageToPost}/>

              <input type="text" maxLength={150} placeholder='Please enter your caption ...'  
              className='m-4 border-none text-center w-full focus-within:outline-none'/>
              <button 
              disabled
              className='w-full bg-red-600 text-white p-2 shadow-md   hover:brightness-125 
              disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100' >
                Upload Post</button>

          </div>
          
        </Modal>)
      }
    </div>
  )
}
