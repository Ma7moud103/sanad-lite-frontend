import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [toggleMenu, settoggleMenu] = useState(false)
    return (
        <div className='navbar w-full bg-[#EEEE] h-auto py-4 sm:py-0  sm:h-[70px]  shadow-sm flex gap-y-2 flex-col sm:flex-row items-center justify-between  px-5 '>
            <div className='flex w-full sm:w-auto items-center justify-between'>
                Logo
                <span onClick={() => settoggleMenu(prev => !prev)} className='sm:hidden cursor-pointer'><i className={`fa-solid ${toggleMenu ? "fa-x" : "fa-bars"} transition-all ${toggleMenu ? "text-mainColor font-bold" : ""}`}></i></span>
            </div>

            <ul className={`list-none  transition-all relative z-0   p-0 m-0  ${toggleMenu ? "flex gap-y-2" : "hidden"} sm:flex items-center flex-col sm:flex-row h-full gap-x-6 `}>
                <li className='font-bold text-mainColor md:text-base  hover:text-secondMainColor transition-all '>
                    <NavLink onClick={() => settoggleMenu(false)} className={"cursor-pointer"} to={"/"}>Home</NavLink>
                </li>
                <li className='font-bold text-mainColor md:text-base  hover:text-secondMainColor transition-all'>
                    <NavLink onClick={() => settoggleMenu(false)} className={"cursor-pointer"} to={"courses"}>Courses</NavLink>
                </li>
                {/* <li className='font-bold text-mainColor md:text-base  hover:text-secondMainColor transition-all'>
                    <NavLink onClick={() => settoggleMenu(false)} className={"cursor-pointer"} to={"book"}>BookCourse</NavLink>
                </li> */}

                <li className='font-bold text-mainColor md:text-base  hover:text-secondMainColor transition-all'>
                    <NavLink onClick={() => settoggleMenu(false)} className={"cursor-pointer"} to={"book"}>Notifications</NavLink>
                </li>
            </ul>

            <ul className={`list-none  transition-all relative z-0  p-0 m-0 ${toggleMenu ? "flex gap-y-2" : "hidden"} sm:flex items-center flex-col sm:flex-row   h-full gap-x-6`}>
                <li className='font-bold text-mainColor md:text-base  hover:text-secondMainColor transition-all '>
                    <NavLink onClick={() => settoggleMenu(false)} className={"cursor-pointer"} to={"login"}>Login</NavLink>
                </li>
                <li className='font-bold text-mainColor md:text-base  hover:text-secondMainColor transition-all '>
                    <NavLink onClick={() => settoggleMenu(false)} className={"cursor-pointer"} to={"register"}>Register</NavLink>
                </li>
                <li className='font-bold text-mainColor md:text-base  hover:text-secondMainColor transition-all'>
                    Logout
                </li>
            </ul>
        </div>
    )
}

export default Navbar