const StrategicSolutionsHero = () => {
  // Logo data - replace with your actual logo paths
  const logos = [
    { src: "/logos/finance.svg", alt: "Finance" },
    { src: "/logos/findr.svg", alt: "Findr" },
    { src: "/logos/cosmic.svg", alt: "Cosmic" },
    { src: "/logos/athexa.svg", alt: "Athexa" },
    { src: "/logos/growing.svg", alt: "Growing" },
    { src: "/logos/finance.svg", alt: "Finance" },
    { src: "/logos/findr.svg", alt: "Findr" },
    { src: "/logos/cosmic.svg", alt: "Cosmic" },
    // Add more logos as needed
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/backgrounds/homehero.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Content Section */}
      <div className="relative z-10 pt-20 sm:pt-32 md:pt-44 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-gilroy-medium text-white text-xs sm:text-sm">
                Visionex Solutions
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="font-gilroy-bold text-white mb-6 sm:mb-8 max-w-4xl mx-auto px-2"
            style={{
              fontSize: "clamp(32px, 8vw, 72px)",
              lineHeight: "127%",
              letterSpacing: "-1%",
            }}
          >
            Strategic Solutions to Drive Your Business Success
          </h1>

          {/* Description */}
          <p
            className="font-gilroy-medium text-white mb-8 sm:mb-12 max-w-3xl mx-auto px-2"
            style={{
              fontSize: "clamp(14px, 4vw, 16px)",
              lineHeight: "140%",
              opacity: "0.9",
            }}
          >
            At Visionex Solutions, we understand that success doesn't come from
            guesswork—it comes from strategy. Whether you're navigating a
            high-stakes bid or trying to reshape your business for growth, our
            role is to be your strategic partner in achieving results that
            matter.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-12 sm:mb-16 md:mb-20">
            <button
              className="font-gilroy-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95"
              style={{
                boxSizing: "border-box",
                width: "clamp(140px, 40vw, 153px)",
                height: "clamp(44px, 12vw, 48px)",
                background: "#FFFFFF",
                border: "1px solid #FFFFFF",
                borderRadius: "58px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "0px",
                  gap: "6px",
                }}
              >
                <span
                  className="font-gilroy-semibold"
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "clamp(14px, 4vw, 16px)",
                    lineHeight: "27px",
                    display: "flex",
                    alignItems: "center",
                    color: "#000000",
                    whiteSpace: "nowrap",
                  }}
                >
                  Our Services
                </span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    d="M3.33 8H12.67M9.33 4.67L12.67 8L9.33 11.33"
                    stroke="#000000"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Logo Slider Section */}
      <div className="relative z-10 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Slider */}
          <div className="relative overflow-hidden">
            <div
              className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 opacity-60"
              style={{
                animation: "scroll 30s linear infinite",
                width: "fit-content",
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-6 sm:h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>

      {/* What We Offer Section */}
      <div className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src="/banners/homebn1.svg"
                alt="Visionex Solutions Services"
                className="w-full h-auto max-w-xs sm:max-w-md lg:max-w-lg"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              {/* Title */}
              <h2
                className="font-gilroy-bold text-white text-center lg:text-left"
                style={{
                  fontSize: "clamp(28px, 6vw, 47.44px)",
                  lineHeight: "62.4px",
                  letterSpacing: "-1.2px",
                }}
              >
                What We Offer –<br />
                Solutions That Matter
              </h2>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Bid Management */}
                <div className="space-y-3 text-center sm:text-left">
                  <h3 className="font-gilroy-bold text-white text-lg sm:text-xl">
                    Bid Management
                  </h3>
                  <p className="font-gilroy-medium text-white text-sm opacity-80 leading-relaxed">
                    Interpreting tender requirements to crafting persuasive
                    submissions
                  </p>
                </div>

                {/* Business Strategy Consulting */}
                <div className="space-y-3 text-center sm:text-left">
                  <h3 className="font-gilroy-bold text-white text-lg sm:text-xl">
                    Business Strategy Consulting
                  </h3>
                  <p className="font-gilroy-medium text-white text-sm opacity-80 leading-relaxed">
                    Helps companies experiencing stagnation or uncertainty
                    rediscover their edge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicSolutionsHero;
