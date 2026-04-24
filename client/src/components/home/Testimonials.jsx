import React, { useEffect, useRef } from "react";
import { ScrollReveal } from "../../utils/ScrollReveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily Chen",
    role: "DevOps Specialist",
    quote: "Fast Theme Changes in Saturn hav transformed the way I work. Switching between themes on-the-fl helps me align my coding environment with different projec requirements swiftly. Saturn has truly streamlined my workflow.",
    avatar: "/images/testimonials/emily.png",
  },
  {
    name: "Sarah Thompson",
    role: "Senior Software Engineer",
    quote: "Saturn has redefined my coding experience. The Profile View feature allows me to seamlessly switch between different project setups, enhancing my efficiency. It's become an indispensable companion in my quest for coding perfection.",
    avatar: "/images/testimonials/sarah.png",
  },
  {
    name: "Alex Rodriguez",
    role: "Frontend Developer",
    quote: "Editor Color Changes in Saturn let me curate a visually pleasing environment for coding. The diverse color themes not only boost my creativity but also contribute to a more enjoyable and less stressful coding experience.",
    avatar: "/images/testimonials/alex.png",
  },
  {
    name: "John Carter",
    role: "Trader",
    quote: "Fast Theme Changes in Saturn hav transformed the way I work. Switching between themes on-the-fl helps me align my coding environment with different projec requirements swiftly. Saturn has truly streamlined my workflow.",
    avatar: "/images/testimonials/alex.png",
  },
  {
    name: "David Lee",
    role: "Quant Analyst",
    quote: "Saturn has redefined my coding experience. The Profile View feature allows me to seamlessly switch between different project setups, enhancing my efficiency. It's become an indispensable companion in my quest for coding perfection.",
    avatar: "/images/testimonials/emily.png",
  },
  {
    name: "Michael Scott",
    role: "Investor",
    quote: "Editor Color Changes in Saturn let me curate a visually pleasing environment for coding. The diverse color themes not only boost my creativity but also contribute to a more enjoyable and less stressful coding experience.",
    avatar: "/images/testimonials/sarah.png",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const startScroll = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      const container = scrollRef.current;
      if (container) {
        // Exactly 3 card widths + 3 gaps (approx 1227px for full set of 3)
        const scrollAmount = (385 + 24) * 3;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4000); 
  };

  const stopScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startScroll();
    return () => stopScroll();
  }, []);

  // Handle seamless reset
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const halfWidth = container.scrollWidth / 2;
      // Precision check for mid-point reset
      if (container.scrollLeft >= halfWidth - 100) {
        container.scrollLeft = container.scrollLeft - halfWidth;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const displayItems = [...testimonials, ...testimonials];

  return (
    <section className="w-full flex justify-center py-20 overflow-hidden min-h-[503px]">
      <div className="w-full max-w-[1144px] px-6 md:px-0 flex flex-col items-center" style={{ gap: "75px" }}>
        
        {/* ================= HEADER ================= */}
        <ScrollReveal className="flex flex-col items-center text-center gap-3 w-full max-w-[1144px]">
          
          <div className="w-full max-w-[642px] px-4">
            <h2
              className="font-inter font-normal text-2xl md:text-[40px] leading-tight md:line-height-[48px]"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Voices of Innovation, Testimonial
            </h2>
          </div>

          <div className="w-full max-w-[630px] px-4">
            <p 
                className="font-inter font-normal text-sm md:text-base leading-relaxed md:leading-[20.8px] text-[#BDBDBD]" 
            >
              Discover what the coding community is saying about Saturn's in our Testimonials 
              section. Immerse yourself in firsthand experiences as developers share.
            </p>
          </div>
        </ScrollReveal>

        {/* ================= CAROUSEL ================= */}
        <div
          ref={scrollRef}
          onMouseEnter={stopScroll}
          onMouseLeave={startScroll}
          onFocus={stopScroll}
          onBlur={startScroll}
          className="w-full flex gap-4 md:gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4"
          style={{ minHeight: "350px" }}
        >
          {displayItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="flex-shrink-0 flex flex-col w-[280px] sm:w-[320px] md:w-[385px] h-auto min-h-[315px] p-6 md:p-[29.8px] group transition-all duration-500"
              style={{
                borderRadius: "16px",
                border: "1px solid #6862AB",
                background: "linear-gradient(0deg, #0E0A39, #0E0A39), radial-gradient(129.22% 157.89% at 0% 0%, rgba(113,47,255,0.2) 0%, rgba(113,47,255,0) 48%), radial-gradient(129.22% 157.89% at 100% 100%, rgba(113,47,255,0.2) 0%, rgba(113,47,255,0) 56%)",
                gap: "30px",
              }}
            >
              <div className="absolute inset-0 bg-primary-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Quote Container */}
              <div className="w-full flex-1 relative z-10">
                <p 
                    className="font-inter font-normal text-sm md:text-[18px] leading-snug md:leading-[23.4px] color-[#BDBDBD] group-hover:text-white transition-colors duration-300"
                >
                    "{item.quote}"
                </p>
              </div>

              {/* User Avatar & Info */}
              <div className="flex items-center gap-3 relative z-10 h-[60px]">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-[60px] h-[60px] rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="flex flex-col">
                  <span 
                    className="font-inter font-medium text-white text-lg md:text-[20px] md:line-height-[24px]" 
                  >
                    {item.name}
                  </span>
                  <span 
                    className="font-inter font-normal text-[#BDBDBD73] text-sm md:line-height-[16.8px]" 
                  >
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;