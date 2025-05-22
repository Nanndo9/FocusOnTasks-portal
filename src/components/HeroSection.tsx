const HeroSection = () => (
    <section className="hero-section-bg py-16 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight">
                Organize seu fluxo. Conquiste seus objetivos.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
                Uma ferramenta de produtividade elegante e intuitiva, desenhada para ajudar você a focar no que realmente importa.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg w-full sm:w-auto transition-colors transform hover:scale-105">
                    Comece Gratuitamente
                </a>
                <a href="#features" className="border-2 border-gray-600 hover:bg-gray-700 text-gray-300 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold w-full sm:w-auto transition-colors">
                    Saiba Mais
                </a>
            </div>
        </div>
    </section>
);

export default HeroSection;
