import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row items-center p-2 gap-x-2 justify-start'>
            <img src="/logo.png" className='w-[2rem]'/>
            
            <p className='font-bold md:flex hidden'>Logoipsm</p>
            
        </div>

        <div>
            <ul className='flex flex-col gap-y-[2rem] pt-[1rem] items-start px-[0.5rem] font-bold'>
                <NavLink to='/'><li>CRYPTO</li></NavLink>

                <NavLink to='stock'><li>STOCK</li></NavLink>

                <NavLink to='news'><li>NEWS</li></NavLink>
            </ul>
        </div>

        <div className='flex flex-col justify-center gap-x-2 p-2 absolute bottom-0'>
            <button>Light</button>
            <button>Dark</button>
        </div>
    </div>
  )
}

export default Navbar
