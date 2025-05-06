import { useState } from "react";
// icone
import { CiSearch } from "react-icons/ci";
import { MdOutlineAdd } from "react-icons/md";
// composent
import FromRecrutement from "./FromRecrutement";
import Cardrecrutement from "./card_recrutement/CardRecrutement";
import ModalDelete from "./ModalDelete";

interface DataRecrutement {
  id: number;
  description: string;
  department: string;
  contract: string;
  date: string;
}

function Recrutement() {
  const [ismenu, setIsmenu] = useState(false); // open from
  const [isModalDelete, setIsModalDelete] = useState(false); // open Modalelete
  const [SearchTerm, setSearchTerm] = useState(""); // Search item for recrutment
  const [selectedRecrutement, setSelectedRecrutement] = useState<DataRecrutement | null>(null);


  //******************************** Open From ************************************
  const handleOpenFrom = ()=> {
    setSelectedRecrutement(null);
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

  // **************************** Upadate offre ****************************************
  const handleUpdateOffre = (recrutement: DataRecrutement) => {
    setSelectedRecrutement(recrutement);
    setIsmenu(true);
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
                    value={SearchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                    placeholder='Search'
                    className={`border-slate-300 border-2 md:border-r-0 py-1 w-full px-4 outline-none  focus:border-2 focus:border-r-0 
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
            <div className="-m-1.5 overflow-x-auto overflow-visible">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border border-gray-200 rounded-lg h-[70vh] overflow-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-slate-50">
                      <tr className="">
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium max-sm:px-2 ">Description</th>
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium max-sm:hidden ">Departement</th>
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium max-sm:hidden  ">Type de Contrat</th>
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium max-lg:hidden">Date Debut</th>
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium max-lg:hidden">Date Fin</th>
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium max-sm:px-2 ">Statut</th>
                        <th scope="col" className="px-6 py-3 text-start text-base font-medium max-sm:px-2 "> Action </th>
                      </tr>
                    </thead>

                    < Cardrecrutement OpenModalDelete={handleOpenModalDelete} SearchTerm={SearchTerm} onUpdate={handleUpdateOffre}/>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULAIRE  */}
        {
          ismenu && < FromRecrutement recrutement={selectedRecrutement} oncloseFrom={handleCloseFrom} />
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
