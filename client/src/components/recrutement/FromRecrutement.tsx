import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface FromProps {
    oncloseFrom: () => void;
    recrutement: DataRecrutement | null;
}

interface DataRecrutement {
    id: number;
    description: string;
    department: string;
    contract: string;
    date: string;
}

const FromRecrutement = ({ oncloseFrom, recrutement }: FromProps) => {
    const [formData, setFormData] = useState<DataRecrutement | null>(null);

    useEffect(() => {
        if (recrutement) {
            setFormData(recrutement);
        } else {
            setFormData({
                id: 0,
                description: '',
                department: '',
                contract: '',
                date: ''
            });
        }
    }, [recrutement]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (!formData) return;
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Données soumises :", formData);
        oncloseFrom();
    };

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
                        <form className="md:p-4" onSubmit={handleSubmit}>
                            <div className="text-xl flex items-center w-full">
                                <div className="w-[50%]">
                                    <h1 className="text-base">Formulaire de Recrutement</h1>
                                </div>
                                <div className="flex justify-end w-[50%]">
                                    <button type="button" onClick={oncloseFrom} className="text-xl cursor-pointer">
                                        <IoClose />
                                    </button>
                                </div>
                            </div>

                            {/* Titre Post */}
                            <div className="mt-4 mb-2">
                                <label className="block" htmlFor="description">Titre Post</label>
                                <input
                                    type="text"
                                    value={formData?.description || ""}
                                    onChange={handleChange}
                                    id="description"
                                    name="description"
                                    placeholder=""
                                    className="w-full border border-gray-400 rounded-md py-2 px-4 focus:outline-gray-400 md:w-96"
                                />
                            </div>

                            {/* Département */}
                            <div className="mt-4 mb-2">
                                <label className="block" htmlFor="department">Département</label>
                                <select
                                    name="department"
                                    id="department"
                                    value={formData?.department || ""}
                                    onChange={handleChange}
                                    className="w-full border border-gray-400 focus:outline-gray-400 rounded-md py-2 px-4 md:w-96"
                                >
                                    <option value="">Choisissez Le Département</option>
                                    <option value="Développement">Développement</option>
                                    <option value="Support Utilisateur">Support Utilisateur</option>
                                    <option value="Réseau">Réseau</option>
                                    <option value="Réseau">Design</option>
                                    <option value="Cybersécurité">Cybersécurité</option>
                                </select>
                            </div>

                            {/* Type de Contrat */}
                            <div className="mt-4 mb-2">
                                <label className="block" htmlFor="contract">Type de Contrat</label>
                                <select
                                    name="contract"
                                    id="contract"
                                    value={formData?.contract || ""}
                                    onChange={handleChange}
                                    className="w-full border border-gray-400 focus:outline-gray-400 rounded-md py-2 px-4 md:w-96"
                                >
                                    <option value="">Choisissez Le Type de Contrat</option>
                                    <option value="CDI">CDI</option>
                                    <option value="CDD">CDD</option>
                                </select>
                            </div>

                            {/* Date du Post */}
                            <div className="mt-4 mb-2">
                                <label className="block" htmlFor="date">Date du Post</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData?.date || ""}
                                    onChange={handleChange}
                                    className="w-full border border-gray-400 focus:outline-gray-400 rounded-md py-2 px-4 md:w-96"
                                />
                            </div>

                            {/* Bouton Submit */}
                            <div className="mt-4 flex justify-end w-full">
                                <button
                                    type="submit"
                                    className="bg-green-400 text-white px-4 py-2 rounded-lg cursor-pointer"
                                >
                                    {recrutement ? "Mettre à jour" : "Ajouter"}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default FromRecrutement;
