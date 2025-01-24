import React from 'react'
import Navbar from '../Componets/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    //Displaying the Navbar and the content
    <div className='w-[100%] h-[100%] p-[0.5rem] flex flex-row md:gap-x-[1rem] gap-[0.3rem]'>

      <div className={`md:w-[20%] h-[100vh] sticky top-0 w-[12%] bg-gray-300 rounded-[1rem]`}>
        <Navbar/>
      </div>

        <div className='md:w-[80%] h-[100%] overflow-y-auto w-[88%]'>
            <Outlet/>
        </div>

        
    </div>
  )
}

export default RootLayout
