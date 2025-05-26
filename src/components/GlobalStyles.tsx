const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: #0B0B0F;
      color: #D1D5DB;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .header-bg { background-color: rgba(11, 11, 15, 0.75); }
    .hero-section-bg { background-color: #101014; }
    .section-bg-custom { background-color: #0F0F13; }
    .card-bg-custom {
      background-color: #16161A;
      border: 1px solid #2A2A2E;
    }
    .footer-bg-custom { background-color: #08080A; }
    .logo-text-header {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2rem;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.2s ease-in-out forwards;
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(100%); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slideIn {
      animation: slideIn 0.3s ease-out forwards;
    }
    .text-animation-container {
      overflow: hidden;
      background: linear-gradient(135deg, #0F0F13 0%, #16161A 100%);
      border-radius: 0.5rem;
    }
    
    .animated-background {
      background: linear-gradient(-45deg, #13131a, #1a1a25, #191b2e, #251a2e);
      background-size: 400% 400%;
      animation: gradient-shift 15s ease infinite;
      box-shadow: 0 10px 30px -5px rgba(10, 10, 15, 0.5);
    }

    @keyframes gradient-shift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .text-animation {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 3rem;
      line-height: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
    }
    
    .focus-text {
      display: block;
      color: #fff;
      animation: slide-in-left 1s forwards, glow-white 3s ease-in-out infinite alternate;
      opacity: 0;
      transform: translateX(-50px);
    }
    
    .on-text {
      display: block;
      color: #a855f7;
      opacity: 0;
      animation: fade-in 1s forwards, glow 3s ease-in-out infinite alternate;
      animation-delay: 0.5s;
    }
    
    .tasks-text {
      display: block;
      background: linear-gradient(90deg, #a855f7, #3b82f6);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0;
      transform: translateX(50px);
      animation: slide-in-right 1s forwards, shift-gradient 5s linear infinite;
      animation-delay: 0.3s;
    }
    
    @keyframes slide-in-left {
      from { 
        opacity: 0;
        transform: translateX(-50px);
      }
      to { 
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slide-in-right {
      from { 
        opacity: 0;
        transform: translateX(50px);
      }
      to { 
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes pulse {
      from { transform: scale(1); }
      to { transform: scale(1.05); }
    }
    
    @keyframes float {
      from { transform: translateY(0px); }
      to { transform: translateY(-8px); }
    }

    @keyframes glow-white {
      from { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
      to { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6); }
    }

    @keyframes glow {
      from { text-shadow: 0 0 5px rgba(168, 85, 247, 0.5); }
      to { text-shadow: 0 0 20px rgba(168, 85, 247, 0.8), 0 0 30px rgba(168, 85, 247, 0.6); }
    }

    @keyframes shift-gradient {
      0% { background-position: 0% center; }
      100% { background-position: 200% center; }
    }
    
    @media (min-width: 640px) {
      .logo-text-header {
        font-size: 1.75rem;
        line-height: 2.25rem;
      }
      .text-animation {
        font-size: 5rem;
      }
    }
  `}</style>
);

export default GlobalStyles;
