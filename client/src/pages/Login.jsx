import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MagneticButton from "../utils/MagneticButton";
import { ScrollReveal } from "../utils/ScrollReveal";

const Login = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-12 md:py-20 overflow-x-hidden">

      <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* LEFT SIDE: Login Form */}
        <ScrollReveal className="w-full lg:w-[45%] flex flex-col gap-10">

          {/* Logo / Title */}
          <div className="text-center lg:text-left flex flex-col gap-4">
            <h1 className="text-4xl md:text-[60px] md:leading-[1.1] font-normal text-white md:bg-gradient-to-b md:from-white md:to-white/40 md:bg-clip-text md:text-transparent">
              BulionX
            </h1>
            <p className="text-white/50 text-sm md:text-base">Institutional Standard XAUUSD Trading</p>
          </div>

          {/* Card */}
          <div className="w-full rounded-[40px] border border-white/10 p-8 md:p-12 bg-[#0A0A1F]/60 backdrop-blur-3xl shadow-[0_20px_80px_rgba(113,47,250,0.15)] relative overflow-hidden group">

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-purple/10 blur-[60px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-10 relative z-10">

              {/* Heading */}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Sign in
                </h2>
                <p className="text-base text-white/50">
                  Enter your credentials to access your terminal
                </p>
              </div>

              {/* FORM */}
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] text-white/40 uppercase tracking-[2px] font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
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
                      placeholder="••••••••"
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

                {/* Button */}
                <MagneticButton className="w-full h-[64px] rounded-2xl text-white font-semibold border border-[#AB86E7] bg-[#8446F6] shadow-[0_10px_40px_rgba(132,70,246,0.3)] hover:shadow-primary-purple/40 transition-all">
                  Sign In
                </MagneticButton>

                {/* Divider */}
                <div className="flex items-center gap-4 text-white/20 text-xs uppercase tracking-widest font-bold">
                  <div className="flex-1 h-[1px] bg-white/5"></div>
                  or
                  <div className="flex-1 h-[1px] bg-white/5"></div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-3 h-[58px] rounded-2xl border border-white/10 text-white/80 hover:text-white hover:bg-white/[0.05] hover:border-white/20 transition-all group/social">
                    <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="w-5 h-5 transition-transform group-hover/social:scale-110" />
                    <span className="text-sm font-medium">Google</span>
                  </button>

                  <button className="flex items-center justify-center gap-3 h-[58px] rounded-2xl border border-white/10 text-white/80 hover:text-white hover:bg-white/[0.05] hover:border-white/20 transition-all group/social">
                    <svg className="w-5 h-5 fill-current transition-transform group-hover/social:scale-110" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    <span className="text-sm font-medium">Apple ID</span>
                  </button>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-white/40 pt-4">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary-purple font-semibold hover:underline underline-offset-4">
                    Create Terminal
                  </Link>
                </p>

              </form>
            </div>
          </div>
        </ScrollReveal>

        {/* RIGHT SIDE: Visual Showcase */}
        <ScrollReveal delay={0.2} className="hidden lg:flex w-full lg:w-[55%] h-[800px] rounded-[48px] overflow-hidden relative border border-white/5">

          {/* Luxury Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050514] via-[#0D0D2B] to-[#1A1A4A]" />
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#8446F622,transparent_50%)]" />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 p-16 flex flex-col justify-between h-full w-full">

            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <img src="/images/logo.png" className="w-6 h-6 object-contain" alt="BulionX" />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-[52px] leading-[1.1] font-semibold text-white tracking-tight">
                  Institutional Intelligence <br />
                  <span className="text-primary-purple italic">At Your Fingertips.</span>
                </h2>
                <p className="text-white/50 text-[19px] leading-relaxed max-w-[480px] mt-2 font-light">
                  Join 10,000+ traders scaling their gold portfolios with structured risk management and high-speed execution.
                </p>
              </div>
            </div>

            {/* Floating Visual Asset */}
            <div className="relative mt-8 flex justify-center items-center">
              <div className="absolute w-[400px] h-[400px] bg-primary-purple/20 blur-[100px] rounded-full" />
              <motion.img
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                src="/images/Midnight.png"
                alt="BulionX Analytics"
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </div>



          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Login;