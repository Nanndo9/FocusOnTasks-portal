import { Brain, Monitor, Palette, Plus } from "lucide-react";

const DemoSection = () => {
    return (
        <section className="section-bg-custom py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-10 text-center">Recursos Principais</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="card-bg-custom p-0 rounded-lg overflow-hidden shadow-xl">
                        <div className="h-48 bg-gray-900 flex items-center justify-center">
                            <Monitor className="h-24 w-24 text-gray-400 opacity-60" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Interface Intuitiva</h3>
                            <p className="text-gray-300">Design minimalista que reduz distrações e ajuda a manter o foco nas suas tarefas essenciais.</p>
                        </div>
                    </div>

                    <div className="card-bg-custom p-0 rounded-lg overflow-hidden shadow-xl">
                        <div className="h-48 bg-gray-900 flex items-center justify-center">
                            <Palette className="h-24 w-24 text-gray-400 opacity-60" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Personalização Visual</h3>
                            <p className="text-gray-300">Sistema de cores e prioridades para organizar tarefas de forma clara e adaptada às suas necessidades.</p>
                        </div>
                    </div>

                    <div className="card-bg-custom p-0 rounded-lg overflow-hidden shadow-xl">
                        <div className="h-48 bg-gray-900 flex items-center justify-center">
                            <Brain className="h-24 w-24 text-gray-400 opacity-60" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Para Neurodivergentes</h3>
                            <p className="text-gray-300">Desenvolvido especialmente para pessoas com TDAH e outras neurodivergências, com foco na redução da carga cognitiva.</p>
                        </div>
                    </div>

                    <div className="card-bg-custom p-0 rounded-lg overflow-hidden shadow-xl">
                        <div className="h-48 bg-gray-900 flex items-center justify-center">
                            <Plus className="h-24 w-24 text-gray-400 opacity-60" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Sem Complicações</h3>
                            <p className="text-gray-300">Apenas o essencial para organizar suas tarefas eficientemente, sem recursos desnecessários que aumentariam a distração.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
