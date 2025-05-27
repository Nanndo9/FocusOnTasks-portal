import { useState } from 'react';
import { Link } from 'react-router-dom';
import focusOnTasksLogo from '../assets/focus-on-tasks-white-logo.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    interface NavigationTargetId {
        funcionalidades: string;
        precos: string;
        sobre: string;
    }

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetId: keyof NavigationTargetId): void => {
        e.preventDefault();
        closeMenu();

        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.warn(`Elemento com ID "${targetId}" não encontrado na página`);
            }
        }, 300);
    };

    return (
        <header className="py-4 px-4 sticky top-0 z-40 header-bg backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src={focusOnTasksLogo} alt="FocusOnTasks Logo" className="h-5 md:h-6" />
                </Link>

                <div className="flex items-center space-x-4">
                    <nav className="hidden md:flex items-center space-x-4">
                        <a
                            href="#funcionalidades"
                            onClick={(e) => handleNavigation(e, 'funcionalidades')}
                            className="text-gray-300 hover:text-white"
                        >
                            Funcionalidades
                        </a>

                        <a
                            href="#precos"
                            onClick={(e) => handleNavigation(e, 'precos')}
                            className="text-gray-300 hover:text-white"
                        >
                            Preços
                        </a>

                        <a
                            href="#sobre"
                            onClick={(e) => handleNavigation(e, 'sobre')}
                            className="text-gray-300 hover:text-white"
                        >
                            Sobre nós
                        </a>

                        <Link to="/login" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white">Entrar</Link>
                        <Link to="/register" className="bg-transparent hover:bg-gray-800 px-4 py-2 rounded-md text-white border border-gray-700">Cadastrar</Link>
                    </nav>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="block md:hidden text-white"
                        aria-label="Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isMenuOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </>
                            ) : (
                                <>
                                    <line x1="4" y1="12" x2="20" y2="12"></line>
                                    <line x1="4" y1="6" x2="20" y2="6"></line>
                                    <line x1="4" y1="18" x2="20" y2="18"></line>
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            {isMenuOpen && (
                <>
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" onClick={closeMenu}></div>

                    <div className="fixed inset-0 z-50 md:hidden" style={{ height: "100vh", width: "100%" }}>
                        <div className="bg-gray-900 h-full w-full flex flex-col animate-slideIn">
                            {/* Cabeçalho com saudação e botão fechar */}
                            <div className="p-5 border-b border-gray-700 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium">Olá visitante</p>
                                    </div>
                                </div>
                                <button onClick={closeMenu} className="text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>

                            {/* Botões de Entrar e Cadastrar */}
                            <div className="p-4 border-b border-gray-700">
                                <div className="flex gap-3">
                                    <Link
                                        to="/login"
                                        className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md text-center"
                                        onClick={closeMenu}
                                    >
                                        Entrar
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="flex-1 bg-transparent hover:bg-gray-800 text-white py-2 px-4 rounded-md text-center border border-gray-700"
                                        onClick={closeMenu}
                                    >
                                        Cadastrar
                                    </Link>
                                </div>
                            </div>

                            {/* Links de navegação principais */}
                            <div className="flex-1">
                                <nav>
                                    <a
                                        href="#funcionalidades"
                                        className="flex items-center justify-between p-4 border-b border-gray-800 hover:bg-gray-800"
                                        onClick={(e) => handleNavigation(e, 'funcionalidades')}
                                    >
                                        <span>Funcionalidades</span>
                                        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="#precos"
                                        className="flex items-center justify-between p-4 border-b border-gray-800 hover:bg-gray-800"
                                        onClick={(e) => handleNavigation(e, 'precos')}
                                    >
                                        <span>Preços</span>
                                        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="#sobre"
                                        className="flex items-center justify-between p-4 border-b border-gray-800 hover:bg-gray-800"
                                        onClick={(e) => handleNavigation(e, 'sobre')}
                                    >
                                        <span>Sobre nós</span>
                                        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;
