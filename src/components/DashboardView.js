import React from 'react'
import profile from "../assets/profile.png"
import { FaSearch, FaRegBell, FaEnvelope } from 'react-icons/fa'

const DashboardView = () => {
  return (
    <div className='flex items-center justify-between h-[70px] shadow-md p-4'>
      <div className="flex items-center rounded-sm">
        <input type="text" className="bg-gray-100 h-[40px] outline-none pl-2 w-[350px] rounded-[5px] placeholder: text-[14px]" placeholder="Search for..."/>
        <div className="flex items-center justify-center p-3 bg-cyan-400 cursor-pointer rounded-[5px]">
          <FaSearch color="white"/>
        </div>
      </div>
      <div className="flex items-center gap-4 relative">
        <div className="flex items-center gap-4 rounded-md p-4">
          <FaRegBell />
          <FaEnvelope />
        </div>
        <div className="flex items-center gap-4 relative">
          <p>Andres Oliveira</p>
          <div className="h-[58px] w-[58px] rounded-full bg-cyan-400 cursor-pointer flex items-center justify-center relative">
            <img src={profile} alt="profile-pic" width={52} height={52} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardView