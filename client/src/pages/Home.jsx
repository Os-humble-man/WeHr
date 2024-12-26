import React, { useState} from 'react'
import { Link, Outlet, useLocation } from 'react-router';

// les icones
import { MdDashboard } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


// le compoesent 
import Navbar from '../components/Navbar';

function Home() {
    const Location = useLocation();
    const isActive = (pash) => (Location.pathname === pash ? "text-red-500" : "text-gray-600");

    // Pour controler le Menu de petit ecran
    const [MenuOpen, setMenuOpen] = useState(false);
    const handleCloseMenu = () =>{
        setMenuOpen(false);
    }
  return (
    <>
        <section className='font-RobotoP md:flex'>
            {/* la partie de menu */}
            <div className={`bg-slate-50 fixed inset-0 h-screen overflow-auto px-4 py-2 border-r-2 md:static  lg:w-64
                ${MenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:static md:translate-x-0`}
            >
                <div>
                    <div className='py-4 flex items-center lg:flex-none'>
                        <h1 className='text-4xl md:flex-none lg:flex lg:justify-center'>
                            WeHr
                        </h1>

                        {/* Btn close menu for small screen */}
                        <div className='flex justify-end w-full md:hidden'>
                            <button 
                                type="button"
                                onClick={handleCloseMenu}
                                className='flex justify-end'
                            >
                                <IoMdClose size={30} />
                            </button>
                        </div>
                    </div>
                    <div className='mt-5 md:mt-5 lg:mt-8'>
                        <div>
                            <h1 className='ml-4 text-gray-400 text-xs md:ml-0'>MAIN MENU</h1>
                        </div>
                        <ul className='mt-4 lg:w-auto'>
                            <li>
                                <Link 
                                    to="/Home"
                                    className={`flex items-center cursor-pointer mb-5 ${isActive("/Home")}`}
                                    onClick={handleCloseMenu}
                                >
                                    <MdDashboard size={25} className='mx-4' />
                                    <button 
                                        type="button"
                                        className='text-lg md:hidden lg:block'
                                    >
                                        Dashboard
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    to="/Home/Recrutement"
                                    className={`flex items-center cursor-pointer mb-5 ${isActive("/Home/Recrutement")}`}
                                    onClick={handleCloseMenu}
                                >
                                    <FaUserPlus size={25} className='mx-4' />
                                    <button
                                        type="button"
                                        className='text-lg md:hidden lg:block'
                                    >
                                            Recrutement
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    to="/Home/Schedule"
                                    className={`flex items-center cursor-pointer mb-5 ${isActive("/Home/Schedule")}`}
                                    onClick={handleCloseMenu}
                                >
                                    <BiSolidCalendarEvent size={25} className='mx-4' />
                                    <button 
                                        type="button"
                                        className='text-lg md:hidden lg:block'
                                    >
                                        Schedule
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/Home/Employe"
                                    onClick={handleCloseMenu}
                                    className={`flex items-center cursor-pointer mb-5 ${isActive("/Home/Employe")}`}
                                >
                                    <MdGroups size={25} className='mx-4' />
                                    <button 
                                            type="button"
                                            className='text-lg md:hidden lg:block'
                                        >
                                            Employée
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    to="/Home/Departement"
                                    onClick={handleCloseMenu}
                                    className={`flex items-center cursor-pointer mb-5 ${isActive("/Home/Departement")}`}
                                >
                                    <FaUserCog size={25} className='mx-4' />
                                    <button 
                                            type="button"
                                            className='text-lg md:hidden lg:block'
                                        >
                                            Departement
                                    </button>
                                </Link>
                            </li>

                            <div className='mt-16 mb-5'>
                                <h1 className='ml-4 text-gray-400 text-xs md:ml-1'>OTHER</h1>
                            </div>

                            <li className='flex items-center cursor-pointer mb-5 text-gray-700'>
                                <BiSupport size={25} className='mx-4' />
                               <button 
                                    type="button"
                                    className='text-lg md:hidden lg:block'
                                >
                                    Support
                               </button>
                            </li>

                            <li className='flex items-center cursor-pointer mb-5 text-gray-700'>
                                <IoMdSettings size={25} className='mx-4' />
                               <button 
                                    type="button"
                                    className='text-lg md:hidden lg:block'
                                >
                                    Settings
                               </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            

            {/* le partie qui contient le dashbord, le setting, et le reste */}
            <div className='bg-white h-screen pl-2 overflow-auto w-full lg:pl-8'>
                {/*  La navbar*/}
                <nav>
                    < Navbar onToggleMenu={() => setMenuOpen((prev) => !prev)} />
                </nav>
                

                {/* Contenu */}
                <div className='h-[90vh] overflow-auto scrollbar-none lg:pr-10 pt-3'>
                    < Outlet />
                </div>
            </div>
        </section>
    </>
  )
}

export default Home;
