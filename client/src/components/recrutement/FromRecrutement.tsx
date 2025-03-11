// les icones
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

interface FromProps {
    oncloseFrom: ()=> void;
}

const FromRecrutement = ({oncloseFrom}:FromProps) => {
    return (
        <AnimatePresence>
            <div className="absolute inset-0 bg-black/45 backdrop-blur-md z-30">
                <div className="flex justify-center items-center h-screen">
                    
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="bg-white px-4 py-2 rounded-lg"
                    >
                        <form className="md:p-4">
                            <div className="text-xl flex items-center w-full">
                                <div className="w-[50%]">
                                    <h1 className="text-base">Formulaire de Recrutement</h1>
                                </div>
                                <div className="flex justify-end w-[50%]">
                                    <button type="button"
                                        onClick={oncloseFrom}
                                        className="text-xl cursor-pointer"
                                    >
                                        <IoClose />
                                    </button>
                                </div>
                            </div>

                            {/* item */}
                            <div className="mt-4 mb-2">
                                <label className="block" htmlFor="desccription">Titre Post</label>
                                <input type="text" id="desccription" 
                                    placeholder="" 
                                    className="w-full border border-gray-400 rounded-md py-2 px-4  focus:outline-gray-400 md:w-96" 
                                />
                            </div>
                            {/* end item */}

                            {/* item */}
                            <div className="mt-4 mb-2">
                                <label className="block" htmlFor="departement">Departement</label>
                                <select 
                                    name="" 
                                    id="departement"
                                    className="w-full border border-gray-400 focus:outline-gray-400 rounded-md py-2 px-4 md:w-96"
                                >
                                    <option selected>Choisisez Le Departement</option>
                                    <option value="">Developpemt</option>
                                    <option value="">Support Utilisateur</option>
                                    <option value="">Reseau</option>
                                    <option value="">CyberSecuryte</option>
                                </select>
                            </div>
                            {/* end item */}

                            {/* item */}
                            <div className="mt-4 mb-2">
                                <label className="block" htmlFor="departement">Type De Contrat</label>
                                <select 
                                    name="" 
                                    id="departement"
                                    className="w-full border border-gray-400 focus:outline-gray-400 rounded-md py-2 px-4 md:w-96"
                                >
                                    <option value="">Choisisez Le Type de Contrat</option>
                                    <option value="">CDI</option>
                                    <option value="">CDD</option>
                                </select>
                            </div>
                            {/* end item */}

                            {/* item */}
                            <div className="mt-4 mb-2">
                                <label className="block" htmlFor="desccription">Date du Post</label>
                                <input type="date" id="desccription" 
                                    placeholder="" 
                                    className="w-full border border-gray-400 focus:outline-gray-400 rounded-md py-2 px-4 md:w-96" 
                                />
                            </div>
                            {/* end item */}

                            {/* item Btn */}
                            <div className="mt-4 flex justify-end w-full">
                                <button 
                                    type="button"
                                    className="bg-green-400 text-white px-4 py-2 rounded-lg cursor-pointer"
                                >
                                    Envoyer
                                </button>
                            </div>
                            {/* end item btn */}
                        </form>
                    </motion.div>
                    
                </div>
            </div>
        </ AnimatePresence>
    )
}

export default FromRecrutement;
