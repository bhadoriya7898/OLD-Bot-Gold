import React from "react";
import { ScrollReveal, StaggerContainer } from "../../utils/ScrollReveal";
import { motion } from "framer-motion";

const points = [
  {
    title: "Strategy-Based Execution",
    desc: "Every trade is governed by predefined mathematical models and institutional technical analysis.",
  },
  {
    title: "Risk-Managed Entries",
    desc: "Strict stop-loss protocols and position sizing ensure capital preservation in all market conditions.",
  },
  {
    title: "Consistent Trade Logic",
    desc: "Removing emotional variance through structured algorithmic decision-making frameworks.",
  },
  {
    title: "Focused on XAUUSD",
    desc: "Specialized exclusively in the gold market to capitalize on its unique liquidity and volatility.",
  },
];

const OurBots = () => {
  return (
    <section id="bots" className="w-full flex justify-center py-16 md:py-20">

      {/* Main Container */}
      <div className="w-full max-w-[1144px] px-6 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[50px]">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex flex-col gap-6">

          {/* Tag */}
          <ScrollReveal>
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

          {/* Heading */}
          <ScrollReveal delay={0.1}>
            <h2 className="text-white text-2xl md:text-[30px] md:leading-[36px] font-medium max-w-[470px]">
              Inside the BullionX <br /> Trading System
            </h2>
          </ScrollReveal>

          {/* List */}
          <StaggerContainer className="flex flex-col gap-4 pt-2">

            {points.map((item, index) => (
              <div key={index} className="flex items-start gap-3 group">

                {/* Circle Arrow */}
                <div className="w-[28px] h-[28px] min-w-[28px] flex items-center justify-center overflow-hidden group-hover:scale-110 transition-all duration-300">
                  <img src="/images/rightarrow.png" alt="arrow" className="w-full h-full object-contain" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1">
                  <span className="text-white text-[16px] md:text-[18px] font-semibold group-hover:text-primary-purple transition-colors duration-300">
                    {item.title}
                  </span>

                  <span className="text-[#C7C7C7] text-[13px] md:text-[14px] leading-[16px] md:leading-[16.8px] max-w-[420px]">
                    {item.desc}
                  </span>
                </div>

              </div>
            ))}

          </StaggerContainer>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <ScrollReveal delay={0.3} className="w-full">
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="w-full h-full rounded-[24px] border flex items-center justify-center p-4 md:p-6 transition-all duration-500 group overflow-hidden"
            style={{
              background:
                "linear-gradient(0deg, #0E0A39, #0E0A39), radial-gradient(139.98% 142.91% at 0% 0%, rgba(113,47,255,0.2) 0%, rgba(113,47,255,0) 56%), radial-gradient(139.98% 142.91% at 100% 100%, rgba(113,47,255,0.2) 0%, rgba(113,47,255,0) 48%)",
              border: "1px solid #6862AB",
            }}
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-primary-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image Placeholder */}
            <img
              src="/images/system-preview.png"
              alt="system"
              className="w-full h-auto object-contain rounded-[16px] transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </motion.div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default OurBots;