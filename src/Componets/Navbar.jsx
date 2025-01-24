import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiStockLine } from "react-icons/ri";
import { FaCoins } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row items-center p-2 gap-x-2 justify-start md:flex'>
            <img src="/logo.png" className='w-[2rem]'/>
            
            <p className='font-bold md:flex hidden'>Logoipsm</p>
            
        </div>

        <div>
            <ul className='flex flex-col gap-y-[2rem] pt-[1rem] items-start px-[0.2rem] font-bold'>
                <NavLink to='/' className={`flex items-center gap-x-2`}><li><FaCoins className='text-[2rem] text-green-600'/></li><li className='md:flex hidden'>CRYPTO</li></NavLink>

                <NavLink to='stock' className={`flex items-center gap-x-2`}><li><RiStockLine className='text-red-600 text-[2rem]'/></li><li className='md:flex hidden'>STOCK</li></NavLink>

            </ul>
        </div>

        <div className='flex flex-col justify-center gap-x-2 p-2 absolute bottom-0'>
            <button><CiLight className='text-[2rem] text-yellow-600'/></button>
            <button><MdDarkMode className='text-[2rem]'/></button>

        </div>
    </div>
  )
}

export default Navbar
