 import React from 'react'
 
 function Dashboard() {
   return (
     <>
        <section className=''>
          <div>
              <h1 className='text-3xl 2xl:text-5xl 2xl:mt-4'>Dashboard</h1>
          </div>
          <section className='pr-3 lg:flex lg:gap-4 lg:pr-0 mt-1 2xl:mt-4'>
            <div className='lg:w-[65%]'>

              {/* contener cards */}
              <div className='mb-3 sm:grid sm:grid-cols-3 sm:gap-3 md:w-auto md:grid md:grid-cols-3 md:gap-3'>
                {/* card 1 */}
                <div className='px-4 py-3 rounded-md bg-[#FFEFE7] mb-2 md:mb-0 2xl:px-10 2xl:py-5'>
                  <h1 className='text-xl 2xl:text-2xl'>Available Position</h1>

                  <div className='py-2 2xl:py-6'>
                    <h1 className='text-4xl 2xl:text-6xl'>24</h1>
                  </div>

                  <h1 className='text-red-500 2xl:text-2xl'>4 Agents </h1>
                </div>

                {/* card 2 */}
                <div className='px-4 py-3 rounded-md bg-blue-400/15 mb-2 md:mb-0 2xl:px-10 2xl:py-5'>
                  <h1 className='text-xl 2xl:text-2xl'>Available Position</h1>

                  <div className='py-2 2xl:py-6'>
                    <h1 className='text-4xl 2xl:text-6xl'>24</h1>
                  </div>

                  <h1 className='text-blue-500 2xl:text-2xl'>4 Agents </h1>
                </div>

                {/* card 3 */}
                <div className='px-4 py-3 rounded-md bg-orange-400/15 mb-2 md:mb-0 2xl:px-10 2xl:py-5'>
                  <h1 className='text-xl 2xl:text-2xl'>Available Position</h1>

                  <div className='py-2 2xl:py-6'>
                    <h1 className='text-4xl 2xl:text-6xl'>24</h1>
                  </div>

                  <h1 className='2xl:text-2xl'>4 Agents </h1>
                </div>
              </div>

              {/*  */}

              <div className='sm:grid sm:grid-cols-2 sm:gap-3 md:grid md:grid-cols-2 md:gap-3'>

                <div className='border rounded-md px-4 py-3 flex gap-2 mb-2 md:mb-0 2xl:px-10 2xl:py-5'>
                  <div>
                    <h1 className='text-xl font-semibold 2xl:text-2xl'>Total Employees </h1>

                    <div className='py-2 2xl:py-5'>
                      <h1 className='text-3xl font-bold 2xl:text-6xl'>216</h1>
                    </div>

                    <div className='2xl:text-2xl'>
                      <h1>20%</h1>
                      <h2>hjah</h2>
                    </div>
                  </div>

                  <div>
                    <h1>Analyse</h1>
                  </div>
                </div>

                <div className='border rounded-md px-4 py-3 flex gap-2 mb-2 md:mb-0 2xl:px-10 2xl:py-5 '>
                  <div>
                    <h1 className='text-xl font-semibold 2xl:text-2xl'>Total Employees </h1>

                    <div className='py-2 2xl:py-5'>
                      <h1 className='text-3xl font-bold 2xl:text-6xl'>216</h1>
                    </div>

                    <div className='2xl:text-2xl'>
                      <h1>20%</h1>
                      <h2>hjah</h2>
                    </div>
                  </div>

                  <div>
                    <h1>Analyse</h1>
                  </div>
                </div>
              </div>
            </div>
    
    
            {/* Partie de notifications */}
            <div className='mt-3 bg-yellow-200 lg:w-[35%] lg:mt-0'>
              <h1>Notification </h1>
            </div>
          </section>
        </section>
     </>
   )
 }
 
 export default Dashboard;
 