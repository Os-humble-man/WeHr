import {useState} from 'react'

// Les icones
import { IoIosNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { HiOutlineChevronDown } from "react-icons/hi";
import { TbMenu2 } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

interface ToggleProps {
    onToggleMenu : ()=> void;
}

function Navbar({onToggleMenu} : ToggleProps) {
    const [ActiveImputSearch, setActiveImputSearch] = useState(false);
    // const [test, settest] = useState();
    // const testclick = ()=> {
    //     settest(
    //         alert("Bonjour ca passe")
    //     );
    // };

    const handleActiveimput = () => {
        setActiveImputSearch(!ActiveImputSearch);
    }
    
    return (
    <>
        <div className='py-1 flex items-center'>
            <div className='w-[60%]  md:w-1/2 flex items-center'>
                {/* Le menu hemberger de md et sm */}
                <div>
                    {/* md: none */}
                    <button 
                        type="button"
                        className='md:hidden mr-2'
                        onClick={onToggleMenu}
                    >
                        < TbMenu2 size={25} />
                    </button>
                    
                    {/* md: block */}
                    <button 
                        type="button"
                        className='hidden mr-2 md:block lg:hidden'
                    >
                        < TbMenu2 size={25} />
                    </button>    
                </div>
                
                <div className='flex w-full'>
                    {(ActiveImputSearch || window.innerWidth >= 425) && (
                        <input 
                            type="search" 
                            name="" 
                            id=""
                            placeholder='Search'
                            className={`border-slate-300 border md:border-r-0 py-1 w-full px-4 outline-none  focus:border focus:border-r-0 
                                focus:outline-none rounded-md md:rounded-l-md md:rounded-r-none bg-slate-50 md:w-64 lg:w-80 ${ActiveImputSearch ? "block" : "hidden md:block"}`}
                        />
                    )}
                    <button 
                        type="button"
                        onClick={() => handleActiveimput() }
                        className='md:bg-slate-50 py-2 px-2 md:border md:border-slate-300 md:border-l-0 md:rounded-r-md'
                    >
                        < CiSearch />
                    </button>
                    
                </div>
            </div>

            <div className='w-[40%] md:w-1/2 flex justify-end pr-4 md:pr-10'>
                <div className='flex items-center'>
                    <IoIosNotifications 
                        size={20} 
                        className='text-gray-400 mx-1 md:mx-3'
                    />
                    <RiMessage2Fill
                        size={20} 
                        className='text-gray-400 mx-1 md:mx-3'
                    />
                </div>

                <div className='flex items-center'>
                    <div>
                        <img 
                            src="/src/assets/img/avatar.png" 
                            alt="Picture user" 
                            className='h-9 w-9 md:h-11 md:w-11 rounded-full lg:h-14 lg:w-14'
                        />
                    </div>
                    <div className='flex items-center'>
                        <h1 className='px-2 hidden lg:block'>Maurice Miema</h1>
                        <HiOutlineChevronDown size={20} />
                    </div>
                </div>
            </div>
        </div>
        <hr className='border-slate-300 border' />
    </>
    
    )
}

export default Navbar
