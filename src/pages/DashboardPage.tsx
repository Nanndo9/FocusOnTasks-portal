import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function DashboardPage() {
    const { isAuthenticated, user, logout } = useAuth();

    // Proteção de rota
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <header className="bg-gray-800 p-4 shadow">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">FocusOnTasks</h1>
                    <div className="flex items-center space-x-4">
                        <span>Olá, {user?.name}</span>
                        <button
                            onClick={logout}
                            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
                        >
                            Sair
                        </button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto p-4 mt-8">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <p className="text-gray-300">
                    Esta é uma página protegida que só pode ser vista após o login.
                </p>
            </main>
        </div>
    );
}