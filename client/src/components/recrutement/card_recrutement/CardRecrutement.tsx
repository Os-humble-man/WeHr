import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// les icones
import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { TbDotsVertical } from "react-icons/tb";

interface ModalDeleteProps {
    OpenModalDelete: () => void;
    onUpdate: (recrutement: DataRecrutement) => void;
    SearchTerm: string;
}

interface DataRecrutement {
    id: number;
    description: string;
    department: string;
    contract: string;
    date: string;
}

function Cardrecrutement({ OpenModalDelete, SearchTerm, onUpdate }: ModalDeleteProps) {
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const Recrutement: DataRecrutement[] = [
        { id: 1, description: "Front-end Developer", department: "Développement", contract: "CDI", date: "12/01/2025" },
        { id: 2, description: "Back-end Developer", department: "Développement", contract: "CDI", date: "25/01/2025" },
        { id: 3, description: "UI/UX Designer", department: "Design", contract: "CDI", date: "28/01/2025" },
        { id: 4, description: "Technicien Réseau", department: "Réseaux", contract: "CDI", date: "04/02/2025" },
        { id: 5, description: "Hacker", department: "Cybersécurité", contract: "CDI", date: "10/02/2025" },
        { id: 6, description: "Front-end Developer", department: "Développement", contract: "CDI", date: "24/02/2025" },
        { id: 7, description: "Front-end Developer", department: "Développement", contract: "CDI", date: "01/03/2025" },
    ];

    const FilterOffre = Recrutement.filter((offre) =>
        [offre.description, offre.department, offre.contract].some((field) =>
            field.toLowerCase().includes(SearchTerm.toLowerCase())
        )
    );

    // Fermer le menu en cliquant en dehors
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenuId(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <tbody className="divide-y divide-gray-200">
                {FilterOffre.length > 0 ? (
                    FilterOffre.map((item, index:number) => (
                        <motion.tr 
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }} // Effet en cascade
                        >
                            <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 max-sm:px-2">{item.description}</td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 max-sm:hidden ">{item.department}</td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 max-sm:hidden">{item.contract}</td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 max-lg:hidden">{item.date}</td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 max-lg:hidden">{item.date}</td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 max-sm:px-2">
                                <button type="button" className="px-3 py-1 rounded-xl bg-[#FFEFE7] cursor-pointer text-red-400">
                                    Annuler
                                </button>
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 relative overflow-visible max-sm:text-end max-sm:px-2">
                                <button
                                    type="button"
                                    onClick={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
                                    className="px-1 py-3 rounded-lg hover:bg-green-400/15 cursor-pointer text-green-500"
                                >
                                    <TbDotsVertical size={20} />
                                </button>

                                {/* le menu */}
                                <AnimatePresence>
                                    {openMenuId === item.id && (
                                        <motion.div
                                            ref={menuRef}
                                            initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="absolute right-0 top-4 bg-white w-48 px-2 py-2 border border-gray-300 shadow-lg rounded-md z-10"
                                        >
                                            <ul className="text-gray-800">
                                                <li className="px-4 py-2 hover:bg-gray-100 hover:rounded-md flex items-center gap-2 cursor-pointer">
                                                    <GrView size={20} className="text-gray-600" /> View Details
                                                </li>
                                                <li 
                                                    onClick={() => onUpdate(item)}
                                                    className="px-4 py-2 hover:bg-gray-100 hover:rounded-md flex items-center gap-2 cursor-pointer"
                                                >
                                                    <CiEdit size={20} /> Edit Details
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        OpenModalDelete();
                                                        setOpenMenuId(null);
                                                    }}
                                                    className="px-4 py-2 hover:bg-red-100 hover:rounded-md text-red-500 flex items-center gap-2 cursor-pointer"
                                                >
                                                    <AiOutlineDelete size={20} /> Delete User
                                                </li>
                                            </ul>
                                        </motion.div>
                                    )}
                                </ AnimatePresence>
                            </td>
                        </motion.tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={6} className="text-center py-10 text-red-400">
                            Aucun Offre trouvé.
                        </td>
                    </tr>
                )}
            </tbody>
        </>
    );
}

export default Cardrecrutement;
