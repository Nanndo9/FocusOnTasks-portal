import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
        <motion.div
            className={`card-bg-custom p-8 rounded-lg flex flex-col relative ${plan.popular ? 'border-2 border-purple-600' : ''}`}
            whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {plan.popular && (
                <motion.span
                    className="absolute top-0 right-0 -mt-3 mr-3 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                >
                    POPULAR
                </motion.span>
            )}
            <h3 className="text-2xl font-semibold text-gray-100">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold text-gray-100">{plan.price}
                {plan.period && <span className="text-xl font-normal text-gray-400">{plan.period}</span>}
            </p>
            <p className="mt-1 text-gray-400">{plan.description}</p>
            <motion.ul className="mt-6 space-y-3 text-gray-300 flex-grow">
                {plan.featuresList.map((feature, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center"
                    >
                        <CheckIcon />
                        {feature}
                    </motion.li>
                ))}
            </motion.ul>
            <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
            >
                <Link
                    to="/register"
                    className={`mt-8 block w-full text-center px-6 py-3 rounded-lg font-semibold ${plan.ctaClass}`}
                >
                    {plan.ctaText}
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default PricingCard;
