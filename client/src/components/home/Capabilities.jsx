import React, { useRef } from "react";
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
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 493 : 300; // card width + gap
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="w-full flex justify-center"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 77%, #002AE8 90%, #030118 100%)",
      }}
    >
      {/* Main Container */}
      <div className="w-full max-w-[1920px] px-4 md:px-6 lg:px-10 pt-16 pb-32 md:pt-20 md:pb-48 lg:pb-[200px] flex flex-col items-center gap-12">

        {/* ================= HEADER ================= */}
        <ScrollReveal className="flex flex-col items-center gap-6 text-center w-full">
          {/* Pill */}
          <div className="flex items-center justify-center rounded-full border border-black px-6 py-2 shadow-sm">
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
        <div 
          ref={scrollRef} 
          className="flex overflow-x-auto snap-x snap-mandatory w-full pb-8 px-2 md:px-4 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <StaggerContainer className="flex gap-[23px] w-max">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.01 }}
              className="flex flex-col rounded-[16px] overflow-hidden border border-[#B9B9B9] w-[90vw] md:w-[470px] h-[auto] md:h-[556px] shrink-0 snap-center transition-all duration-500 hover:shadow-2xl hover:border-[#2441C5] group cursor-default"
              style={{
                background: card.dark
                  ? "#FFFFFF"
                  : "linear-gradient(180deg, #2441C5 0%, #FFE2E2 100%)",
              }}
            >
              {/* Content */}
              <div className="p-6 md:p-[35px] flex flex-col gap-3 md:gap-[23px] flex-grow z-10">

                <h3
                  className={`text-2xl md:text-[42px] leading-tight md:leading-[1.1] transition-colors duration-500 ${card.dark ? "text-black group-hover:text-primary-purple" : "text-white"
                    }`}
                >
                  {card.title}
                </h3>

                <p
                  className={`text-sm md:text-[18px] leading-[24px] md:leading-[28px] ${card.dark ? "text-black" : "text-white"
                    }`}
                  style={{ fontFamily: "Roboto" }}
                >
                  {card.desc}
                </p>
              </div>

              {/* Image */}
              <div className="mt-auto overflow-hidden h-[250px] md:h-[300px] w-full relative">
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
          </StaggerContainer>
        </div>

        {/* ================= CONTROLS ================= */}
        <div className="flex items-center justify-start w-full gap-6 mt-4 px-2 md:px-4">
          <button
            onClick={() => scroll('left')}
            className="flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '13.03px',
              border: '1.63px solid #0E1A4E',
              background: 'linear-gradient(180deg, #0A133B 0%, #030611 100%)'
            }}
          >
            <svg width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '13.03px',
              border: '1.63px solid #0E1A4E',
              background: 'linear-gradient(180deg, #0A133B 0%, #030611 100%)'
            }}
          >
            <svg width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Capabilities;