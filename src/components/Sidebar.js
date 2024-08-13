import React from "react";
import { FaTachometerAlt, FaRegSun, FaChevronRight, FaWrench, FaStickyNote, FaRegChartBar, FaTable } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-cyan-500 h-screen p-4">
      {/* Sidebar Title */}
      <div className="p-4 flex items-center justify-center border-b-[1px] border-slate-50/30">
        <h1 className="text-white cursor-pointer">Admin panel</h1>
      </div>

      {/* Sidebar Subtitle */}
      <div className="flex items-center px-2 py-4 gap-2 border-b-[1px] border-slate-50/30">
        <FaTachometerAlt color="white"/>
        <p className="text-white cursor-pointer">
          Dashboard
        </p>
      </div>
    
      {/* Interface */}
      <div className="py-2 px-2 border-b-[1px] border-slate-50/30">
        <p className="text-white/40">Interface</p>

        {/* Pages */}
        <div className="flex items-center justify-between py-2 gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <FaStickyNote color="white"/>
            <p className="text-white">Pages</p>
          </div>
          <FaChevronRight color="white"/>
        </div>

        {/* Charts */}
        <div className="flex items-center justify-between py-2 gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <FaRegChartBar color="white"/>
            <p className="text-white">Charts</p>
          </div>
          <FaChevronRight color="white"/>
        </div>
      </div>

      {/* Sidebar Addons */}
      <div className="py-2 px-2 border-b-[1px] border-slate-50/30">
        <p className="text-white/40">Addons</p>

        {/* Components */}
        <div className="flex items-center justify-between py-2 gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <FaRegSun color="white"/>
            <p className="text-white">Components</p>
          </div>
          <FaChevronRight color="white"/>
        </div>

        {/* Utilities */}
        <div className="flex items-center justify-between py-2 gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <FaWrench color="white"/>
            <p className="text-white">Utilities</p>
          </div>
          <FaChevronRight color="white"/>
        </div>

        {/* Tables */}
        <div className="flex items-center justify-between py-2 gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <FaTable color="white"/>
            <p className="text-white">Tables</p>
          </div>
          <FaChevronRight color="white"/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar