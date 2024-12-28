/** @format */

import { HiOutlineDotsHorizontal } from "react-icons/hi";

function Notification() {
  return (
    <>
      <div className="md:w-[40%] lg:w-auto">
        <div className="bg-[#1B204A] px-6 py-2 rounded-t-2xl">
          <h1 className="text-2xl text-white">Recently Activity</h1>
        </div>
        <div className="px-6 py-4 rounded-b-2xl bg-[#161E54]">
          <div className="pb-2">
            <h1 className="text-gray-300 font-medium">10.40 AM, Fri 10 Sept 2021</h1>

            <h1 className="py-3 text-2xl text-white font-semibold">
              You Posted a New Job{" "}
            </h1>
            <p className="text-gray-300 text-base">
              {" "}
              Kindly check the requirements and terms of work and make sure everythingd
              is right
            </p>
          </div>

          <div className="flex items-center mt-4">
            <div className="w-1/2">
              <h1 className="text-white">Today you makes 12 Activity</h1>
            </div>

            <div className="w-1/2 flex justify-end">
              <button
                type="button"
                className="px-4 py-2 rounded-md text-lg text-white bg-red-500"
              >
                See All Activity
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* not */}
      <div className="md:w-[60%] lg:w-auto">
        <div className="border mt-2 rounded-lg">
          <div className="px-4 py-2">
            <div>
              <h1 className="text-xl">Upcoming Schedule</h1>
            </div>

            <div className=" h-72 overflow-auto scrollbar-none ">
              <div>
                <div className="py-2">
                  <h1 className="text-sm text-gray-600">Proprity</h1>
                </div>
                <div className="px-5 py-2 border bg-slate-50 rounded-md flex items-center mb-2">
                  <div className="w-[80%] ">
                    <h1 className="text-base">Review candidate applications</h1>
                    <h5 className="text-sm text-gray-500">Todays - 11.30 AM</h5>
                  </div>
                  <div className="w-[20%] flex justify-end items-center">
                    <button type="button">
                      <HiOutlineDotsHorizontal size={30} />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="py-2">
                  <h1 className="text-sm text-gray-600">Other</h1>
                </div>
                {/* 1 */}
                <div className="px-5 py-2 border bg-slate-50 rounded-md flex items-center mb-2">
                  <div className="w-[80%] ">
                    <h1 className="text-base">Review candidate applications</h1>
                    <h5 className="text-sm text-gray-500">Todays - 11.30 AM</h5>
                  </div>
                  <div className="w-[20%] flex justify-end items-center">
                    <button type="button">
                      <HiOutlineDotsHorizontal size={30} />
                    </button>
                  </div>
                </div>

                {/* 2 */}

                <div className="px-5 py-2 border bg-slate-50 rounded-md flex items-center mb-2">
                  <div className="w-[80%] ">
                    <h1 className="text-base">Review candidate applications</h1>
                    <h5 className="text-sm text-gray-500">Todays - 11.30 AM</h5>
                  </div>
                  <div className="w-[20%] flex justify-end items-center">
                    <button type="button">
                      <HiOutlineDotsHorizontal size={30} />
                    </button>
                  </div>
                </div>

                {/* 3 */}

                <div className="px-5 py-2 border bg-slate-50 rounded-md flex items-center mb-2">
                  <div className="w-[80%] ">
                    <h1 className="text-base">Review candidate applications</h1>
                    <h5 className="text-sm text-gray-500">Todays - 11.30 AM</h5>
                  </div>
                  <div className="w-[20%] flex justify-end items-center">
                    <button type="button">
                      <HiOutlineDotsHorizontal size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="py-1 flex justify-center">
            <button type="button" className="text-red-400">
              Create a New Schedule
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
