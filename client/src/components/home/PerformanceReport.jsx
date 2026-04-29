import React from "react";

const metrics = [
    { label: "Win Rate", value: "92.4%" },
    { label: "Monthly Drawdown Target", value: "< 8.5%" },
    { label: "Institutional RR Ratio", value: "1:2.5+" },
    { label: "Return on Risk Factor", value: "2.84" },
];

const PerformanceReport = () => {
    return (
        <section className="w-full flex justify-center py-16 md:py-20">

            {/* Main Container */}
            <div className="w-full max-w-[1144px] px-6 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[50px]">

                {/* ================= LEFT SIDE (CARD) ================= */}
                <div className="w-full flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img
                        src="/images/home-chart.png"
                        alt="performance"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="flex flex-col gap-8">

                    {/* Tag */}
                    <div
                        className="w-fit flex items-center justify-center rounded-full px-6 py-2"
                        style={{
                            border: "1px solid #AB86E7",
                            background:
                                "linear-gradient(0deg, rgba(132,70,246,0.6), rgba(132,70,246,0.6)), radial-gradient(59.74% 182.72% at 50% 100%, #A97AFF 0%, rgba(169,122,255,0) 64%)",
                            boxShadow:
                                "3px 4px 5px 1px #00000026 inset, 0px -3px 5px 1px #FFFFFF47 inset",
                        }}
                    >
                        <span className="text-white text-sm md:text-[16px]">
                            Performance Report
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-white text-2xl md:text-[30px] md:leading-[36px] font-medium max-w-[470px]">
                            Institutional Execution Standards
                        </h2>

                        <p className="text-[#BDBDBD] text-sm md:text-[16px] leading-[20px] md:leading-[20.8px]">
                            Used by thousands of traders focused on disciplined XAUUSD execution.
                        </p>
                    </div>

                    {/* ================= METRICS LIST ================= */}
                    <div className="flex flex-col gap-4 pt-2">

                        {metrics.map((item, index) => (
                            <div key={index} className="flex flex-col">

                                <div className="flex justify-between items-center py-2">
                                    <span className="text-white text-sm md:text-[16px]">
                                        {item.label}
                                    </span>

                                    <span className="text-white text-sm md:text-[16px] font-semibold">
                                        {item.value}
                                    </span>
                                </div>

                                {/* Divider */}
                                {index !== metrics.length - 1 && (
                                    <div className="w-full border-t border-white/30"></div>
                                )}
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default PerformanceReport;