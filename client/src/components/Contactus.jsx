import React from 'react';
import { ScrollReveal } from '../utils/ScrollReveal';
import { motion } from 'framer-motion';
import MagneticButton from '../utils/MagneticButton';

const Contactus = () => {
    return (
        <section className="relative w-full py-16 md:py-24 flex flex-col items-center">
            
            {/* Main Contact Section */}
            <div className="w-full max-w-[1240px] px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Side Content */}
                <ScrollReveal className="w-full lg:w-[487px] flex flex-col justify-between">

                    {/* Heading */}
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl lg:text-[60px] lg:leading-[72px] font-normal font-[Inter] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                            Connect with Us <br /> Let's Build Together
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                        <p className="text-lg md:text-[20px] md:leading-[28px] text-[#BDBDBD] font-[Inter] max-w-[486px]">
                            Reach out and connect with the Saturn CodeCraft team. Whether you have questions, feedback, or partnership inquiries, we're here to listen and collaborate. Let's build something incredible together.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6 text-white/90">
                        <motion.div 
                            whileHover={{ x: 10 }}
                            className="flex flex-col gap-1"
                        >
                            <span className="text-xl md:text-[23.8px] md:leading-[28.5px] font-medium transition-colors hover:text-primary-purple cursor-pointer">
                                hello@email.com
                            </span>
                        </motion.div>

                        <motion.div 
                            whileHover={{ x: 10 }}
                            className="flex flex-col gap-1"
                        >
                            <span className="text-xl md:text-[23.8px] md:leading-[28.5px] font-medium transition-colors hover:text-primary-purple cursor-pointer">
                                +1-123-123-123
                            </span>
                        </motion.div>

                        <motion.div 
                            whileHover={{ x: 10 }}
                            className="flex flex-col gap-1"
                        >
                            <span className="text-xl md:text-[23.8px] md:leading-[28.5px] font-medium max-w-[320px]">
                                New York, <br/> 420 West Lexington Avenue
                            </span>
                        </motion.div>
                    </div>

                </ScrollReveal>

                {/* Right Side Form */}
                <ScrollReveal delay={0.3} className="w-full lg:w-[580px]">
                    <div className="bg-[#0b0b24] rounded-[32px] md:rounded-[40px] p-8 md:p-12 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-purple/10 blur-[60px] -translate-y-1/2 translate-x-1/2" />
                        
                        <form className="flex flex-col gap-8 md:gap-9 relative z-10" onSubmit={(e) => e.preventDefault()}>

                            {/* Full Name */}
                            <div className="relative">
                                <label className="absolute -top-2 left-4 px-2 bg-[#0b0b24] text-[10px] uppercase tracking-widest text-[#FFFFFF] font-bold z-10 transition-colors duration-300">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Jayvion Simon"
                                    className="w-full bg-transparent border border-white/10 rounded-lg px-5 py-4 text-white text-sm focus:outline-none focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/30 transition-all duration-300"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="relative">
                                <label className="absolute -top-2 left-4 px-2 bg-[#0b0b24] text-[10px] uppercase tracking-widest text-[#FFFFFF] font-bold z-10 transition-colors duration-300">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    defaultValue="nannie.abernathy70@yahoo.com"
                                    className="w-full bg-transparent border border-white/10 rounded-lg px-5 py-4 text-white text-sm focus:outline-none focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/30 transition-all duration-300"
                                />
                            </div>

                            {/* Phone & Subject */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="relative flex-1">
                                    <label className="absolute -top-2 left-4 px-2 bg-[#0b0b24] text-[10px] uppercase tracking-widest text-[#FFFFFF] font-bold z-10 transition-colors duration-300">
                                        Phone number
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="365-374-4961"
                                        className="w-full bg-transparent border border-white/10 rounded-lg px-5 py-4 text-white text-sm focus:outline-none focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/30 transition-all duration-300"
                                    />
                                </div>
                                <div className="relative flex-1">
                                    <label className="absolute -top-2 left-4 px-2 bg-[#0b0b24] text-[10px] uppercase tracking-widest text-[#FFFFFF] font-bold z-10 transition-colors duration-300">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Add Subject"
                                        className="w-full bg-transparent border border-white/10 rounded-lg px-5 py-4 text-white text-sm focus:outline-none focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/30 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <label className="absolute -top-2 left-4 px-2 bg-[#0b0b24] text-[10px] uppercase tracking-widest text-[#FFFFFF] font-bold z-10 transition-colors duration-300">
                                    Message
                                </label>
                                <textarea
                                    rows="6"
                                    defaultValue="Write your message..."
                                    className="w-full bg-transparent border border-white/10 rounded-lg px-5 py-4 text-white text-sm focus:outline-none focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/30 transition-all duration-300 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <MagneticButton
                                type="submit"
                                className="w-full h-[60px] primary-gradient hover:opacity-90 text-white rounded-2xl text-lg font-medium transition-all duration-300 purple-glow mt-2 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                <span className="relative z-10">Submit</span>
                            </MagneticButton>
                        </form>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default Contactus;
