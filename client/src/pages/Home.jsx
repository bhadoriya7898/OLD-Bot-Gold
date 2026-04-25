import React from 'react';
import Hero from '../components/Hero';
import HomeChart from '../components/home/HomeChart';
import TrustedLogos from '../components/home/TrustedLogos';
import Capabilities from '../components/home/Capabilities';
import OurBots from '../components/home/OurBots';
import Performance from '../components/home/Performance';
import Pricing from '../components/home/Pricing';
import TrustedStats from '../components/home/TrustedStats';
import PerformanceReport from '../components/home/PerformanceReport';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <Hero />
      <HomeChart />
      <TrustedLogos />
      <TrustedStats />
      <Capabilities />
      <OurBots />
      <Performance />
      <PerformanceReport />
      <Pricing />
      <Testimonials />
    </div>
  );
};

export default Home;
