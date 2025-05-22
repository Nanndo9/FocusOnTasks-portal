const AboutSection = () => {
    return (
        <section id="sobre" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre nós</h2>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 mb-10">
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                            <h3 className="text-xl font-semibold mb-3 text-purple-400">Minha missão</h3>
                            <p className="text-gray-300">
                                Criar ferramentas que realmente funcionem para pessoas com cérebros diversos,
                                especialmente pessoas neurodivergentes. Acredito que a tecnologia deve se adaptar às pessoas,não o contrário. O FocusOnTasks é desenvolvido com atenção especial às necessidades de quem precisa de clareza, simplicidade e estímulo visual para permanecer organizado.
                            </p>
                        </div>

                        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                            <h3 className="text-xl font-semibold mb-3 text-purple-400">Meus valores</h3>
                            <ul className="text-gray-300 space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                    Simplicidade que não sacrifica funcionalidade
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                    Design que reduz a sobrecarga cognitiva
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                    Acessibilidade para diferentes modos de pensar
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                    Construído por alguém que entende os desafios
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;