import { FcHighPriority } from "react-icons/fc";
import { motion } from "framer-motion";

interface ModalDeleteProps {
    CloseModalDelete: () => void;
}
function ModalDelete({CloseModalDelete}: ModalDeleteProps) {
    return (
        <div className="absolute inset-0 bg-black/45 backdrop-blur-md z-30">
            <div className="flex justify-center items-center h-screen">
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{opacity: 1, y: 1, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-white px-4 py-2 rounded-lg"
                >
                    <div>
                        <div className="flex justify-center">
                            < FcHighPriority size={70} />
                        </div>
                        
                        <div className="md:w-96 md:block">
                            <h1 className="text-xl text-center py-4">Êtes-vous sûr de vouloir supprimer cette offre ?</h1>
                            <p className="text-center text-gray-400">
                                La suppression de cette offre est permanente et irréversible. Une fois supprimée, 
                                elle ne pourra pas être récupérée.
                            </p>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <button 
                                type="button"
                                onClick={CloseModalDelete}
                                className="border border-gray-400 font-medium cursor-pointer rounded-lg py-2 w-full"
                            >
                                Cancel
                            </button>

                            <button 
                                type="button"
                                className="bg-red-500 cursor-pointer font-medium text-white rounded-lg py-2 w-full"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ModalDelete
