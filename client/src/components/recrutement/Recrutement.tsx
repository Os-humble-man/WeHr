import { useState } from "react";

// icone
import { CiSearch } from "react-icons/ci";
import { MdOutlineAdd } from "react-icons/md";

// composent
import FromRecrutement from "./FromRecrutement";
import Cardrecrutement from "./card_recrutement/CardRecrutement";
import ModalDelete from "./ModalDelete";


function Recrutement() {
  const [ismenu, setIsmenu] = useState(false); // open from
  const [isModalDelete, setIsModalDelete] = useState(false)


  //******************************** Open From ************************************
  const handleOpenFrom = ()=> {
    setIsmenu(true);
  }
  const handleCloseFrom = ()=> {
    setIsmenu(false);
  }

  // ****************************** OPEN MODAL DELETE ********************************
  const handleOpenModalDelete = ()=> {
    setIsModalDelete(true);
  }
  const handleCloseModalDelete = ()=> {
    setIsModalDelete(false);
  }
  return (
    <>
        <section>
          <div>
            <h1 className='text-2xl'>Recrutement</h1>
          </div>

          <div className="flex items-center">
            <div className="mt-1 w-[50%]">
              <div className='flex w-full'>
                <input 
                    type="search" 
                    name="" 
                    id=""
                    placeholder='Search'
                    className={`border-slate-300 border-2 md:border-r-0 py-2 w-full px-4 outline-none  focus:border-2 focus:border-r-0 
                    focus:outline-none rounded-md md:rounded-l-md md:rounded-r-none  md:w-64 lg:w-80 "block" : "hidden md:block"}`}
                />
                <button 
                    type="button"
                    className=' py-2 px-2 md:border-2 md:border-slate-300 md:border-l-0 md:rounded-r-md'
                >
                    < CiSearch />
                </button>
                    
              </div>
            </div>

            <div className="w-[50%] flex justify-end">
              <button
                onClick={handleOpenFrom}
                className="px-4 py-1.5 rounded-lg bg-green-400/80 text-white cursor-pointer flex items-center gap-1" 
                type="button"
              >
                < MdOutlineAdd size={25} />
                Add
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
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium   ">Description</th>
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium   ">Departement</th>
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium   ">Type de Contrat</th>
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium   ">Date</th>
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium   ">Delete</th>
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium   ">Update</th>
                      </tr>
                    </thead>
                      {
                        Array.from({length: 7}).map((item, index)=> {
                          return < Cardrecrutement OpenModalDelete={handleOpenModalDelete} key={index} />
                        })
                      }
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULAIRE  */}
        {
          ismenu && < FromRecrutement oncloseFrom={handleCloseFrom} />
        }

        {/*******************************  Modal Delete  ************************/}
        {
          isModalDelete && (
            < ModalDelete CloseModalDelete={handleCloseModalDelete}/>
          )
        }
    </>
  )
}

export default Recrutement
