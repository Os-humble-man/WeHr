import { motion } from "framer-motion";
import { useEffect } from "react";

interface PropsModal {
    handleOpenModal: () => void;
    searchTerm: string;
    updateEmployeeCount: (count: number) => void;
}

interface Employee {
    id: number;
    nameUser: string;
    avatar: string;
    job: string;
    department: string;
    contract: string;
    gender: string;
    salary: string;
}

function Card_employer({handleOpenModal, searchTerm, updateEmployeeCount}: PropsModal) {


    const employees: Employee[] = [
        { id: 1, nameUser: "Oscar Kanangila", avatar: "/src/assets/img/oscar.jpeg", job: "Full-Stack Developer", department: "Développement", contract: "CDI", gender: "M", salary: "2500 $" },
        { id: 2, nameUser: "Maurice Miema", avatar: "/src/assets/img/avatar.png", job: "Front-end Developer", department: "Développement", contract: "CDI", gender: "M", salary: "2000 $" },
        { id: 3, nameUser: "Jacques Milenge", avatar: "/src/assets/img/jacques.jpeg", job: "UI/UX Designer", department: "Design", contract: "CDD", gender: "M", salary: "1800 $" },
        { id: 4, nameUser: "Roger Mbakama", avatar: "/src/assets/img/roger.jpeg", job: "Technicien Réseau", department: "Réseaux", contract: "CDI", gender: "M", salary: "2200 $" },
    ];

    //  Filtrer les employés
    const filteredEmployees = employees.filter((employee) => 
        [employee.nameUser, employee.job, employee.contract].some((field) => 
            field.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    useEffect(()=> {
        updateEmployeeCount(employees.length);
    },[updateEmployeeCount]);

    return (
        <>
            <tbody className="divide-y divide-gray-200">
                {filteredEmployees.length > 0 ? ( 
                    filteredEmployees.map((item, index) => (
                        <motion.tr 
                            className="cursor-pointer"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <td className="px-1 py-2 flex items-center gap-2 whitespace-nowrap text-sm font-medium text-gray-800 md:px-6 ">
                                <div className="size-12">
                                    <img 
                                        src={item.avatar}
                                        alt="picture employe"
                                        className='size-12 rounded-full'
                                    />
                                </div>
                                {item.nameUser}
                            </td>
                            <td className="px-1 py-2 whitespace-nowrap text-sm font-medium text-gray-800 md:px-6 max-sm:hidden "> {item.job} </td>
                            <td className="px-1 py-2 whitespace-nowrap text-sm font-medium text-gray-800 md:px-6 max-lg:hidden "> {item.department} </td>
                            <td className="px-1 py-2 whitespace-nowrap text-sm font-medium text-gray-800 md:px-6 max-lg:hidden "> {item.contract} </td>
                            <td className="px-1 py-2 whitespace-nowrap text-sm font-medium text-gray-800 md:px-6 "> {item.gender} </td>
                            <td className="px-1 py-2 whitespace-nowrap text-sm font-medium text-gray-800 md:px-6 max-lg:hidden "> {item.salary} </td>
                            <td className="px-1 py-2 whitespace-nowrap text-sm font-medium text-gray-800 md:px-6 ">
                                <button 
                                    type="button"
                                    onClick={handleOpenModal}
                                    className="px-3 py-1 rounded-lg bg-green-400/15 cursor-pointer text-green-500"
                                >
                                    Update
                                </button>

                            </td>
                        </motion.tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={7} className="text-center py-10 text-red-400">
                            Aucun employé trouvé.
                        </td>
                    </tr>
                )
            }
            </tbody>

            
        </>
    )
}

export default Card_employer;
