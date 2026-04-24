import React from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../utils/ScrollReveal";
import MagneticButton from "../utils/MagneticButton";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center">

      {/* ================= TOP CTA ================= */}
      <section className="w-full flex justify-center px-6 md:px-[78px] py-10">

        <div
          className="w-full max-w-[1144px] rounded-[32px] overflow-hidden flex flex-col items-center text-center"
          style={{
            background:
              "radial-gradient(71.49% 139.92% at 50% 0%, #03051F 50%, #2441C5 80%, #FFFFFF 100%), linear-gradient(180deg, #03051F 0%, rgba(3,5,31,0) 100%)",
          }}
        >

          {/* Content */}
          <div className="px-6 md:px-[60px] py-12 flex flex-col items-center gap-6">

            <h2 className="text-white text-3xl md:text-[60px] md:leading-[72px] font-semibold max-w-[700px]">
              Together is better, let’s get started
            </h2>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">

              <MagneticButton className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-lg tracking-wide hover:bg-white/20 transition-all">
                Watch Video
              </MagneticButton>

              <Link to="/contact">
                <MagneticButton className="px-8 py-3 rounded-full bg-white text-black text-sm md:text-lg font-medium tracking-wide hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all">
                  Get Started
                </MagneticButton>
              </Link>

            </div>

          </div>

          {/* Image */}
          <img
            src="/images/footerimg.png"
            alt="footer"
            className="w-[80%] md:w-[70%] object-contain rounded-[18px] mb-6"
          />

        </div>
      </section>

      {/* ================= BOTTOM FOOTER ================= */}
      <section className="w-full flex justify-center px-6 md:px-[98px] py-12">

        <ScrollReveal className="w-full max-w-[1340px] flex flex-col gap-12">

          {/* Top Row */}
          <div className="flex flex-col lg:flex-row justify-between gap-10">

            {/* Newsletter */}
            <div className="flex flex-col gap-4 max-w-[320px]">

              <h3 className="text-white text-xl md:text-[28px] font-semibold">
                Join our newsletter
              </h3>

              {/* Input */}
              <div className="flex items-center bg-white/10 border border-white/10 rounded-full px-3 py-2 backdrop-blur-md focus-within:border-primary-purple/50 transition-colors">

                <input
                  type="email"
                  placeholder="Email@example.com"
                  className="bg-transparent outline-none text-white text-sm flex-1 px-2"
                />

                <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary-purple hover:text-white transition-all">
                  Sign up
                </button>


              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6 mt-4">
                <MagneticButton>
                   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block transition-all duration-300 hover:scale-110">
                     <img src="/images/instagramicon.png" alt="Instagram" className="w-[20px] h-[20px] object-contain opacity-60 hover:opacity-100 transition-opacity" />
                   </a>
                </MagneticButton>
                <MagneticButton>
                   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block transition-all duration-300 hover:scale-110">
                     <img src="/images/twittericon.png" alt="Twitter" className="w-[20px] h-[20px] object-contain opacity-60 hover:opacity-100 transition-opacity" />
                   </a>
                </MagneticButton>
                <MagneticButton>
                   <a href="mailto:hello@example.com" className="block transition-all duration-300 hover:scale-110">
                     <img src="/images/mailicon.png" alt="Mail" className="w-[20px] h-[20px] object-contain opacity-60 hover:opacity-100 transition-opacity" />
                   </a>
                </MagneticButton>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

              {/* Company */}
              <div>
                <h4 className="text-white mb-4 font-medium uppercase tracking-widest text-xs opacity-40">Company</h4>
                <ul className="flex flex-col gap-2 text-sm text-white/70">
                  <li className="hover:text-primary-purple transition-colors cursor-pointer"><Link to="/#performance">Features</Link></li>
                  <li className="hover:text-primary-purple transition-colors cursor-pointer"><Link to="/about">About Us</Link></li>
                  <li className="hover:text-primary-purple transition-colors cursor-pointer"><Link to="/#pricing">Pricing</Link></li>
                  <li className="hover:text-primary-purple transition-colors cursor-pointer"><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white mb-4 font-medium uppercase tracking-widest text-xs opacity-40">Legal</h4>
                <ul className="flex flex-col gap-2 text-sm text-white/70">
                  <li className="hover:text-primary-purple transition-colors cursor-pointer">Terms of Service</li>
                  <li className="hover:text-primary-purple transition-colors cursor-pointer">Privacy Policy</li>
                  <li className="hover:text-primary-purple transition-colors cursor-pointer">License Agreement</li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-white mb-4 font-medium uppercase tracking-widest text-xs opacity-40">Resources</h4>
                <ul className="flex flex-col gap-2 text-sm text-white/70">
                  <li className="hover:text-primary-purple transition-colors cursor-pointer">Style Guide</li>
                  <li className="hover:text-primary-purple transition-colors cursor-pointer">Instructions</li>
                  <li className="hover:text-primary-purple transition-colors cursor-pointer">Change Log</li>
                </ul>
              </div>

            </div>

          </div>

        </ScrollReveal>
      </section>

    </footer>
  );
};

export default Footer;