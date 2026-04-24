import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center py-10 px-4 md:px-0">
      
      <div className="w-full max-w-[1000px] flex rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-[0_0_40px_rgba(138,43,226,0.15)] flex-col md:flex-row">
        
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <div className="w-full max-w-[400px] mx-auto">
            <h2 className="text-3xl font-medium tracking-tight text-white mb-2">Create Account</h2>
            <p className="text-sm text-text-muted font-light mb-8">Join the institutional trading network</p>
            
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-_xs text-text-muted uppercase tracking-wider font-semibold">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-purple transition-colors placeholder:text-white/20" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-_xs text-text-muted uppercase tracking-wider font-semibold">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-purple transition-colors placeholder:text-white/20" placeholder="Doe" />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-1">
                <label className="text-xs text-text-muted uppercase tracking-wider font-semibold">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-purple transition-colors placeholder:text-white/20" placeholder="you@example.com" />
              </div>
              
              <div className="flex flex-col gap-2 mt-1">
                <label className="text-xs text-text-muted uppercase tracking-wider font-semibold">Password</label>
                <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-purple transition-colors placeholder:text-white/20" placeholder="••••••••" />
              </div>
              
              <button type="submit" className="w-full bg-primary-purple hover:bg-purple-hover text-white py-3.5 rounded-xl text-sm font-medium transition-all duration-300 purple-glow mt-4">
                Sign Up
              </button>
            </form>
            
            <p className="text-xs text-text-muted text-center mt-8">
              Already have an account? <Link to="/login" className="text-primary-purple hover:underline font-medium">Log in</Link>
            </p>
          </div>
        </div>

        {/* Right Side: Visual Asset Placeholder */}
        <div className="w-full md:w-1/2 hidden md:block bg-black/40 relative">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 to-transparent z-10 pointer-events-none"></div>
          
          <img 
            src="/images/auth-side.png" 
            alt="BulionX Analytics" 
            className="w-full h-full object-cover opacity-80 scale-105"
          />
        </div>
      </div>

    </div>
  );
};

export default Register;
