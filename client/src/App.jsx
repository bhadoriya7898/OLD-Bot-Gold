import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothScroll from './utils/SmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScroll />
      <div className="bg-primary-dark text-text-main min-h-screen flex flex-col font-inter relative overflow-x-hidden">
        {/* Background radial gradient effect */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-purple/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-primary-purple/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
        
        <div className="z-10 relative flex flex-col min-h-screen w-full mx-auto">
          <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px] flex flex-col flex-grow">
            <Navbar />
            <main className="flex-grow w-full flex flex-col justify-center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
