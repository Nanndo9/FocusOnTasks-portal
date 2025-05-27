import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import Cookies from 'js-cookie';

// Tipos
interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextProps {
    isLogged(): unknown;
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

// Criação do Context
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Provider
export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Carregar usuário do cookie ao iniciar
    useEffect(() => {
        const userCookie = Cookies.get('focusontasks_user');
        if (userCookie) {
            try {
                setUser(JSON.parse(userCookie));
            } catch (error) {
                console.error('Erro ao processar cookie de usuário:', error);
                Cookies.remove('focusontasks_user');
                Cookies.remove('focusontasks_token');
            }
        }
    }, []);

    // Login
    const login = async (email: string, password: string): Promise<boolean> => {
        setIsLoading(true);

        try {
            // Simular API (substitua por chamada real)
            await new Promise(r => setTimeout(r, 800));

            // Demo: aceita qualquer combinação de email/senha para teste
            // Na versão real, você valida com sua API
            if (!email || !password) {
                throw new Error('Email e senha são obrigatórios');
            }
            
            const userData = {
                id: '1',
                name: email.split('@')[0],
                email
            };

            // Armazenar usuário e token em cookies
            setUser(userData);
            Cookies.set('focusontasks_user', JSON.stringify(userData), {
                expires: 7, // 7 dias
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            });

            // Simular um token JWT
            const fakeToken = btoa(`${userData.id}:${userData.email}:${Date.now()}`);
            Cookies.set('focusontasks_token', fakeToken, {
                expires: 7,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict'
            });

            setIsLoading(false);
            return true;
        } catch (error) {
            console.error('Erro no login:', error);
            setIsLoading(false);
            return false;
        }
    };

    // Logout
    const logout = () => {
        setUser(null);
        Cookies.remove('focusontasks_user');
        Cookies.remove('focusontasks_token');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                logout,
                isLogged: () => !!user
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// Hook personalizado
export function useAuth() {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }

    return context;
}