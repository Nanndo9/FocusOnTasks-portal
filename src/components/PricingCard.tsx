import CheckIcon from './CheckIcon';

interface PlanProps {
    name: string;
    price: string | number;
    period?: string;
    description: string;
    featuresList: string[];
    ctaText: string;
    ctaClass: string;
    popular?: boolean;
}

const PricingCard = ({ plan }: { plan: PlanProps }) => {
    return (
        <div className={`card-bg-custom p-8 rounded-lg flex flex-col transition-transform transform hover:-translate-y-1 hover:shadow-xl relative ${plan.popular ? 'border-2 border-purple-600' : ''}`}>
            {plan.popular && (
                <span className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">POPULAR</span>
            )}
            <h3 className="text-2xl font-semibold text-gray-100">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold text-gray-100">{plan.price}
                {plan.period && <span className="text-xl font-normal text-gray-400">{plan.period}</span>}
            </p>
            <p className="mt-1 text-gray-400">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-gray-300 flex-grow">
                {plan.featuresList.map((featureItem: string, index: number) => (
                    <li key={index} className="flex items-center">
                        <CheckIcon />
                        {featureItem}
                    </li>
                ))}
            </ul>
            <a href="#" className={`mt-8 block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${plan.ctaClass}`}>
                {plan.ctaText}
            </a>
        </div>
    );
};

export default PricingCard;
