import { useState } from "react";
// icone
import { CiSearch } from "react-icons/ci";
import { MdOutlineAdd } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";

// composent
import Card_employer from "./Card_employer";
import ModalEmploye from "./ModalEmploye";

function Employe() {
  const [IsModdalEmploye, setModalEmploye] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // pour la recherche 
  const [employeeCount, setEmployeeCount] = useState<number>(0); // pour le nombre des employees

  const OpenModalEmploye = ()=> {
    setModalEmploye(true);
  }

  const CloseModalEmploye = ()=> {
    setModalEmploye(false);
  }

  // le nombre des employees 
  const updateEmployeeCount = (count: number) => {
    setEmployeeCount(count);
  };
  return (
    <>
      <div>
        <h1 className="text-2xl">Employée</h1>
      </div>

      <div className="flex items-center mt-2">
        <div className=" w-[50%]">
          <div className="flex gap-4">
            <h1>All Employée</h1>
            <h1 className="text-gray-400"> {employeeCount} </h1>
          </div>
        </div>
        
        <div className="w-[50%] flex justify-end gap-2">
          {/* input search md  */}
          <div className='md:flex hidden '>
            <input 
                type="search"
                name="" 
                id=""
                placeholder='Search'
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                className={`border-slate-300 border md:border-r-0 py-1 w-full px-4 outline-none  focus:border focus:border-r-0 
                focus:outline-none rounded-md md:rounded-l-md md:rounded-r-none  md:w-64 lg:w-80 "block" : "hidden md:block"}`}
            />
            <button 
                type="button"
                className=' py-2 px-2 md:border md:border-slate-300 md:border-l-0 md:rounded-r-md'
            >
                < CiSearch />
            </button>
          </div>

          <button
            // onClick={handleOpenFrom}
            className="px-2 py-1 rounded-lg border border-slate-300 cursor-pointer flex items-center gap-1" 
            type="button"
          >
            < IoFilterOutline size={25} />
            Filters
          </button>

          <button
            // onClick={handleOpenFrom}
            className="px-4 py-1 rounded-lg bg-green-400/80 text-white cursor-pointer flex items-center gap-1" 
            type="button"
          >
            < MdOutlineAdd size={25} />
            New
          </button>
        </div>
      </div>

      {/* input search   */}
      <div className='flex mt-2 md:hidden'>
        <input 
            type="search" 
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-slate-300 border border-r-0 py-2 w-full px-4 outline-none rounded-r-none  focus:border focus:border-r-0 focus:outline-none rounded-md"
        />
        <button 
            type="button"
            className='py-2 px-2 border-slate-300 border border-l-0 rounded-md rounded-l-none'
        >
            < CiSearch />
        </button>
      </div>

      {/* table recruitment */}
      <div className="flex flex-col mt-2.5">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-slate-50">
                  <tr className="">
                    <th scope="col" className="px-2 py-3 text-start text-base font-medium md:px-6   ">Employé Name</th>
                    <th scope="col" className="px-2 py-3 text-start text-base font-medium md:px-6 max-sm:hidden ">Fonction</th>
                    <th scope="col" className="px-2 py-3 text-start text-base font-medium md:px-6 max-lg:hidden ">Departement</th>
                    <th scope="col" className="px-2 py-3 text-start text-base font-medium md:px-6 max-lg:hidden ">Type de Contrat</th>
                    <th scope="col" className="px-2 py-3 text-start text-base font-medium md:px-6  ">Sexe</th>
                    <th scope="col" className="px-2 py-3 text-start text-base font-medium md:px-6 max-lg:hidden">Salaire</th>
                    <th scope="col" className="px-2 py-3 text-start text-base font-medium md:px-6  ">Actions</th>
                  </tr>
                </thead>

                < Card_employer handleOpenModal={OpenModalEmploye} searchTerm={searchTerm} updateEmployeeCount={updateEmployeeCount} />

              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Employee */}
      
      {IsModdalEmploye && (
        < ModalEmploye handleCloseModal={CloseModalEmploye} />
      )}
    </>
  );
}

export default Employe;
