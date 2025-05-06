/** @format */

import AnnonceCard from "../card/AnnonceCard";

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
          {
            Array.from({length:5}).map((item,index)=>{
              return <AnnonceCard key={index}/>
            })
          }
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
