import React from "react";
import { ScrollReveal, StaggerContainer } from "../../utils/ScrollReveal";
import { motion } from "framer-motion";

const stats = [
    {
        title: "XAUUSD",
        subtitle: "Exclusive Focus",
        logo: "/images/traderlogo1.png",
    },
    {
        title: "10000+",
        subtitle: "Active Traders",
        logo: "/images/traderlogo2.png",
    },
    {
        title: "$50M+",
        subtitle: "Trading Volume",
        logo: "/images/traderlogo3.png",
    },
    {
        title: "95%",
        subtitle: "Strategy Efficiency",
        logo: "/images/traderlogo4.png",
    },
];

const platforms = [
    { title: "MT4", sub: "Terminal" },
    { title: "MT5", sub: "Expert" },
    { title: "ECN", sub: "Direct" },
    { title: "FIX API", sub: "Institutional" },
];

const TrustedStats = () => {
    return (
        <section className="w-full max-w-[1240px] px-4 md:px-8 py-24 flex flex-col items-center gap-16 md:gap-24 mx-auto relative z-10">
            
            {/* ================= HEADING ================= */}
            <ScrollReveal className="flex flex-col items-center text-center gap-4 max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                    Trusted by <span className="italic font-light text-glow">Traders Worldwide</span>
                </h2>
                <p className="text-base md:text-lg text-text-muted font-light leading-relaxed">
                    Used by thousands of traders focused on disciplined XAUUSD execution and institutional-grade results.
                </p>
            </ScrollReveal>

            {/* ================= CARDS GRID ================= */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
                {stats.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="glass-panel group relative flex flex-col items-center justify-center p-8 md:p-10 rounded-[30px] border border-white/10 hover:border-primary-purple/40 bg-white/[0.03] transition-all duration-500 cursor-default overflow-hidden"
                    >
                        {/* Hover Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                            {/* Logo */}
                            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <img
                                    src={item.logo}
                                    alt="stat icon"
                                    className="w-full h-full object-contain filter brightness-110"
                                />
                            </div>

                            {/* Text Container */}
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-glow transition-all">
                                    {item.title}
                                </span>
                                <span className="text-sm md:text-base text-text-muted font-medium uppercase tracking-wider">
                                    {item.subtitle}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </StaggerContainer>

            {/* ================= PLATFORM ROW ================= */}
            <StaggerContainer className="w-full pt-16 border-t border-white/5 flex flex-wrap justify-between items-center gap-y-12 gap-x-8 md:gap-x-12 px-2 md:px-10">
                {platforms.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center text-center group cursor-pointer"
                    >
                        <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 group-hover:text-primary-purple transition-colors duration-300">
                            {item.title}
                        </span>
                        <span className="text-[10px] md:text-xs lg:text-sm tracking-[3px] md:tracking-[6px] font-semibold text-white/50 group-hover:text-white transition-colors duration-300 uppercase relative overflow-hidden inline-block py-1">
                            {item.sub}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-purple transition-all duration-300 group-hover:w-full" />
                        </span>
                    </motion.div>
                ))}
            </StaggerContainer>

        </section>
    );
};

export default TrustedStats;