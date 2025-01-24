import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { RiStockLine } from "react-icons/ri";
import { FaCoins } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
    const [light, setLight] = useState(()=>{return localStorage.getItem("light") === "true"})

    //Change the theme
    useEffect(()=>{
        if(light){
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        }else{
            document.body.style.backgroundColor = '#343a40'
            document.body.style.color = 'white'
        }
    }, [light])

    //Toggle the theme
    const handleToggle = () => {
        setLight((prevLight) => {
            const newLight = !prevLight;
            localStorage.setItem('light', newLight);
            return newLight;
        });
    }

  return (
    <div>
        <div className='flex flex-row items-center p-2 gap-x-2 justify-start md:flex'>
            <img src="/logo.png" className='w-[2rem]'/>
            
            <p className='font-bold md:flex hidden text-black'>Logoipsm</p>
            
        </div>

        <div>
            <ul className='flex flex-col gap-y-[2rem] pt-[1rem] items-start px-[0.2rem] font-bold'>
                <NavLink to='/' className={`flex items-center gap-x-2`}><li><FaCoins className='text-[2rem] text-green-600 '/></li><li className='md:flex hidden text-black'>CRYPTO</li></NavLink>

                <NavLink to='stock' className={`flex items-center gap-x-2`}><li><RiStockLine className='text-red-600 text-[2rem]'/></li><li className='md:flex hidden text-black'>STOCK</li></NavLink>

                <div className='flex flex-col justify-center gap-x-2 p-2'>
            <button onClick={handleToggle}><CiLight className={light ? "text-[2rem] text-yellow-600 font-bold" : "text-[2rem] text-black"}/></button>
           

        </div>

            </ul>
        </div>

        
    </div>
  )
}

export default Navbar
