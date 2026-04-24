import React, { useState } from 'react';
import { ScrollReveal, StaggerContainer } from "../../utils/ScrollReveal";
import MagneticButton from '../../utils/MagneticButton';
import { motion } from 'framer-motion';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");

    const plans = [
        {
            price: billingCycle === "monthly" ? "149" : "1499",
            subtitle: "Designed for conservative gold trading with controlled risk.",
            title: "0.02 Lot Strategy",
            features: [
                "Structured trade execution",
                "Risk-managed entries",
                "XAUUSD focused strategy",
                "Performance tracking"
            ],
            buttonText: "Get Access",
            buttonStyle: "bg-white text-black hover:bg-white/90",
            isPopular: false
        },
        {
            price: billingCycle === "monthly" ? "199" : "1999",
            subtitle: "Designed for moderate growth with optimized execution logic.",
            title: "0.05 Lot Strategy",
            features: [
                "Structured trade execution",
                "Risk-managed entries",
                "XAUUSD focused strategy",
                "Performance tracking"
            ],
            badge: "BEST",
            buttonText: "Get Access",
            buttonStyle: "bg-[#111111] text-white hover:bg-black",
            isPopular: true
        },
        {
            price: billingCycle === "monthly" ? "399" : "3999",
            subtitle: "Designed for institutional scale and high-precision results.",
            title: "0.1 Lot Strategy",
            features: [
                "Structured trade execution",
                "Risk-managed entries",
                "XAUUSD focused strategy",
                "Performance tracking"
            ],
            buttonText: "Get Access",
            buttonStyle: "bg-white text-black hover:bg-white/90",
            isPopular: false
        }
    ];

    const matrixData = [
        { label: "Price:", cols: ["$199 / mo", "$299 / mo", "$499 / mo"] },
        { label: "Strategic Lot Capacity", cols: ["0.02", "0.05", "0.10"] },
        { label: "Lifetime Strategic License", cols: ["$1,000", "$1,500", "$2,500"] },
        { label: "Precision Trading Signals", cols: [true, true, true] },
        { label: "Payout Policy", cols: [true, true, true] },
        { label: "Platforms Offered", cols: [false, true, true] },
        { label: "Type of Plans", cols: [false, true, true] },
        { label: "Payout Policy", cols: [false, false, true] },
        { label: "Platforms Offered", cols: [false, false, true] },
        { label: "Type of Plans", cols: [false, false, true] },
        { label: "Type of Plans", cols: [false, true, true] },
    ];

    const CheckIcon = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const CrossIcon = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <section id="pricing" className="w-full flex justify-center py-16 md:py-24 relative overflow-hidden">

            {/* Main Container */}
            <div className="w-full max-w-[1200px] px-6 flex flex-col items-center gap-12 relative z-10">

                {/* ================= TOGGLE ================= */}
                <ScrollReveal>
                    <div className="flex bg-[#0A0A0A] p-1 rounded-full border border-white/10">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${billingCycle === "monthly" ? "primary-gradient text-white" : "text-white/60 hover:text-white"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${billingCycle === "yearly" ? "primary-gradient text-white" : "text-white/60 hover:text-white"
                                }`}
                        >
                            Yearly
                        </button>
                    </div>
                </ScrollReveal>

                {/* ================= PRICING CARDS ================= */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`p-10 rounded-[40px] flex flex-col gap-6 relative transition-all duration-500 overflow-hidden cursor-pointer group ${plan.isPopular ? "pricing-card-glow scale-105 z-10 hover:scale-[1.07]" : "hover:-translate-y-2"
                                }`}
                            style={{
                                background: index === 1
                                    ? "radial-gradient(169.5% 104.66% at 50% 0%, #02030A 29%, #2441C5 79%, #FFFFFF 100%)"
                                    : "linear-gradient(180deg, #0A133B 0%, #030611 100%)",
                                border: "1px solid #0E1A4E"
                            }}
                        >
                            {/* Hover Overlay Glow */}
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-500 pointer-events-none" />
                            <div className="absolute inset-0 border border-transparent group-hover:border-[#2441C5]/50 rounded-[40px] transition-colors duration-500 pointer-events-none" />
                            {plan.badge && (
                                <div className="absolute top-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-10 bg-white/10 border border-white/20 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest text-white">
                                    {plan.badge}
                                </div>
                            )}

                            {/* Price */}
                            <div className="flex flex-col gap-2 mt-4">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-white text-5xl font-normal">$</span>
                                    <span className="text-white text-5xl font-normal tracking-tight">{plan.price}</span>
                                    <span className="text-white/60 text-lg">
                                        {billingCycle === "monthly" ? "/Month" : "/Year"}
                                    </span>
                                </div>
                                <p className="text-white/70 text-[15px] leading-relaxed max-w-[240px]">
                                    {plan.subtitle}
                                </p>
                            </div>

                            {/* Title */}
                            <h3 className="text-white text-2xl font-semibold mt-4 transition-colors group-hover:text-primary-purple">
                                {plan.title}
                            </h3>

                            {/* Features */}
                            <div className="flex flex-col gap-4">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <motion.img
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            src="/images/correctarrow.png"
                                            alt="check"
                                            className="w-5 h-5 object-contain rounded-md"
                                        />
                                        <span className="text-white/90 text-[15px] font-roboto font-light">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <MagneticButton className={`w-full py-4 rounded-full font-bold text-base transition-all mt-4 relative overflow-hidden group ${plan.buttonStyle}`}>
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                <span className="relative z-10">{plan.buttonText}</span>
                            </MagneticButton>

                            {/* Footer Text */}
                            <p className="text-white/40 text-[12px] uppercase tracking-widest text-center mt-2">
                                Limited slots available
                            </p>

                            {/* Glow bottom effect for popular card */}
                            {plan.isPopular && (
                                <div className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none"
                                    style={{
                                        background: "radial-gradient(139.98% 142.91% at 50% 100%, rgba(113,47,255,0.2) 0%, rgba(113,47,255,0) 80%)"
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </StaggerContainer>

                {/* ================= STRATEGIC MATRIX ================= */}
                <div className="w-full mt-10 overflow-x-auto">
                    <div className="min-w-[800px] rounded-[32px] overflow-hidden border border-white/10" style={{ background: "linear-gradient(180deg, #091137 -48.19%, #2340C0 100%)" }}>
                        {/* Table Header */}
                        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] table-header-gradient border-b border-white/10">
                            <div className="p-8 text-white text-3xl font-normal">Strategic Matrix</div>
                            <div className="p-8 text-white text-xl font-normal flex items-center justify-center">Foundational</div>
                            <div className="p-8 text-white text-xl font-normal flex items-center justify-center">Strategic Pro</div>
                            <div className="p-8 text-white text-xl font-normal flex items-center justify-center">Institutional</div>
                        </div>

                        {/* Table Body */}
                        <div className="flex flex-col divide-y divide-white/5">
                            {matrixData.map((row, index) => (
                                <div key={index} className="grid grid-cols-[1.5fr_1fr_1fr_1fr] hover:bg-white/3 transition-colors">
                                    <div className="p-6 text-white text-lg font-medium pl-10">
                                        {row.label}
                                    </div>
                                    {row.cols.map((col, colIdx) => (
                                        <div key={colIdx} className="p-6 flex items-center justify-center">
                                            {typeof col === 'boolean' ? (
                                                col ? <div className="text-white"><CheckIcon /></div> : <div className="text-white/20"><CrossIcon /></div>
                                            ) : (
                                                <span className="text-white/80 text-lg">{col}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Pricing;
