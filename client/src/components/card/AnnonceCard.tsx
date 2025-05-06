import { AiOutlinePushpin } from 'react-icons/ai'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'



export default function AnnonceCard(){
  return (
    <div className="px-5 py-2 border-slate-300 border bg-slate-50 rounded-md flex items-center mb-2">
      <div className="w-[80%] ">
        <h1 className="text-lg">Outing Schedule for every departement</h1>
        <h5 className="text-sm text-gray-500">5 minutes ago</h5>
      </div>
      <div className="w-[20%] flex justify-end items-center">
        <button type="button">
          <AiOutlinePushpin size={30} className="mx-1" />
        </button>
        <button type="button">
          <HiOutlineDotsHorizontal size={30} />
        </button>
      </div>
    </div>
  )
}
