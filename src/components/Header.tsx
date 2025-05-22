import { CheckSquare } from 'lucide-react';

const Header = () => (
    <header className="py-4 sm:py-5 px-2 sm:px-4 lg:px-8 sticky top-0 z-50 header-bg backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-gray-100 hover:text-gray-200 flex items-center">
                <CheckSquare className="w-8 h-8 text-purple-500 mr-3" strokeWidth={2} />
                <span className="font-bold logo-text-header text-xl">FocusOnTasks</span>
            </a>
            <nav>
                <a href="#features" className="text-gray-300 hover:text-white px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium">Funcionalidades</a>
                <a href="#pricing" className="ml-1 sm:ml-2 text-gray-300 hover:text-white px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium">Preços</a>
                <a href="#" className="ml-1 sm:ml-2 border-2 border-gray-600 hover:bg-gray-700 text-gray-300 hover:text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors">Entrar</a>
            </nav>
        </div>
    </header>
);

export default Header;
