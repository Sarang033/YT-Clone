import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

  if(!isMenuOpen) return null; 
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li>Home</li>
        <li>Shrots</li>
        <li>Library</li>
        <li>History</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
      <h1 className='font-bold pt-5' >Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
    </div>
  )
}

export default Sidebar
