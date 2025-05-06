import { motion } from "framer-motion";
// icone
import { IoClose } from "react-icons/io5";
import { MdOpacity } from "react-icons/md";
import FromEmploye from "./FromEmploye";

interface ModalProps {
    handleCloseModal: ()=> void;
}
function ModalEmploye({handleCloseModal}: ModalProps) {
    return (
        <>
            <div className="absolute inset-0 bg-black/45 z-30 backdrop-blur-md">
                <div className="flex justify-center items-center h-screen px-4 sm:px-4 md:px-0">
                    <motion.div 
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeInOut"}}
                        className="px-8 py-4 bg-white rounded-md w-full sm:w-lvh"
                    >
                        <div className="flex items-center">
                            <div className="w-[50%]">
                                <h1> Modal User </h1>
                            </div>

                            <div className="w-[50%] flex justify-end">
                                <button 
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="cursor-pointer"
                                >
                                    < IoClose size={20} />
                                </button>
                            </div>
                        </div>

                        <div>
                            < FromEmploye />
                        </div>

                        
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default ModalEmploye;
