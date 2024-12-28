/** @format */

// les icones
import { AiOutlinePushpin } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function Annonce() {
  return (
    <>
      <div className="px-4 py-2 md:px-8 md:py-2">
        <div className="flex">
          <div className="w-1/2">
            <h1 className="text-xl">Announcement</h1>
          </div>
          <div className="w-1/2 flex justify-end">
            {/* <input type="time" name="" id="" /> */}
          </div>
        </div>

        <div className="h-56 overflow-auto lg:h-64 lg:scrollbar-none  ">
          {/* 1 */}
          <div className="px-5 py-2 border bg-slate-50 rounded-md flex items-center mb-2">
            <div className="w-[80%] ">
              <h1 className="text-xl">Outing Schedule for every departement</h1>
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

          {/* 2 */}

          <div className="px-5 py-2 border bg-slate-50 rounded-md flex items-center mb-2">
            <div className="w-[80%] ">
              <h1 className="text-xl">Outing Schedule for every departement</h1>
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

          {/* 3 */}

          <div className="px-5 py-2 border bg-slate-50 rounded-md flex items-center mb-2">
            <div className="w-[80%] ">
              <h1 className="text-xl">Outing Schedule for every departement</h1>
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

          {/* 4 */}

          <div className="px-5 py-2 border bg-slate-50 rounded-md flex items-center mb-2">
            <div className="w-[80%] ">
              <h1 className="text-xl">Outing Schedule for every departement</h1>
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
        </div>
      </div>
      <hr />
      <div className="py-1 flex justify-center">
        <button type="button" className="text-red-400">
          See All Annoucement
        </button>
      </div>
      <div />
    </>
  );
}

export default Annonce;
