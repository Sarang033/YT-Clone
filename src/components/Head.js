import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
        <div className='flex col-span-1 '>
            <img
             className='h-10'
             alt="menu" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"/>
            <img
            className='h-10 mx-3'
             alt="yt-logo" 
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/>
        </div>
        <div className='col-span-10 px-10'>
            <input className='w-1/2 border border-gray-400 p-1.5 rounded-l-full' type="text"/>
            <button className=' border border-gray-400 p-1.5 rounded-r-full'>Search</button>
        </div>
        <div className='col-span-1'>
            <img className='h-8' alt="user-icon" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"/>
        </div>
    </div>

  )
}

export default Head
