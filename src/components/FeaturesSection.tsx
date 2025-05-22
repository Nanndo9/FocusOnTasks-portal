
interface FeatureCardProps {
    title: string;
    description: string;
    iconPath: string;
}

const FeatureCard = ({ title, description, iconPath }: FeatureCardProps) => (
    <div className="card-bg-custom p-6 rounded-lg shadow-lg">
        <div className="mb-4">
            <svg className="w-12 h-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
            </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const FeaturesSection = () => {
    const featuresData = [
        {
            title: "Organização Flexível",
            description: "Crie quadros, listas, notas e documentos. Adapte a ferramenta ao seu jeito de trabalhar.",
            iconPath: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
        },
        {
            title: "Colaboração Eficiente",
            description: "Compartilhe projetos, atribua tarefas e trabalhe em equipe em tempo real, sem atritos.",
            iconPath: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.247-3.135A11.952 11.952 0 0012 10.5c-2.796 0-5.43.86-7.5 2.37A11.95 11.95 0 004.5 18c1.866.672 3.914.896 6 .896 1.136 0 2.206-.097 3.203-.285M12 6.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM12 10.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        },
        {
            title: "Foco Total",
            description: "Interface limpa e personalizável para minimizar distrações e maximizar sua concentração.",
            iconPath: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        }
    ];

    return (
        <section id="features" className="section-bg-custom py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-100">Tudo que você precisa, em um só lugar.</h2>
                    <p className="mt-4 max-w-xl mx-auto text-gray-400">
                        Desde o planejamento de projetos complexos até a gestão de tarefas diárias.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {featuresData.map(feature => (
                        <FeatureCard
                            key={feature.title}
                            title={feature.title}
                            description={feature.description}
                            iconPath={feature.iconPath}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
