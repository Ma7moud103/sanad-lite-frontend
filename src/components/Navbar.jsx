import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar w-full bg-[#EEEE]  h-[70px] shadow-sm flex items-center justify-between  px-5 '>
            <div>
                Logo
            </div>
            <ul className='list-none p-0 m-0 flex items-center  h-full gap-x-6 '>
                <li className='font-bold text-mainColor text-xl hover:text-secondMainColor transition-all '>
                    <NavLink to="/">Home</NavLink>

                </li>
                <li className='font-bold text-mainColor text-xl hover:text-secondMainColor transition-all'>
                    <a href="#">Courses</a>
                </li>
                <li className='font-bold text-mainColor text-xl hover:text-secondMainColor transition-all'>
                    <a href="#">BookCourse</a>
                </li>
            </ul>

            <ul className='list-none p-0 m-0 flex items-center   h-full gap-x-3 '>
                <li className='font-bold text-mainColor text-xl hover:text-secondMainColor transition-all '>
                    <a href="#">LoginIn</a>
                </li>
                <li className='font-bold text-mainColor text-xl hover:text-secondMainColor transition-all'>
                    <a href="#">LogOut</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar