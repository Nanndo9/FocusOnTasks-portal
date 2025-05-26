import PricingCard from './PricingCard';

const PricingSection = () => {
    const pricingPlansData = [
        {
            name: "Básico",
            price: "Grátis",
            period: undefined,
            description: "Para começar a organizar suas ideias.",
            featuresList: ["Até 3 projetos", "Funcionalidades essenciais", "Suporte comunitário"],
            ctaText: "Começar Agora",
            ctaClass: "border-2 border-gray-600 hover:bg-gray-700 text-gray-300 hover:text-white",
            popular: false
        },
        {
            name: "Premium",
            price: "R$2,99",
            period: "/mês",
            description: "Para produtividade sem limites.",
            featuresList: ["Projetos ilimitados", "Colaboração avançada", "Sincronização na nuvem", "Suporte prioritário"],
            ctaText: "Escolher Premium",
            ctaClass: "bg-gray-200 hover:bg-gray-300 text-gray-900 transform hover:scale-105",
            popular: true
        }
    ];

    return (
        <section id="pricing" className="section-bg-custom py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-100">Planos para todos os níveis.</h2>
                    <p className="mt-4 max-w-xl mx-auto text-gray-400">
                        Comece gratuitamente ou escolha um plano com funcionalidades avançadas.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pricingPlansData.map(plan => (
                        <PricingCard key={plan.name} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
