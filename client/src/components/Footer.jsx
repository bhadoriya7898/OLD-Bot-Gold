import React from "react";

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

              <button className="px-6 py-2 rounded-full bg-white/20 text-white text-sm md:text-[18px] tracking-wide">
                Watch Video
              </button>

              <button className="px-6 py-2 rounded-full bg-white text-black text-sm md:text-[18px] tracking-wide">
                Get Started
              </button>

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

        <div className="w-full max-w-[1340px] flex flex-col gap-12">

          {/* Top Row */}
          <div className="flex flex-col lg:flex-row justify-between gap-10">

            {/* Newsletter */}
            <div className="flex flex-col gap-4 max-w-[320px]">

              <h3 className="text-white text-xl md:text-[28px] font-semibold">
                Join our newsletter
              </h3>

              {/* Input */}
              <div className="flex items-center bg-white/10 border border-white/10 rounded-full px-3 py-2 backdrop-blur-md">

                <input
                  type="email"
                  placeholder="Email@example.com"
                  className="bg-transparent outline-none text-white text-sm flex-1 px-2"
                />

                <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm">
                  Sign up
                </button>


              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6 mt-4">
                <a href="#" className="transition-all duration-300 hover:scale-110 hover:opacity-80">
                  <img src="/images/instagramicon.png" alt="Instagram" className="w-[20px] h-[20px] object-contain" />
                </a>
                <a href="#" className="transition-all duration-300 hover:scale-110 hover:opacity-80">
                  <img src="/images/twittericon.png" alt="Twitter" className="w-[20px] h-[20px] object-contain" />
                </a>
                <a href="#" className="transition-all duration-300 hover:scale-110 hover:opacity-80">
                  <img src="/images/mailicon.png" alt="Mail" className="w-[20px] h-[20px] object-contain" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

              {/* Company */}
              <div>
                <h4 className="text-white mb-4 font-medium">Company</h4>
                <ul className="flex flex-col gap-2 text-sm text-white/70">
                  <li>Features</li>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-white mb-4 font-medium">Social Media</h4>
                <ul className="flex flex-col gap-2 text-sm text-white/70">
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                </ul>
              </div>

              {/* Webflow */}
              <div>
                <h4 className="text-white mb-4 font-medium">Resources</h4>
                <ul className="flex flex-col gap-2 text-sm text-white/70">
                  <li>Style Guide</li>
                  <li>Licensing</li>
                  <li>Instructions</li>
                  <li>Change Log</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

    </footer>
  );
};

export default Footer;