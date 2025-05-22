
const DemoSection = () => {
    return (
        <section className="section-bg-custom py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-8 sm:mb-12">Veja como funciona.</h2>
                <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl p-3 sm:p-4">
                    <img
                        src="https://placehold.co/1200x750/1F2937/E5E7EB?text=Interface+Elegante+do+Produto"
                        alt="Interface do Produto FocusOnTasks"
                        className="rounded-md w-full h-auto"
                        onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.onerror = null;
                            img.src = 'https://placehold.co/1200x750/FF0000/FFFFFF?text=Erro+ao+Carregar+Imagem';
                            img.alt = 'Erro ao carregar imagem da interface do produto';
                        }}
                    />
                </div>
                <p className="mt-8 text-gray-400">Interface intuitiva que se adapta ao seu modo de trabalho.</p>
            </div>
        </section>
    );
};

export default DemoSection;
