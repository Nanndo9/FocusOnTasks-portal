import { Brain, Monitor, Palette, Plus } from "lucide-react";
import { motion } from "framer-motion";

const DemoSection = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5
            }
        })
    };

    return (
        <section className="section-bg-custom py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-gray-100 mb-10 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Recursos Principais
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                        icon: <Monitor className="h-24 w-24 text-gray-400 opacity-60" />,
                        title: "Interface Intuitiva",
                        description: "Design minimalista que reduz distrações e ajuda a manter o foco nas suas tarefas essenciais."
                        },
                        {
                        icon: <Palette className="h-24 w-24 text-gray-400 opacity-60" />,
                        title: "Personalização Visual",
                        description: "Sistema de cores e prioridades para organizar tarefas de forma clara e adaptada às suas necessidades."
                        },
                        {
                        icon: <Brain className="h-24 w-24 text-gray-400 opacity-60" />,
                        title: "Para Neurodivergentes",
                        description: "Desenvolvido especialmente para pessoas com TDAH e outras neurodivergências, com foco na redução da carga cognitiva."
                        },
                        {
                        icon: <Plus className="h-24 w-24 text-gray-400 opacity-60" />,
                        title: "Sem Complicações",
                        description: "Apenas o essencial para organizar suas tarefas eficientemente, sem recursos desnecessários que aumentariam a distração."
                        }
                    ].map((card, i) => (
                    <motion.div
                        key={i}
                        className="card-bg-custom p-0 rounded-lg overflow-hidden shadow-xl"
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={cardVariants}
                        whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                    >
                        <div className="h-48 bg-gray-900 flex items-center justify-center">
                            {card.icon}
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                            <p className="text-gray-300">{card.description}</p>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
