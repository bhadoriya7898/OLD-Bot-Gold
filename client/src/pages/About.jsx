import React from 'react';
import WhyChoose from '../components/about/WhyChoose';
import { ScrollReveal, StaggerContainer } from '../utils/ScrollReveal';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative w-full pt-16 md:pt-24 pb-32 flex flex-col items-center">

      {/* Header & Text Split */}
      <ScrollReveal className="w-full flex flex-col md:flex-row items-start justify-between gap-8 mb-16 px-4 md:px-0">

        {/* Left Side Header */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            About BulionX
          </h2>
        </div>

        {/* Right Side Description */}
        <div className="w-full md:w-1/2 flex items-center xl:pr-16">
          <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
            A professional gold trading system focused on structured execution and disciplined performance. We bridge the gap between institutional-grade strategy and professional individual traders.
          </p>
        </div>

      </ScrollReveal>

      {/* Main Image Graphic Constraint */}
      <ScrollReveal className="w-full max-w-[1240px] px-4 md:px-0 relative mb-32 z-10">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full aspect-[16/7] md:aspect-[21/9] rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-[0_0_50px_rgba(138,43,226,0.15)] flex justify-center items-center group"
        >
          {/* Placeholder for Manual Asset (About section Robot graphic) */}
          <img
            src="/images/Rectangle 55.png"
            alt="BulionX Technology"
            className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </motion.div>
      </ScrollReveal>

      {/* The System Section */}
      <div className="w-full max-w-[1240px] px-4 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-32">
        
        {/* Left Side Graphic/Image */}
        <ScrollReveal className="w-full lg:w-1/2">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="rounded-[48px] bg-[#0b0b24] aspect-square lg:aspect-[5/4] border border-white/5 relative overflow-hidden flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
            {/* Placeholder for actual graphic if available */}
            <div className="w-3/4 h-3/4 rounded-3xl border border-white/10 bg-white/5 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(132,70,246,0.2)]">
               <span className="text-white/20 font-light text-sm italic tracking-widest uppercase relative z-10">System Graphic Placeholder</span>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pt-4">
          
          {/* Pill Label */}
          <ScrollReveal delay={0.2}>
            <div
              className="w-fit flex items-center justify-center rounded-full px-6 py-2 mb-12 shadow-lg"
              style={{
                border: "1px solid #AB86E7",
                background:
                  "linear-gradient(0deg, rgba(132,70,246,0.6), rgba(132,70,246,0.6)), radial-gradient(59.74% 182.72% at 50% 100%, #A97AFF 0%, rgba(169,122,255,0) 64%)",
                boxShadow:
                  "3px 4px 5px 1px #00000026 inset, 0px -3px 5px 1px #FFFFFF47 inset",
              }}
            >
              <span className="text-white text-sm font-semibold tracking-wider uppercase">
                The System
              </span>
            </div>
          </ScrollReveal>

          {/* Features List */}
          <StaggerContainer className="space-y-10">
            {[
              {
                title: "Strategy-Based Execution",
                description: "Every trade is governed by predefined mathematical models and institutional technical analysis."
              },
              {
                title: "Risk-Managed Entries",
                description: "Strict stop-loss protocols and position sizing ensure capital preservation in all market conditions."
              },
              {
                title: "Consistent Trade Logic",
                description: "Removing emotional variance through structured algorithmic decision-making frameworks."
              },
              {
                title: "Focused on XAUUSD",
                description: "Specialized exclusively in the gold market to capitalize on its unique liquidity and volatility."
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className="w-8 h-8 rounded-full bg-[#08081a] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary-purple group-hover:shadow-[0_0_15px_rgba(132,70,246,0.4)] transition-all duration-300">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-medium text-white tracking-tight group-hover:text-primary-purple transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-muted font-light leading-relaxed max-w-[480px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>

        </div>

      </div>

      {/* Why Choose Section */}
      <WhyChoose />

    </section>
  );
};

export default About;
