import React from 'react'
import GradientLineChart from './LineChart'
import { LuLaugh } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import RecentActivities from './RecentActivities';
import QuickActions from './QuickActions';
function AdminDashboard() {
    return (
        <div className='flex w-full justify-between mx-16'>
            <div className='py-4'>
                <h1 className='text-[2.2rem] font-semibold'>Good Evening <span className='text-primaryColor'>Qmark</span></h1>
                <p className='text-gray-500 font-medium text-3xl my-3'>At a glance</p>
                <GradientLineChart />
                <div className='mt-4'>
                    <h2 className='text-gray-500 font-medium text-3xl my-3'>
                        Recent updates
                    </h2>
                    <div className='flex gap-4'>
                        <div>
                            <div className='border-[0.3px] rounded-xl border-black py-4 px-3 w-fit flex gap-3'>
                                <LuLaugh size={23} />
                                <p className='text-xl'>
                                    2 new members !
                                </p>
                            </div>
                            <button className='flex items-center gap-1 mt-1 text-lg text-gray-500 ml-4'> view all <MdOutlineArrowOutward /></button>
                        </div>
                        <div>
                            <div className='border-[0.3px] rounded-xl border-black py-4 px-3 w-fit flex gap-3'>
                                <LuLaugh size={23} />
                                <p className='text-xl'>
                                    2 new members !
                                </p>
                            </div>
                            <button className='flex items-center gap-1  mt-1 text-lg text-gray-500 ml-4'> view all <MdOutlineArrowOutward /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pr-20 mt-14'>
                <RecentActivities />
                <QuickActions />
            </div>
        </div>
    )
}

export default AdminDashboard
