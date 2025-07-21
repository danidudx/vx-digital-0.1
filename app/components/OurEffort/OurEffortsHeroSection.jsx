const OurEffortHeroSection = () => {
  return (
    <div
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{
        backgroundColor: "#09090D",
        minHeight: "100vh",
      }}
    >
      {/* Background image with reduced opacity - full coverage */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/backgrounds/Frame 2147207698.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.6,
          width: "100%",
          height: "100%",
          minHeight: "100%",
        }}
      />

      {/* Animated Light Rays - full coverage */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/layers/oureffort.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3,
          animation: "lightRaysMove 15s ease-in-out infinite",
          filter: "sepia(0.3) saturate(0.7) hue-rotate(-10deg)",
          width: "100%",
          height: "100%",
          minHeight: "100%",
        }}
      />

      {/* Additional light rays for layered effect - full coverage */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/layers/oureffort.svg")',
          backgroundSize: "120%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
          animation: "lightRaysMove 20s ease-in-out infinite reverse",
          filter: "sepia(0.2) saturate(0.6) hue-rotate(-15deg)",
          width: "100%",
          height: "100%",
          minHeight: "100%",
        }}
      />

      {/* CSS Keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes lightRaysMove {
            0% {
              transform: translateX(-100px) scale(1);
              opacity: 0.3;
            }
            25% {
              transform: translateX(-50px) scale(1.05);
              opacity: 0.4;
            }
            50% {
              transform: translateX(0px) scale(1.1);
              opacity: 0.5;
            }
            75% {
              transform: translateX(50px) scale(1.05);
              opacity: 0.4;
            }
            100% {
              transform: translateX(100px) scale(1);
              opacity: 0.3;
            }
          }
        `,
        }}
      />

      <div className="relative z-10 pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-32 items-center w-full">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Title */}
            <h1
              className="font-gilroy-bold text-white mb-6 sm:mb-8"
              style={{
                fontSize: "clamp(32px, 8vw, 72px)",
                lineHeight: "127%",
                letterSpacing: "-1%",
              }}
            >
              Empowering Your Business Through Strategic
            </h1>

            {/* Description */}
            <p
              className="font-gilroy-medium text-white mb-6 sm:mb-8 opacity-90"
              style={{
                fontSize: "clamp(14px, 4vw, 16px)",
                lineHeight: "140%",
              }}
            >
              At Visionex, we specialise in delivering exceptional outcomes
              through a structured and detail-oriented approach. Whether it's
              Bid Management or Business Strategy Consulting, our processes are
              tailored to meet your goals. Explore how we turn ideas into
              impactful results and discover the work we've completed for our
              clients.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button
                className="bg-white text-black font-gilroy-semibold rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl"
                style={{
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  lineHeight: "27.2px",
                  padding: "clamp(12px, 3vw, 16px) clamp(24px, 6vw, 32px)",
                }}
              >
                <span>Our Services</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Image with glass border */}
          <div className="order-1 pt-20 lg:order-2 flex justify-center lg:justify-end sm:pt-20 md:pt-20 lg:pt-0">
            <div
              className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
              style={{
                width: "clamp(280px, 80vw, 529px)",
                height: "clamp(280px, 80vw, 526px)",
                aspectRatio: "1/1",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                padding: "clamp(8px, 2vw, 16px)",
              }}
            >
              <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden">
                <img
                  src="/banners/banner2.svg"
                  alt="Strategic Business Solutions"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom responsive styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Ensure backgrounds always cover full height of parent */
            .absolute.inset-0 {
              position: absolute !important;
              top: 0 !important;
              right: 0 !important;
              bottom: 0 !important;
              left: 0 !important;
              width: 100% !important;
              height: 100% !important;
            }

            /* Extra small mobile (320px - 480px) */
            @media (max-width: 480px) {
              .relative.py-12 {
                padding-top: 4rem !important;
                padding-bottom: 2rem !important;
                min-height: 100vh !important;
              }
              
              .grid {
                gap: 1.5rem !important;
              }
              
              .order-1 {
                padding-top: 3rem !important;
              }
              
              .order-2 {
                padding-top: 2rem !important;
              }
              
              h1 {
                font-size: 28px !important;
                line-height: 1.2 !important;
                margin-bottom: 1rem !important;
              }
              
              p {
                font-size: 14px !important;
                margin-bottom: 1.5rem !important;
              }
              
              button {
                font-size: 14px !important;
                padding: 12px 20px !important;
              }

              /* Reduce animation intensity on mobile */
              @keyframes lightRaysMove {
                0%, 100% {
                  transform: translateX(-20px) scale(1);
                  opacity: 0.2;
                }
                50% {
                  transform: translateX(20px) scale(1.02);
                  opacity: 0.3;
                }
              }
            }

            /* Small mobile (481px - 640px) */
            @media (min-width: 481px) and (max-width: 640px) {
              .relative.py-12 {
                padding-top: 5rem !important;
                padding-bottom: 2.5rem !important;
                min-height: 100vh !important;
              }
              
              .grid {
                gap: 2rem !important;
              }
              
              .order-1 {
                padding-top: 3.5rem !important;
              }
              
              h1 {
                font-size: 32px !important;
                line-height: 1.25 !important;
                margin-bottom: 1.5rem !important;
              }
              
              p {
                font-size: 15px !important;
                margin-bottom: 2rem !important;
              }
              
              button {
                font-size: 15px !important;
                padding: 14px 24px !important;
              }
            }

            /* Tablet portrait (641px - 768px) */
            @media (min-width: 641px) and (max-width: 768px) {
              .relative.py-12 {
                padding-top: 6rem !important;
                padding-bottom: 3rem !important;
                min-height: 100vh !important;
              }
              
              .grid {
                gap: 2.5rem !important;
              }
              
              .order-1 {
                padding-top: 4rem !important;
              }
              
              h1 {
                font-size: 40px !important;
                line-height: 1.27 !important;
                margin-bottom: 2rem !important;
              }
              
              p {
                font-size: 15px !important;
                margin-bottom: 2rem !important;
              }
              
              button {
                font-size: 15px !important;
                padding: 14px 26px !important;
              }
            }

            /* Tablet landscape (769px - 1024px) */
            @media (min-width: 769px) and (max-width: 1024px) {
              .relative.py-12 {
                padding-top: 6rem !important;
                padding-bottom: 3rem !important;
                min-height: 100vh !important;
              }
              
              .grid {
                gap: 3rem !important;
              }
              
              .order-1 {
                padding-top: 4rem !important;
              }
              
              .lg\\:order-2 {
                padding-top: 0 !important;
              }
              
              h1 {
                font-size: 48px !important;
                line-height: 1.27 !important;
                margin-bottom: 2rem !important;
              }
              
              p {
                font-size: 16px !important;
                margin-bottom: 2rem !important;
              }
              
              button {
                font-size: 16px !important;
                padding: 16px 28px !important;
              }
            }

            /* Small desktop (1025px - 1280px) */
            @media (min-width: 1025px) and (max-width: 1280px) {
              .relative.py-12 {
                padding-top: 4rem !important;
                padding-bottom: 4rem !important;
                min-height: 100vh !important;
              }
              
              .grid {
                gap: 4rem !important;
              }
              
              h1 {
                font-size: 56px !important;
                line-height: 1.27 !important;
                margin-bottom: 2rem !important;
              }
              
              p {
                font-size: 16px !important;
                margin-bottom: 2rem !important;
              }
              
              button {
                font-size: 16px !important;
                padding: 16px 32px !important;
              }
            }

            /* Large desktop (1281px+) */
            @media (min-width: 1281px) {
              .relative.py-12 {
                padding-top: 5rem !important;
                padding-bottom: 5rem !important;
                min-height: 100vh !important;
              }
              
              .grid {
                gap: 5rem !important;
              }
              
              h1 {
                font-size: 72px !important;
                line-height: 1.27 !important;
                margin-bottom: 2rem !important;
              }
              
              p {
                font-size: 16px !important;
                margin-bottom: 2rem !important;
              }
              
              button {
                font-size: 16px !important;
                padding: 16px 32px !important;
              }
            }

            /* Ensure image container responsive behavior */
            @media (max-width: 1023px) {
              .order-1 > div {
                max-width: 400px;
                margin: 0 auto;
              }
            }

            /* Accessibility: Reduce motion for users who prefer it */
            @media (prefers-reduced-motion: reduce) {
              .absolute.z-0 {
                animation: none !important;
              }
              
              .group:hover .transition-transform {
                transform: none !important;
              }
            }

            /* Ensure backgrounds always fill parent container */
            .relative.py-12 {
              position: relative;
            }
            
            .relative.py-12 > .absolute.inset-0 {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }

            /* High DPI displays */
            @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
              .absolute.z-0 {
                background-size: cover !important;
              }
            }
          `,
        }}
      />
    </div>
  );
};

export default OurEffortHeroSection;
