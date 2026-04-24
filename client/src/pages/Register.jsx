import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MagneticButton from "../utils/MagneticButton";
import { ScrollReveal } from "../utils/ScrollReveal";

const Register = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-12 md:py-20 overflow-x-hidden">

      <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* LEFT SIDE: Register Form */}
        <ScrollReveal className="w-full lg:w-[45%] flex flex-col gap-8 md:gap-10">

          {/* Logo / Title */}
          <div className="text-center lg:text-left flex flex-col gap-4">
               <h1 className="text-4xl md:text-[60px] md:leading-[1.1] font-normal text-white md:bg-gradient-to-b md:from-white md:to-white/40 md:bg-clip-text md:text-transparent">
                BulionX
              </h1>
              <p className="text-[#8446F6] text-sm md:text-base font-medium tracking-wide uppercase">Get started absolutely free</p>
          </div>

          {/* Card */}
          <div className="w-full rounded-[40px] border border-white/10 p-8 md:p-12 bg-[#0A0A1F]/60 backdrop-blur-3xl shadow-[0_20px_80px_rgba(113,47,250,0.15)] relative overflow-hidden group">
            
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-purple/10 blur-[60px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-8 relative z-10">

              {/* Heading */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Welcome to BullionX - Let’s Create Account
                </h2>
              </div>

              {/* FORM */}
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                    <label className="text-[11px] text-white/40 uppercase tracking-[2px] font-medium">
                        First Name
                    </label>
                    <input
                        type="text"
                        placeholder="Jayvion"
                        className="w-full h-[58px] px-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-primary-purple transition-all duration-300 placeholder:text-white/10"
                    />
                    </div>
                    <div className="flex flex-col gap-2">
                    <label className="text-[11px] text-white/40 uppercase tracking-[2px] font-medium">
                        Last Name
                    </label>
                    <input
                        type="text"
                        placeholder="Simon"
                        className="w-full h-[58px] px-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-primary-purple transition-all duration-300 placeholder:text-white/10"
                    />
                    </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] text-white/40 uppercase tracking-[2px] font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Jayvion Simon"
                    className="w-full h-[58px] px-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-primary-purple transition-all duration-300 placeholder:text-white/10"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] text-white/40 uppercase tracking-[2px] font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="6+ characters"
                      className="w-full h-[58px] px-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-primary-purple transition-all duration-300 placeholder:text-white/10"
                    />
                  </div>

                  {/* Remember + Forgot */}
                  <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center gap-2 text-white/50 cursor-pointer group/check">
                      <input type="checkbox" className="w-4 h-4 rounded-md border-white/20 bg-transparent accent-primary-purple" />
                      <span className="group-hover/check:text-white transition-colors">Remember me</span>
                    </label>
                    <a href="#" className="text-white/70 hover:text-white transition-colors underline-offset-4 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </div>

                {/* Submit Button */}
                <MagneticButton className="w-full h-[64px] rounded-2xl text-white font-semibold border border-[#AB86E7] bg-[#8446F6] shadow-[0_10px_40px_rgba(132,70,246,0.3)] hover:shadow-primary-purple/40 transition-all">
                  Submit
                </MagneticButton>

                {/* Policies */}
                <p className="text-center text-xs text-white/30 px-4">
                  By signing up, I agree to the <span className="text-white/60 hover:text-white cursor-pointer transition-colors">BullionX Policies</span>
                </p>

                {/* Divider */}
                <div className="flex items-center gap-4 text-white/20 text-xs uppercase tracking-widest font-bold">
                  <div className="flex-1 h-[1px] bg-white/5"></div>
                  OR
                  <div className="flex-1 h-[1px] bg-white/5"></div>
                </div>

                {/* Social Buttons */}
                <button className="flex items-center justify-center gap-3 w-full h-[58px] rounded-2xl border border-white/10 text-white/80 hover:text-white hover:bg-white/[0.05] hover:border-white/20 transition-all group/social">
                    <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="w-5 h-5 transition-transform group-hover/social:scale-110" />
                    <span className="text-sm font-medium">Sign up with google</span>
                </button>

                {/* Footer */}
                <p className="text-center text-sm text-white/40 pt-2">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary-purple font-semibold hover:underline underline-offset-4">
                    Sign in
                  </Link>
                </p>

              </form>
            </div>
          </div>
        </ScrollReveal>

        {/* RIGHT SIDE: Visual Showcase */}
        <ScrollReveal delay={0.2} className="hidden lg:flex w-full lg:w-[55%] h-[900px] rounded-[48px] overflow-hidden relative border border-white/5">

          {/* Luxury Background */}
          <div className="absolute inset-0">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#050514] via-[#0D0D2B] to-[#1A1A4A]" />
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#8446F622,transparent_50%)]" />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 p-16 flex flex-col justify-between h-full w-full">

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-[52px] leading-[1.2] font-semibold text-white tracking-tight">
                  Welcome back!
                </h2>
                <h2 className="text-[52px] leading-[1.2] font-semibold text-white tracking-tight">
                  Please sign in to your
                </h2>
                
                <div className="flex items-center gap-4 mt-2">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <img src="/images/logo.png" className="w-6 h-6 object-contain" alt="BulionX" />
                    </div>
                    <span className="text-[52px] font-semibold text-white underline underline-offset-8 decoration-primary-purple">
                        Market.Trad Account
                    </span>
                </div>
              </div>

              <p className="text-white/60 text-xl leading-relaxed max-w-[540px] font-light">
                Ranked #1 forex broker in execution speed by <span className="text-white font-medium">Compare ForexBrokers.com</span>
              </p>
            </div>

            {/* Floating Visual Asset */}
            <div className="relative flex justify-center items-center h-[400px]">
                <div className="absolute w-[500px] h-[500px] bg-primary-purple/20 blur-[120px] rounded-full" />
                <motion.img
                  animate={{ 
                    y: [0, -30, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  src="/images/Midnight.png"
                  alt="BulionX Analytics"
                  className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                />
            </div>

            {/* Verification Badge */}
            <div className="mt-auto flex items-center gap-6 bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-6 rounded-[32px] w-fit">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0D0D2B] bg-white/10" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#0D0D2B] bg-primary-purple flex items-center justify-center text-[10px] font-bold text-white">+2k</div>
               </div>
               <div className="flex flex-col">
                  <p className="text-sm text-white font-medium">Join our global network</p>
                  <p className="text-xs text-white/40">Verified institutional data feeds</p>
               </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Register;
