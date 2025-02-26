interface ModalDeleteProps {
    OpenModalDelete: ()=> void;
}

function Cardrecrutement({OpenModalDelete}: ModalDeleteProps) {
    return (
        <>
            <tbody className="divide-y divide-gray-200">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">Dev web Front-end</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">Developpement</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">CDI</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">10/20/2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                        <button 
                            type="button"
                            onClick={OpenModalDelete}
                            className="px-3 py-1 rounded-xl bg-[#FFEFE7] cursor-pointer text-red-400"
                        >
                            Delete
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                        <button type="button" className="px-3 py-1 rounded-lg bg-green-400/15 cursor-pointer text-green-500">Update</button>
                    </td>
                </tr>
            </tbody>

        </>
    )
}

export default Cardrecrutement;
