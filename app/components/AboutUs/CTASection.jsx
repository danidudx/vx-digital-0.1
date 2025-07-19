import React from "react";

const CTASection = () => {
  return (
    <div
      className="relative py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: "#09090D" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center">
          {/* Center box */}
          <div
            className="relative w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
            style={{
              backgroundImage: 'url("/banners/bg5.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "clamp(280px, 35vw, 449px)",
              maxHeight: "449px",
            }}
          >
            {/* Content overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
              {/* Title */}
              <h2
                className="font-gilroy-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white leading-tight"
                style={{
                  fontSize: "clamp(20px, 4.5vw, 47.44px)",
                  lineHeight: "clamp(26px, 5.5vw, 62.4px)",
                  letterSpacing: "clamp(-0.5px, -0.15vw, -1.2px)",
                  maxWidth: "min(900px, 90%)",
                }}
              >
                Discover how Visionex Solutions can help take your business to
                the next level
              </h2>

              {/* CTA Button */}
              <button
                className="bg-white text-black font-gilroy-medium rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                style={{
                  fontSize: "clamp(13px, 3vw, 16px)",
                  lineHeight: "clamp(18px, 4vw, 27.2px)",
                  padding: "clamp(10px, 2.5vw, 16px) clamp(20px, 5vw, 32px)",
                  minHeight: "clamp(36px, 8vw, 52px)",
                }}
              >
                <span>Book an appointment</span>
                <svg
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{
                    width: "clamp(14px, 3vw, 16px)",
                    height: "clamp(14px, 3vw, 16px)",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        /* Smooth hover effects */
        button:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* Responsive breakpoint optimizations */
        @media (max-width: 768px) {
          .relative.z-10 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
        }
        
        @media (max-width: 640px) {
          .relative.z-10 {
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            margin-bottom: 1rem !important;
          }
          
          button {
            gap: 0.375rem !important;
          }
        }
        
        @media (max-width: 375px) {
          .relative.z-10 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Ensure proper aspect ratio maintenance */
        @media (min-width: 1400px) {
          .relative.w-full {
            max-width: 1200px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default CTASection;
