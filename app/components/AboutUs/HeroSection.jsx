const HeroSection = () => {
  return (
    <div
      className="relative lg:min-h-screen"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/backgrounds/heroback2.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        {/* Header with About Us Badge */}
        <div className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-8">
          <div className="flex justify-center">
            {/* About Us Badge Container - Responsive */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div
                className="flex flex-col items-start p-1 gap-2.5 rounded-full"
                style={{
                  width: "203px",
                  height: "50px",
                  background: "rgba(255, 255, 255, 0.02)",
                }}
              >
                {/* Sub Container */}
                <div
                  className="flex flex-row items-center justify-center gap-4 rounded-full w-full h-full"
                  style={{
                    padding: "9px 16px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Content Container - Center everything */}
                  <div className="flex flex-row items-center justify-center gap-2 w-full">
                    {/* Logo */}
                    <img
                      src="/icons/mouse-logo.svg"
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
                      className="text-center flex-shrink-0"
                      style={{
                        fontFamily: "'Gilroy-SemiBold', sans-serif",
                        fontWeight: 400,
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
        </div>

        {/* Hero Content */}
        <div className="pb-4 sm:pb-8 md:pb-20">
          <div className="relative">
            {/* Title with clamp sizing */}
            <h1
              className="font-gilroy-bold text-center text-white mb-6 sm:mb-8 px-4 sm:px-0 max-w-5xl mx-auto"
              style={{
                fontSize: "clamp(36px, 8vw, 72px)",
                lineHeight: "clamp(42px, 10vw, 91px)", // 127% of 72px = 91px
              }}
            >
              Empowering Your Business
              <br />
              Through Strategic Expertise
            </h1>

            {/* Image Container - Using exact design specs */}
            <div
              className="relative w-full h-96"
              style={{
                boxSizing: "border-box",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
              }}
            >
              <div className="absolute inset-6 rounded-2xl">
                <img
                  src="/backgrounds/heroback.svg"
                  alt="Business professionals in meeting"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
