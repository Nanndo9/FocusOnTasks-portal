import { Layout, Users, Focus } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}

const FeatureCard = ({ title, description, icon, index }: FeatureCardProps) => (
    <motion.div
        className="card-bg-custom p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
    >
        <motion.div
            className="mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 + index * 0.2, type: "spring" }}
        >
            {icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

const FeaturesSection = () => {
    const featuresData = [
        {
            title: "Organização Flexível",
            description: "Crie quadros, listas, notas e documentos. Adapte a ferramenta ao seu jeito de trabalhar.",
            icon: <Layout className="w-12 h-12 text-purple-500" />
        },
        {
            title: "Colaboração Eficiente",
            description: "Compartilhe projetos, atribua tarefas e trabalhe em equipe em tempo real, sem atritos.",
            icon: <Users className="w-12 h-12 text-purple-500" />
        },
        {
            title: "Foco Total",
            description: "Interface limpa e personalizável para minimizar distrações e maximizar sua concentração.",
            icon: <Focus className="w-12 h-12 text-purple-500" />
        }
    ];

    return (
        <section id="features" className="section-bg-custom py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold text-gray-100"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Tudo que você precisa, em um só lugar.
                    </motion.h2>
                    <motion.p
                        className="mt-4 max-w-xl mx-auto text-gray-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Desde o planejamento de projetos complexos até a gestão de tarefas diárias.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {featuresData.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
