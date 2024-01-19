import React from 'react'
import {Icon} from '../../Icons'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div>
      
    <nav className='px-2'>
        <ul className='flex flex-col'>
            <li>
                <NavLink to={"/"} className='h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white px-4'>
                    <span>
                        <Icon name="home"></Icon>  
                    </span>
                        Home
                </NavLink>
            </li>

            <li>
                <NavLink to={"/search"} className='h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white px-4'>
                    <span>
                        <Icon name="search"></Icon>  
                    </span>
                        Search
                </NavLink>
            </li>

            <li>
                <div className='h-10 flex gap-x-4 items-center text-sm text-gray-500 font-semibold hover:text-white px-4'>
                    <span>
                        <Icon name="collection"></Icon>  
                    </span>
                       Library
                </div>
            </li>
        
</ul>
    </nav>
    </div>
  )
}

export default Menu