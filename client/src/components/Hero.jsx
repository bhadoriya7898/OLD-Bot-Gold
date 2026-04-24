import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "../utils/MagneticButton";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  return (
    <section className="w-full relative min-h-[85vh] flex items-center pt-8 md:pt-16 pb-20">

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full z-10 gap-16 lg:gap-8 relative">

        {/* ================= LEFT SIDE (Text & UI) ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center relative z-10 w-full lg:w-1/2 max-w-[610px] space-y-8 sm:space-y-10 lg:space-y-12 shrink-0"
        >

          {/* Tagline Pill */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center justify-center self-start rounded-full border border-[#AB86E7] px-5 sm:px-7 py-2"
            style={{
              background: "linear-gradient(0deg, rgba(132,70,246,0.6), rgba(132,70,246,0.6)), radial-gradient(59.74% 182.72% at 50% 100%, #A97AFF 0%, rgba(169,122,255,0) 64%)",
              boxShadow: "3px 4px 5px 1px #00000026 inset, 0px -3px 5px 1px #FFFFFF47 inset",
            }}>
            <span className="font-inter text-xs sm:text-sm font-semibold text-white tracking-wide">
              Institutional Standard XAUUSD Trading
            </span>
          </motion.div>

          {/* Heading Container */}
          <div className="flex flex-col space-y-4">
            <motion.h1 
              variants={itemVariants}
              className="font-inter text-[42px] leading-[48px] sm:text-5xl lg:text-[60px] lg:leading-[72px] font-normal text-white"
            >
              Professional{" "}
              <br className="hidden sm:block" />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="italic font-medium"
                style={{
                  background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                Gold Trading
              </motion.span>{" "}
              <br className="hidden sm:block" />
              System Consistency
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="font-inter text-base sm:text-lg lg:text-[20px] leading-relaxed text-[#BDBDBD] max-w-lg"
            >
              Designed for disciplined XAUUSD trading with structured risk
              management and institution-grade execution logic.
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto pt-2"
          >
            <MagneticButton className="w-full sm:w-[174px] h-[53px] rounded-full border border-[#AB86E7] text-white font-inter text-base shrink-0"
              style={{
                background: "linear-gradient(0deg, #8446F6, #8446F6), radial-gradient(59.74% 182.72% at 50% 100%, #A97AFF 0%, rgba(169,122,255,0) 64%)",
                boxShadow: "3px 4px 5px 1px #00000026 inset, 0px -3px 5px 1px #FFFFFF47 inset",
              }}>
              Get Started
            </MagneticButton>

            <MagneticButton className="w-full sm:w-[186px] h-[53px] rounded-full border border-white/30 text-white font-inter text-base hover:bg-white/10 transition-colors shrink-0"
              style={{
                background: "#FFFFFF0D",
                backdropFilter: "blur(20px)",
              }}>
              View Performance
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SIDE (Glowing Pillar) ================= */}
        <motion.div 
          style={{ y: y1 }}
          className="w-full lg:w-1/2 flex items-center justify-center lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[-40px] xl:right-[-120px] z-0 opacity-100 mix-blend-screen pointer-events-none"
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            src="/images/glowing-pillar.jpg"
            alt="pillar"
            className="w-[90vw] max-w-[500px] lg:max-w-[700px] xl:max-w-[850px] h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;