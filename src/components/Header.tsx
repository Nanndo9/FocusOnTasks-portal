import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="py-4 px-4 sticky top-0 z-50 header-bg backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 flex items-center justify-center rounded text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 11 12 14 22 4"></polyline>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                    </div>
                    <span className="font-bold logo-text-header">FocusOnTasks</span>
                </a>

                {/* Botão de menu hambúrguer - Visível apenas em mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="block md:hidden text-white"
                    aria-label="Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {isMenuOpen ? (
                            // Ícone X quando menu está aberto
                            <>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </>
                        ) : (
                            // Ícone de hambúrguer quando menu está fechado
                            <>
                                <line x1="4" y1="12" x2="20" y2="12"></line>
                                <line x1="4" y1="6" x2="20" y2="6"></line>
                                <line x1="4" y1="18" x2="20" y2="18"></line>
                            </>
                        )}
                    </svg>
                </button>

                {/* Menu Desktop - Escondido em mobile */}
                <nav className="hidden md:flex items-center space-x-4">
                    <a href="#funcionalidades" className="text-gray-300 hover:text-white">Funcionalidades</a>
                    <a href="#precos" className="text-gray-300 hover:text-white">Preços</a>
                    <a href="#" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white">Entrar</a>
                </nav>
            </div>

            {/* Menu Mobile - Aparece apenas quando clicado */}
            {isMenuOpen && (
                <nav className="md:hidden py-4 px-2 mt-2 bg-gray-800 rounded-md animate-fadeIn">
                    <div className="flex flex-col space-y-3">
                        <a href="#funcionalidades" className="text-gray-300 hover:text-white px-2 py-2">Funcionalidades</a>
                        <a href="#precos" className="text-gray-300 hover:text-white px-2 py-2">Preços</a>
                        <a href="#" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 mt-2 rounded-md text-white text-center">Entrar</a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
