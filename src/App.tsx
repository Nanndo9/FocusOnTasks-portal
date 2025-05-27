import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import GlobalStyles from './components/GlobalStyles';

// Componentes da Landing Page
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DemoSection from './components/DemoSection';
import PricingSection from './components/PricingSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

// Páginas da área logada
import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import type { ReactNode } from "react";

// Componente de roteamento
const AppRoutes = () => {
  const auth = useAuth();

  // Função para verificar autenticação - diretamente no App
  const privateRoute = (element: ReactNode) => {
    const isLogged = auth.isLogged();
    if (isLogged) return element;
    return <Navigate to="/login" />
  }

  return (
    <Routes>
      {/* Rota da Landing Page */}
      <Route path="/" element={
        <>
          <Header />
          <HeroSection />
          <div id="funcionalidades">
            <FeaturesSection />
          </div>
          <DemoSection />
          <div id="precos">
            <PricingSection />
          </div>
          <AboutSection />
          <Footer />
        </>
      } />

      {/* Rota de login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Rotas protegidas */}
      <Route path="/dashboard" element={privateRoute(<DashboardPage />)} />
      <Route path="/tarefas" element={privateRoute(<TasksPage />)} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

// App principal sem componente intermediário
const App = () => (
  <AuthProvider>
    <GlobalStyles />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
