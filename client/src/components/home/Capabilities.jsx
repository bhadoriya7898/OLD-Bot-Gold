import React from "react";
import { ScrollReveal, StaggerContainer } from "../../utils/ScrollReveal";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Structured Trade Entries",
    desc: "Precisely defined entry parameters based on institutional liquidity zones and gold market structure.",
    image: "/images/card1.png",
    dark: false,
  },
  {
    title: "Risk Control System",
    desc: "Sophisticated risk management algorithms that dynamically adjust to market volatility and capital protection.",
    image: "/images/card2.png",
    dark: true,
  },
  {
    title: "Real-Time Execution",
    desc: "High-speed order processing ensuring minimal slippage in the fast-moving XAUUSD environment.",
    image: "/images/card3.png",
    dark: true,
  },
];

const Capabilities = () => {
  return (
    <section
      className="w-full flex justify-center"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 77%, #002AE8 90%, #030118 100%)",
      }}
    >
      {/* Main Container */}
      <div className="w-full max-w-[1284px] px-6 md:px-10 lg:px-0 py-16 md:py-20 flex flex-col items-center gap-12">

        {/* ================= HEADER ================= */}
        <ScrollReveal className="flex flex-col items-center gap-6 text-center">

          {/* Pill */}
          <div
            className="flex items-center justify-center rounded-full border border-black px-6 py-2 shadow-sm"
          >
            <span className="text-sm md:text-base font-normal text-[#02030A]">
              System Capabilities
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[52px] md:leading-[62px] font-medium text-[#02030A] max-w-[700px]">
            Engineered for Excellence
          </h2>
        </ScrollReveal>

        {/* ================= CARDS ================= */}
        <StaggerContainer className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[30px] items-stretch">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.01 }}
              className="flex flex-col rounded-[16px] overflow-hidden border border-[#B9B9B9] w-full lg:w-[470px] transition-all duration-500 hover:shadow-2xl hover:border-[#2441C5] group cursor-default"
              style={{
                background: card.dark
                  ? "#FFFFFF"
                  : "linear-gradient(180deg, #2441C5 0%, #FFE2E2 100%)",
              }}
            >
              {/* Content */}
              <div className="p-6 md:p-[35px] flex flex-col gap-3 md:gap-[12px]">

                <h3
                  className={`text-2xl md:text-[42px] leading-tight md:leading-[50px] transition-colors duration-500 ${card.dark ? "text-black group-hover:text-primary-purple" : "text-white"
                    }`}
                >
                  {card.title}
                </h3>

                <p
                  className={`text-sm md:text-[16px] leading-[20px] md:leading-[20.8px] ${card.dark ? "text-black" : "text-white"
                    }`}
                  style={{ fontFamily: "Roboto" }}
                >
                  {card.desc}
                </p>
              </div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Capabilities;