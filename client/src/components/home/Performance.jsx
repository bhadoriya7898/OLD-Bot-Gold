import React from "react";
import { ScrollReveal, StaggerContainer } from "../../utils/ScrollReveal";

const items = [
  {
    title: "Extensive Liquidity",
    desc: "With over $200B traded daily, gold offers unmatched liquidity, providing the stability required for large-scale institutional execution.",
    icon: "/images/uil_arrow-growth.png",
  },
  {
    title: "Market Resilience",
    desc: "Unlike high-volatility tech sectors or digital assets, gold's historical price action provides clear, reliable technical structures.",
    icon: "/images/carbon_ibm-secure-infrastructure-on-vpc-for-regulated-industries.png",
  },
  {
    title: "Global Wealth Benchmark",
    desc: "Gold serves as the ultimate safe-haven asset, allowing for consistent performance metrics even during global economic uncertainty.",
    icon: "/images/ion_diamond-outline.png",
  },
  {
    title: "Optimized Strategy Base",
    desc: "The unique correlation properties of gold make it an ideal foundation for disciplined, long-term wealth preservation strategies.",
    icon: "/images/gcp_cloud-for-marketing.png",
  },
];

const Performance = () => {
  return (
    <section id="performance" className="w-full flex justify-center py-16 md:py-20 relative overflow-hidden">

      {/* Gradient Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1152px] h-[500px] md:h-[650px] rounded-b-[70px] opacity-50 blur-[11px] pointer-events-none"
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
          <h2 className="text-white text-3xl md:text-[52px] md:leading-[62px] font-normal max-w-[500px]">
            Why Focus on Gold?
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
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[40px]">

          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 p-2 rounded-3xl transition-all duration-500 group hover:bg-white/5 border border-transparent hover:border-white/10"
            >
              {/* Icon Container */}
              <div
                className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(132,70,246,0.3)]"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">

                <h3 className="text-white text-lg md:text-[26px] leading-tight md:leading-[31px] font-medium font-roboto group-hover:text-primary-purple transition-colors duration-500">
                  {item.title}
                </h3>

                <p className="text-white/80 text-sm md:text-[18px] leading-[22px] md:leading-[25px] font-roboto font-light">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Performance;