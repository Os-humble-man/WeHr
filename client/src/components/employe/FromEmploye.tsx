
function FromEmploye() {
    return (
        <>
            <div className="mt-2">
                <h1>Formulaire </h1>
            </div>

            <div className="flex mt-5">
                <div className="w-[50%]">
                    <button 
                        type="button"
                        className="border border-stone-300 px-5 py-2 cursor-pointer rounded-lg"
                    >
                        Cancel
                    </button>
                </div>

                <div className="w-[50%] flex justify-end">
                    <button 
                        type="button"
                        className="border border-stone-300 px-8 py-2 rounded-lg bg-green-500 cursor-pointer text-white "
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default FromEmploye
