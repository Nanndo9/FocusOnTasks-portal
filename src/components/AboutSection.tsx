import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section id="sobre" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre nós</h2>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-purple-400">Minha história</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Olá! Sou o desenvolvedor por trás do FocusOnTasks. Como alguém neurodivergente,
                            sempre lutei para encontrar ferramentas de organização que realmente funcionassem para o meu cérebro.
                            As plataformas existentes pareciam sempre muito confusas, com excesso de funcionalidades
                            e interfaces que mais distraíam do que ajudavam.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Frustrado com as opções disponíveis, decidi criar algo inicialmente só para mim —
                            uma ferramenta que fosse intuitiva, visual e que me ajudasse a manter o foco no que realmente
                            importa. Algo que trabalhasse <em>com</em> meu cérebro, não contra ele.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Ao ver como isso transformou minha produtividade, percebi que outras pessoas poderiam se
                            beneficiar também. É assim que nasce o FocusOnTasks — da necessidade real de alguém que
                            entende os desafios de manter o foco e a organização no dia a dia.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                        >
                            <h3 className="text-xl font-semibold mb-3 text-purple-400">Minha missão</h3>
                            <p className="text-gray-300">
                                Criar ferramentas que realmente funcionem para pessoas com cérebros diversos,
                                especialmente pessoas neurodivergentes. Acredito que a tecnologia deve se adaptar às pessoas, não o contrário.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                        >
                            <h3 className="text-xl font-semibold mb-3 text-purple-400">Meus valores</h3>
                            <motion.ul className="text-gray-300 space-y-2">
                                {[
                                    "Simplicidade que não sacrifica funcionalidade",
                                    "Design que reduz a sobrecarga cognitiva",
                                    "Acessibilidade para diferentes modos de pensar",
                                    "Construído por alguém que entende os desafios"
                                ].map((value, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + i * 0.1 }}
                                    >
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                        {value}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;