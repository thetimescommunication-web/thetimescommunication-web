import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import IntroVideo from "./components/IntroVideo";

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("ttc_intro_played") === "1";
    setShowIntro(!hasPlayed);
  }, []);

  const handleIntroFinish = useCallback(() => {
    sessionStorage.setItem("ttc_intro_played", "1");
    setShowIntro(false);
  }, []);

  return (
    <Router>
      <div className="App">
        {showIntro && <IntroVideo onFinish={handleIntroFinish} />}
        <ScrollToTop />
        <Header />
        <main className="pt-16 lg:pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
