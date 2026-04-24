import React from "react";
import { ScrollReveal, StaggerContainer } from "../../utils/ScrollReveal";
import { motion } from "framer-motion";

const items = [
  {
    title: "Professional System Design",
    desc: "Developed by professionals with deep experience in algorithmic gold trading and institutional market structure.",
    icon: "/images/uil_arrow-growth.png",
  },
  {
    title: "Focused Market Strategy",
    desc: "Eliminating noise by focusing exclusively on XAUUSD, ensuring our system is perfectly calibrated for its unique behavior.",
    icon: "/images/carbon_ibm-secure-infrastructure-on-vpc-for-regulated-industries.png",
  },
  {
    title: "Performance-Oriented",
    desc: "Every feature is designed with one goal: delivering consistent, verifiable execution for your strategic capital.",
    icon: "/images/ion_diamond-outline.png",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="w-full flex justify-center py-16 md:py-20 relative">

      {/* Gradient Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1152px] h-[500px] md:h-[650px] rounded-b-[70px] opacity-30 blur-[15px] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #030215 49%, #2441C5 69%, #FFFFFF 95%)",
        }}
      ></div>

      {/* Main Container */}
      <div className="w-full max-w-[1070px] px-6 md:px-10 lg:px-[28px] py-10 flex flex-col gap-10 relative z-10">

        {/* ================= HEADER ================= */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Heading */}
          <h2 className="text-white text-3xl md:text-[52px] md:leading-[62px] font-normal max-w-[600px]">
             Why Choose BulionX?
          </h2>

          {/* Pill */}
          <div
            className="w-fit flex items-center justify-center rounded-full px-6 py-2 shadow-lg"
            style={{
              border: "1px solid #AB86E7",
              background:
                "linear-gradient(0deg, rgba(132,70,246,0.6), rgba(132,70,246,0.6)), radial-gradient(59.74% 182.72% at 50% 100%, #A97AFF 0%, rgba(169,122,255,0) 64%)",
              boxShadow:
                "3px 4px 5px 1px #00000026 inset, 0px -3px 5px 1px #FFFFFF47 inset",
            }}
          >
            <span className="text-white text-sm md:text-[16px]">
              The System
            </span>
          </div>
        </ScrollReveal>

        {/* ================= GRID ================= */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[40px] mt-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 p-4 rounded-3xl transition-all duration-500 group hover:bg-white/[0.03] border border-transparent hover:border-white/10"
            >
              {/* Icon Container - Simplified to match Frame 21 */}
              <div className="flex flex-col gap-5">
                <motion.img
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-500"
                />
                
                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-white text-xl md:text-[28px] leading-tight md:leading-[34px] font-medium group-hover:text-primary-purple transition-colors duration-500">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-sm md:text-[18px] leading-[25px] md:leading-[28px] font-light max-w-[340px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default WhyChoose;
