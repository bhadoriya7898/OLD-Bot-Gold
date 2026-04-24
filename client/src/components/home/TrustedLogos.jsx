import React from "react";
import { ScrollReveal, StaggerContainer } from "../../utils/ScrollReveal";
import { motion } from "framer-motion";

const TrustedLogos = () => {
  const logos = [
    "/images/logo1.png",
    "/images/logo2.png",
    "/images/logo3.png",
    "/images/logo4.png",
    "/images/logo5.png",
    "/images/logo6.png",
  ];

  return (
    <section className="w-full relative flex flex-col items-center justify-center py-20 pointer-events-none">

      {/* Top Text */}
      <ScrollReveal className="w-full flex justify-center items-center px-4 mb-12">
        <p className="font-inter text-[13px] md:text-[15px] text-white/40 font-normal tracking-[0.05em] text-center uppercase">
          Join 4,000+ companies already growing
        </p>
      </ScrollReveal>

      {/* Logos Row */}
      <ScrollReveal delay={0.2} className="w-full max-w-[1100px] px-8 md:px-12 pointer-events-auto">
        <StaggerContainer className="flex flex-wrap items-center justify-center lg:justify-between w-full gap-x-12 gap-y-10 md:gap-x-16">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              className="h-[22px] sm:h-[30px] flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-full w-auto object-contain opacity-40 hover:opacity-100 brightness-0 invert transition-all duration-300 pointer-events-auto cursor-pointer"
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </ScrollReveal>

    </section>
  );
};

export default TrustedLogos;
