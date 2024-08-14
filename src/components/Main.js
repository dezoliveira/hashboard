import { FaRegCalendar, FaEllipsisV } from "react-icons/fa";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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

      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-slate-50 flex items-center justify-between py-[15px] px-[20px] borber-b-[1px] border-slate-50 mb-[20px]">
            <h2>Earnings Overview</h2>
            <FaEllipsisV color="gray" className="cursor-pointer"/>
          </div>
          <div>
            <LineChart
              width={1150}
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        <div className="basis-[50%]">
            
        </div>
      </div>
    </div>
  )
}

export default Main