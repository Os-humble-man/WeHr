import Annonce from "./Annonce";
import ChartEmploye from "./ChartEmploye";
import ChartTalent from "./ChartTalent";
import Notification from "./Notification";


function Dashboard() {

  return (
      <section >
        <div>
          <h1 className='text-2xl 2xl:text-5xl 2xl:mt-4'>Dashboard</h1>
        </div>
        <section className='pr-3 lg:flex lg:gap-4 lg:pr-0 mt-1 2xl:mt-4'>
          <div className='lg:w-[65%]'>

            {/* contener cards */}
            <div className='mb-3 sm:grid sm:grid-cols-3 sm:gap-3 md:w-auto md:grid md:grid-cols-3 md:gap-3'>
              {/* card 1 */}
              <div className='px-4 py-3 rounded-md bg-[#FFEFE7] mb-2 md:mb-0 2xl:px-10 2xl:py-5'>
                <h1 className='text-lg 2xl:text-2xl'>Available Position</h1>

                <div className='py-2 2xl:py-6'>
                  <h1 className='text-4xl 2xl:text-6xl'>24</h1>
                </div>

                <h1 className='text-red-500 2xl:text-2xl'>4 Agents </h1>
              </div>

              {/* card 2 */}
              <div className='px-4 py-3 rounded-md bg-blue-400/15 mb-2 md:mb-0 2xl:px-10 2xl:py-5'>
                <h1 className='text-lg 2xl:text-2xl'>Available Position</h1>

                <div className='py-2 2xl:py-6'>
                  <h1 className='text-4xl 2xl:text-6xl'>24</h1>
                </div>

                <h1 className='text-blue-500 2xl:text-2xl'>4 Agents </h1>
              </div>

              {/* card 3 */}
              <div className='px-4 py-3 rounded-md bg-[#FDEBF9] mb-2 md:mb-0 2xl:px-10 2xl:py-5'>
                <h1 className='text-lg 2xl:text-2xl'>Available Position</h1>

                <div className='py-2 2xl:py-6'>
                  <h1 className='text-4xl 2xl:text-6xl'>24</h1>
                </div>

                <h1 className='text-purple-700 2xl:text-2xl'>4 Agents </h1>
              </div>
            </div>
          

            {/*  */}
            <div className='sm:grid sm:grid-cols-2 sm:gap-3 md:grid md:grid-cols-2 md:gap-3'>

              <div className='border-slate-300 border rounded-md px-4 py-3 flex gap-2 mb-2 md:mb-0 2xl:px-10 2xl:py-5'>
                <div className="w-1/2">
                  <h1 className='text-lg  2xl:text-2xl'>Total Employees </h1>

                  <div className='py-4 2xl:py-5'>
                    <h1 className='text-5xl font-  2xl:text-6xl'>216</h1>
                  </div>

                  <div className='text-gray-500 text-xs 2xl:text-2xl'>
                    <h1>120 Men</h1>
                    <h2>96 Women</h2>
                  </div>
                </div>

                <div className="w-1/2">
                  <div className="">
                    <div className="h-32">
                      < ChartEmploye />
                      {/* chart */}
                    </div>
                    <div className="flex justify-end">
                      <span className="bg-red-200/50 px-3 py-1 rounded-md text-sm">
                        +2% Past Month
                      </span>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className='border-slate-300 border rounded-md px-4 py-3 flex gap-2 mb-2 md:mb-0 2xl:px-10 2xl:py-5 '>
                <div className="w-1/2">
                  <h1 className='text-lg  2xl:text-2xl'>Talent Request </h1>

                  <div className='py-4 2xl:py-5'>
                    <h1 className='text-5xl flex-wrap 2xl:text-6xl'>16</h1>
                  </div>

                  <div className='text-gray-500 text-xs 2xl:text-2xl'>
                    <h1>6 Men</h1>
                    <h2>10 Women</h2>
                  </div>
                </div>

                <div className="w-1/2 ">
                  <div className="">
                    <div className="h-32">
                      < ChartTalent />
                      {/* chart */}
                    </div>
                    <div className="flex justify-end">
                      <span className="bg-red-200/50 px-3 py-1 rounded-md text-sm">
                        +5% Past Month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          

            {/* Partie Annonce */}
            <div className="mt-4 border-slate-300 border rounded-xl">
                < Annonce />
            </div>
          </div>

        {/* Partie de notifications */}
        <div className='mt-3 lg:w-[35%] md:flex md:gap-2 lg:block lg:mt-0'>
          < Notification />
        </div>
      </section>
    </section>
  )
}

export default Dashboard;
