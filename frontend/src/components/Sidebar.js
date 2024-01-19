import React from 'react'
import logo from '../img/logo.svg'
import Menu from './Sidebar/Menu'
import Playlists from './Sidebar/Playlists'
function Sidebar() {
  return (
    <>
    
  <aside className='w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>
  <div className='mb-7 px-6'>
    <img src={logo}></img>
    
  </div>
  <Menu/>
  <Playlists/>


  </aside>

    
    </>
  )
}

export default Sidebar
