import React from 'react'
import { FaUser } from 'react-icons/fa'
import { HiSun } from 'react-icons/hi'
import { RiSettings3Fill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <>
      <div className="relative nav flex items-center px-[100px] h-[90px] border-b-[1px] border-gray-800">
        
        {/* Centered Text */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h3 className='text-[25px] font-[700] text-center sp-text'>AI COMPONENT GENERATOR</h3>
        </div>

      
      </div>
    </>
  )
}

export default Navbar
