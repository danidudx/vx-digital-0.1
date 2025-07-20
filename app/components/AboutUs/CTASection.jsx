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
            {/* Animated Sunlight Rays */}
            <div
              className="absolute animated-rays"
              style={{
                backgroundImage: 'url("/rays/rays5.svg")',
                backgroundSize: "150%",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
                opacity: "1",
                mixBlendMode: "screen",
                zIndex: 1,
                filter: "brightness(1.2)",
                left: "-25%",
                right: "-25%",
                top: "0",
                bottom: "-50%",
              }}
            />

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
        /* Animated Sunlight Rays - Desktop */
        @keyframes rayMovementDesktop {
          0% {
            transform: translateX(-80px) scale(1);
          }
          25% {
            transform: translateX(60px) scale(1.1);
          }
          50% {
            transform: translateX(80px) scale(1);
          }
          75% {
            transform: translateX(-60px) scale(1.1);
          }
          100% {
            transform: translateX(-80px) scale(1);
          }
        }
        
        /* Animated Sunlight Rays - Tablet */
        @keyframes rayMovementTablet {
          0% {
            transform: translateX(-50px) scale(1);
          }
          25% {
            transform: translateX(35px) scale(1.05);
          }
          50% {
            transform: translateX(50px) scale(1);
          }
          75% {
            transform: translateX(-35px) scale(1.05);
          }
          100% {
            transform: translateX(-50px) scale(1);
          }
        }
        
        /* Animated Sunlight Rays - Mobile */
        @keyframes rayMovementMobile {
          0% {
            transform: translateX(-25px) scale(1);
          }
          25% {
            transform: translateX(20px) scale(1.02);
          }
          50% {
            transform: translateX(25px) scale(1);
          }
          75% {
            transform: translateX(-20px) scale(1.02);
          }
          100% {
            transform: translateX(-25px) scale(1);
          }
        }
        
        /* Fallback gradient animation */
        @keyframes rayFallback {
          0% {
            background-position: -100% 0%, 100% 0%, 0% -100%;
          }
          50% {
            background-position: 100% 0%, -100% 0%, 0% 100%;
          }
          100% {
            background-position: -100% 0%, 100% 0%, 0% -100%;
          }
        }
        
        /* Default Desktop Animation */
        .animated-rays {
          animation: rayMovementDesktop 4s ease-in-out infinite;
          transform-origin: center center;
          will-change: transform;
        }
        
        .animated-rays-fallback {
          animation: rayFallback 6s ease-in-out infinite;
          will-change: background-position;
        }
        
        /* Alternative animation for reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animated-rays {
            animation: rayOpacity 8s ease-in-out infinite;
          }
          
          @keyframes rayOpacity {
            0%, 100% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.5;
            }
          }
        }
        
        /* Smooth hover effects */
        button:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* Responsive breakpoint optimizations */
        @media (max-width: 1024px) {
          .animated-rays {
            animation: rayMovementTablet 5s ease-in-out infinite;
            left: "-20%";
            right: "-20%";
            top: "0";
            bottom: "-40%";
            background-size: "140%";
            background-position: "center top";
          }
        }
        
        @media (max-width: 768px) {
          .relative.z-10 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          
          .animated-rays {
            animation: rayMovementMobile 6s ease-in-out infinite;
            left: "-15%";
            right: "-15%";
            top: "0";
            bottom: "-30%";
            background-size: "130%";
            background-position: "center top";
          }
        }
        
        @media (max-width: 640px) {
          .relative.z-10 {
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
          }
          
          .animated-rays {
            left: "-10%";
            right: "-10%";
            top: "0";
            bottom: "-20%";
            background-size: "120%";
            background-position: "center top";
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            margin-bottom: 1rem !important;
          }
          
          button {
            gap: 0.375rem !important;
          }
          
          .animated-rays {
            animation-duration: 8s;
            left: "-8%";
            right: "-8%";
            top: "0";
            bottom: "-15%";
            background-size: "115%";
            background-position: "center top";
          }
        }
        
        @media (max-width: 375px) {
          .relative.z-10 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .animated-rays {
            left: "-5%";
            right: "-5%";
            top: "0";
            bottom: "-10%";
            background-size: "110%";
            background-position: "center top";
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
