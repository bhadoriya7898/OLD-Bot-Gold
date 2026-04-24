import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MagneticButton from "../utils/MagneticButton";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Performance", path: "/#performance" },
    { name: "Our Bots", path: "/#bots" },
    { name: "Pricing", path: "/#pricing" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="w-full min-h-[80px] lg:h-[124px] py-[15px] flex items-center justify-between bg-transparent"
    >

      {/* Logo */}
      <motion.div 
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="w-[34px] h-[40px] flex items-center shrink-0"
      >
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </Link>
      </motion.div>

      {/* Navigation Pill */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="hidden lg:flex items-center justify-center w-[544px] h-[54px] rounded-[10px] border"
        style={{
          background:
            "linear-gradient(0deg, #1E123D, #1E123D), radial-gradient(50.68% 611.87% at 50% 100%, rgba(91,65,166,0.2) 0%, rgba(91,65,166,0) 40%)",
          borderColor: "#FFFFFF29",
          boxShadow: "0px 5px 20px 0px #825AF833",
        }}
      >
        <ul className="flex items-center gap-[6px] w-[530px] h-[39.2px] px-[6.77px]">
          {navLinks.map((link, index) => {
            const currentPath = location.pathname + location.hash;
            const isActive = currentPath === link.path || (currentPath === '/' && link.path === '/#home');

            return (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`flex items-center justify-center px-[12px] py-[12.1px] text-[12px] leading-[14.4px] uppercase whitespace-nowrap transition-all duration-300 relative group ${isActive
                      ? "text-[#8446F6] font-bold"
                      : "text-[#FFFFFFB2] font-normal hover:text-[#8446F6]"
                    }`}
                  style={{
                    fontFamily: "Helvetica Neue",
                  }}
                >
                  {link.name}
                  {/* Underline Hover Effect */}
                  <span className={`absolute bottom-2 left-1/2 w-0 h-[1.5px] bg-[#8446F6] transition-all duration-300 -translate-x-1/2 group-hover:w-2/3 ${isActive ? 'w-2/3' : ''}`} />
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>

      {/* Login Button & Mobile Menu Wrapper */}
      <div className="flex items-center gap-4">
        <div className="w-[118px] h-[54px] flex items-center justify-end">
          <Link to="/login">
            <MagneticButton
              className="w-[118px] h-[41px] rounded-[60px] flex items-center justify-center text-white text-[16px] overflow-hidden relative group"
              style={{
                fontFamily: "Inter",
                background:
                  "linear-gradient(0deg, #8446F6, #8446F6), radial-gradient(59.74% 182.72% at 50% 100%, #A97AFF 0%, rgba(169,122,255,0) 64%)",
                border: "1px solid #AB86E7",
                boxShadow:
                  "3px 4px 5px 1px #00000026 inset, 0px -3px 5px 1px #FFFFFF47 inset",
              }}
            >
              {/* Inner Glow Hover */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Login</span>
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-white hover:text-primary-purple transition-colors ml-2"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </motion.button>
      </div>

    </motion.nav>
  );
};

export default Navbar;