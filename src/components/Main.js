import React from "react";
import { FaRegCalendar } from "react-icons/fa";

const Main = () => {
  return (
    <div className="pt-6 px-6 bg-gray-100">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-600 text-2xl cursor-pointer">Dashboard</h1>
        <button className="bg-orange-500 rounded-sm h-[32px] px-[30px] text-slate-50 flex items-center justify-center cursor-pointer">Generate Report</button>
      </div>
      <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
        <div className="h-[100px] rounded-lg bg-white border-l-[4px] border-cyan-500 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-cyan-400 font-bold text-sm">EARNINGS (MONTLY)</h2>
            <h1 className="font-bold text-xl text-slate-500 mt-5px">$40,000</h1>
          </div>
          <FaRegCalendar fontSize={20}/>
        </div>

        <div className="h-[100px] rounded-lg bg-white border-l-[4px] border-green-500 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-green-400 font-bold text-sm">PENDING REQUESTS</h2>
            <h1 className="font-bold text-xl text-slate-500 mt-5px">$240,000</h1>
          </div>
          <FaRegCalendar fontSize={20}/>
        </div>

        <div className="h-[100px] rounded-lg bg-white border-l-[4px] border-rose-500 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-rose-400 font-bold text-sm">TASKS</h2>
            <h1 className="font-bold text-xl text-slate-500 mt-5px">$40,000</h1>
          </div>
          <FaRegCalendar fontSize={20}/>
        </div>

        <div className="h-[100px] rounded-lg bg-white border-l-[4px] border-yellow-500 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-yellow-400 font-bold text-sm">EARNINGS (MONTLY)</h2>
            <h1 className="font-bold text-xl text-slate-500 mt-5px">$40,000</h1>
          </div>
          <FaRegCalendar fontSize={20}/>
        </div>

      </div>
    </div>
  )
}

export default Main