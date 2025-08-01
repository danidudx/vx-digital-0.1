const HeroSection = () => {
  return (
    <div
      className="relative lg:min-h-screen"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/backgrounds/heroback2.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated Light Rays - Layer 1 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/layers/oureffort.png")',
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

      {/* Additional light rays for layered effect - Layer 2 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/layers/oureffort.png")',
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

      {/* CSS Keyframes for Animation */}
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

          /* Ensure backgrounds always cover full height */
          .absolute.inset-0 {
            position: absolute !important;
            top: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
          }

          /* Reduce animation intensity on mobile */
          @media (max-width: 480px) {
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

          /* Accessibility: Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            .absolute.z-0 {
              animation: none !important;
            }
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        {/* Header with About Us Badge */}
        <div className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-8">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div
              className="rounded-full"
              style={{
                width: "203px",
                height: "50px",
                padding: "0.2px",
              }}
            >
              {/* Inner container with glass effect */}
              <div
                className="flex flex-row items-center justify-center gap-4 rounded-full w-full h-full"
                style={{
                  padding: "9px 16px",
                  background: "#5a5b56",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Content Container - Center everything */}
                <div className="flex flex-row items-center justify-center gap-2 w-full">
                  {/* Logo */}
                  <img
                    src="/icons/mouse-logo.png"
                    alt="Visionex Solutions"
                    className="flex-shrink-0"
                    style={{
                      width: "28px",
                      height: "28px",
                      filter: `
              drop-shadow(0px 3.407px 2.641px rgba(0, 0, 0, 0.2))
              drop-shadow(0px 1.704px 1.704px rgba(0, 0, 0, 0.6))
              drop-shadow(0px 0.852px 0.852px rgba(0, 0, 0, 0.6))
              drop-shadow(0px 3.321px 25.556px rgba(0, 0, 0, 0.17))
              drop-shadow(0px 9.488px 60.726px rgba(0, 0, 0, 0.7))
            `,
                    }}
                  />
                  {/* Text */}
                  <span
                    className="font-gilroy-semibold text-center flex-shrink-0"
                    style={{
                      fontSize: "16px",
                      lineHeight: "150%",
                      color: "#D6D8DB",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Visionex Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content - Title Only */}
        <div className="pb-4 sm:pb-8 md:pb-20">
          <div className="relative">
            {/* Title with clamp sizing */}
            <h1
              className="font-gilroy-bold text-center text-white px-4 sm:px-0 max-w-5xl mx-auto"
              style={{
                fontSize: "clamp(36px, 8vw, 72px)",
                lineHeight: "clamp(42px, 10vw, 91px)", // 127% of 72px = 91px
                marginBottom: "clamp(4px, 0.5vw, 8px)", // Very minimal gap
              }}
            >
              Empowering Your Business
              <br />
              Through Strategic Expertise
            </h1>
          </div>
        </div>
      </div>

      {/* Image Container - Break out of max-w-7xl constraint for full width */}
      <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-8 md:pb-20">
        <div
          className="relative w-full"
          style={{
            minHeight: "clamp(250px, 50vh, 564px)", // Reduced mobile height while maintaining desktop target
            boxSizing: "border-box",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
          }}
        >
          <style jsx>{`
            @media (min-width: 1400px) {
              .relative.w-full {
                max-width: 1400px;
                margin: 0 auto;
              }
            }
          `}</style>
          <div className="absolute inset-6 rounded-2xl">
            <img
              src="/backgrounds/heroback.png"
              alt="Business professionals in meeting"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
