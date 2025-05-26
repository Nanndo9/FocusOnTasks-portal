import { motion } from "framer-motion";

const HeroSection = () => (
    <section className="hero-section-bg py-16 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Organize seu fluxo. Conquiste seus objetivos.
            </motion.h1>

            <motion.p
                className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Uma ferramenta de produtividade elegante e intuitiva, desenhada para ajudar você a focar no que realmente importa.
            </motion.p>

            <motion.div
                className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <motion.a
                    href="#"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg w-full sm:w-auto transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Comece Gratuitamente
                </motion.a>
                <motion.a
                    href="#features"
                    className="border-2 border-gray-600 hover:bg-gray-700 text-gray-300 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold w-full sm:w-auto transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Saiba Mais
                </motion.a>
            </motion.div>
        </div>
    </section>
);

export default HeroSection;
