interface PropsModal {
    handleOpenModal: () => void;
}

function Card_employer({handleOpenModal}: PropsModal) {
    return (
        <>
            <tbody className="divide-y divide-gray-200">
                <tr 
                    className="cursor-pointer"
                >
                    <td className="px-6 py-2 flex items-center whitespace-nowrap text-sm font-medium text-gray-800 ">
                        <div>
                            <img 
                                src="/src/assets/img/avatar.png" 
                                alt="picture employe"
                                className='size-12 rounded-full'
                            />
                        </div>
                        Maurice Miema
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 ">Dev web Front-end</td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 ">Developpement</td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 ">CDI</td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 ">2000 $</td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 ">
                        <button 
                            type="button" 
                            onClick={handleOpenModal}
                            className="px-3 py-2 rounded-lg bg-green-400/15 cursor-pointer text-green-500"
                        >
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default Card_employer;
