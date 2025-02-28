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

  const OpenModalEmploye = ()=> {
    setModalEmploye(true);
  }

  const CloseModalEmploye = ()=> {
    setModalEmploye(false);
  }
  return (
    <>
      <div>
        <h1 className="text-2xl">Employer</h1>
      </div>

      <div className="flex items-center mt-2">
        <div className=" w-[50%]">
          <div>
            <h1>All Employe</h1>
          </div>
        </div>

        <div className="w-[50%] flex justify-end gap-2">
          <div className='flex'>
            <input 
                type="search" 
                name="" 
                id=""
                placeholder='Search'
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

      {/* table recruitment */}
      <div className="flex flex-col mt-2.5">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-slate-50">
                  <tr className="">
                    <th scope="col" className="px-6 py-3 text-start text-base font-medium   ">Employé Name</th>
                    <th scope="col" className="px-6 py-3 text-start text-base font-medium   ">Fonction</th>
                    <th scope="col" className="px-6 py-3 text-start text-base font-medium   ">Departement</th>
                    <th scope="col" className="px-6 py-3 text-start text-base font-medium   ">Type de Contrat</th>
                    <th scope="col" className="px-6 py-3 text-start text-base font-medium   ">Salaire</th>
                    <th scope="col" className="px-6 py-3 text-start text-base font-medium   ">Update</th>
                  </tr>
                </thead>
                  {
                    Array.from({length: 7}).map((item, index)=> {
                      return < Card_employer handleOpenModal={OpenModalEmploye} key={index} />
                    })
                  }
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
