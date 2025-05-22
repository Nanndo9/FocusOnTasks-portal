const GlobalStyles = () => (
    <style>{`
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
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    @media (min-width: 640px) {
      .logo-text-header {
        font-size: 1.5rem;
        line-height: 2rem;
      }
    }
  `}</style>
);

export default GlobalStyles;
