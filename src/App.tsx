import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Methodology from './components/Methodology';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/global.css';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Benefits />
    <Methodology />
    <CTA />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
