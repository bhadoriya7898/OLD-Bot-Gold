import React from 'react';
import { ScrollReveal } from '../../utils/ScrollReveal';
import { motion } from 'framer-motion';

const HomeChart = () => {
  return (
    <section className="w-full relative mt-0 lg:mt-32 mb-20 flex justify-center px-4 md:px-0 z-20">
      <ScrollReveal className="w-full max-w-[1240px]">
        {/* Placeholder for the chart image below the hero */}
        <motion.div
           whileHover={{ y: -10 }}
           transition={{ duration: 0.5 }}
        >
          <img
            src="/images/home-chart.png"
            alt="Home Chart Graphic"
            className="w-full h-auto object-contain hover:shadow-[0_20px_50px_rgba(132,70,246,0.15)] transition-shadow duration-500 rounded-3xl"
            onError={(e) => {
              e.target.style.display = 'none'; // hide if not found yet
            }}
          />
        </motion.div>
      </ScrollReveal>
    </section>
  );
};

export default HomeChart;
