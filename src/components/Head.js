import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';


const Head = () => {
  const dispatch= useDispatch();

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
  };
  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
        <div className='flex col-span-1 '>
            <img
            onClick={()=>toggleMenuHandler()}
             className='h-8 cursor-pointer'
             alt="menu" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"/>
            
            <a href="/">
            <img
            className='h-8 mx-3'
             alt="yt-logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"/>
            </a>
        </div>
        <div className='col-span-10 px-10'>
            <input className='w-1/2 border border-gray-400 p-1.5 rounded-l-full' type="text"/>
            <button className=' border border-gray-400 p-1.5 rounded-r-full'>Search</button>
        </div>
        <div className='col-span-1'>
            <img className='h-7' alt="user-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavCDvlRFf6Y1gcbHAoYvLDWSjR6GFpI1sYErd3F8&s"/>
        </div>
    </div>

  )
}

export default Head
