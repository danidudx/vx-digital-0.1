import React from "react";

const HalfCircleAnimation = ({
  strokeWidth = 3,
  gradientLength = 120,
  animationDuration = 4,
}) => {
  // Responsive width calculation
  const getResponsiveWidth = () => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) return Math.min(screenWidth * 0.95, 600); // Mobile
      if (screenWidth < 1024) return Math.min(screenWidth * 0.8, 800); // Tablet
      return Math.min(screenWidth * 0.7, 1200); // Desktop
    }
    return 800; // Default for SSR
  };

  const [width, setWidth] = React.useState(getResponsiveWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(getResponsiveWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radius = (width - strokeWidth) / 2;
  const circumference = Math.PI * radius * 1.4;
  const height = radius + strokeWidth * 2;

  return (
    <div className="flex justify-center">
      <svg width={width} height={height} className="overflow-visible">
        {/* Define the gradient */}
        <defs>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="10%" stopColor="#ff6b35" stopOpacity="0.05" />
            <stop offset="25%" stopColor="#ff8c42" stopOpacity="0.1" />
            <stop offset="45%" stopColor="#ffa726" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />{" "}
            {/* Bright white shooting star */}
            <stop offset="52%" stopColor="#ffa726" stopOpacity="0.8" />{" "}
            {/* Bright orange core */}
            <stop offset="55%" stopColor="#ff8c42" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#ff6b35" stopOpacity="0.1" />
            <stop offset="90%" stopColor="#ff6b35" stopOpacity="0.05" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Static base circle (visible base outline) */}
        <path
          d={`M ${strokeWidth / 2 + radius * 0.3} ${
            height - strokeWidth / 2
          } A ${radius} ${radius} 0 1 0 ${
            width - strokeWidth / 2 - radius * 0.3
          } ${height - strokeWidth / 2}`}
          fill="none"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth={strokeWidth}
        />

        <path
          d={`M ${strokeWidth / 2 + radius * 0.3} ${
            height - strokeWidth / 2
          } A ${radius} ${radius} 0 1 0 ${
            width - strokeWidth / 2 - radius * 0.3
          } ${height - strokeWidth / 2}`}
          fill="none"
          stroke="url(#orangeGradient)"
          strokeWidth={strokeWidth + 2}
          strokeLinecap="round"
          strokeDasharray={`${gradientLength} ${
            circumference - gradientLength
          }`}
          style={{
            animation: `travel ${animationDuration}s ease-in-out infinite alternate`,
            strokeDashoffset: 0,
          }}
        />

        <style jsx>{`
          @keyframes travel {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: ${-(circumference - gradientLength)};
            }
          }
        `}</style>
      </svg>
    </div>
  );
};

// Updated component with the animation integrated
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
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <>
      <div className="mb-6 sm:mb-8 absolute -top-180 z-50 left-0 right-0 pointer-events-none">
        <HalfCircleAnimation
          strokeWidth={1}
          gradientLength={150}
          animationDuration={5}
        />
      </div>
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

            {/* Main Heading - Restructured for 2 lines with gradient Success */}
            <div className="mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
              <h1
                className="text-white"
                style={{
                  fontFamily: "Gilroy-Bold",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 8vw, 72px)",
                  lineHeight: "127%",
                  textAlign: "center",
                  letterSpacing: "-0.01em",
                }}
              >
                Strategic Solutions to Drive Your Business{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(92.73deg, #FFFFFF 2.27%, #FF6E1F 198.31%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Success
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="text-white mb-8 sm:mb-12 max-w-3xl mx-auto px-2"
              style={{
                fontFamily: "Gilroy-Medium",
                fontWeight: 500,
                fontSize: "clamp(14px, 4vw, 16px)",
                lineHeight: "140%",
                opacity: "0.9",
              }}
            >
              At Visionex Solutions, we understand that success doesn't come
              from guesswork—it comes from strategy. Whether you're navigating a
              high-stakes bid or trying to reshape your business for growth, our
              role is to be your strategic partner in achieving results that
              matter.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-12 sm:mb-16 md:mb-20">
              <button
                className="transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95"
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
                      fontSize: "16px",
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
        <div className="relative py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 relative z-10">
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
                  className="font-gilroy-bold text-white text-center lg:text-left mb-6 sm:mb-8"
                  style={{
                    fontSize: "clamp(28px, 5vw, 47px)",
                    lineHeight: "1.2",
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
                    <h3
                      className="font-gilroy-bold text-white"
                      style={{
                        fontSize: "24px",
                        lineHeight: "30px",
                      }}
                    >
                      Bid Management
                    </h3>
                    <p
                      className="font-gilroy-medium text-white leading-relaxed"
                      style={{
                        fontSize: "14px",
                        lineHeight: "140%",
                        opacity: "0.8",
                      }}
                    >
                      Interpreting tender requirements to crafting persuasive
                      submissions
                    </p>
                  </div>

                  {/* Business Strategy Consulting */}
                  <div className="space-y-3 text-center sm:text-left">
                    <h3
                      className="font-gilroy-bold text-white"
                      style={{
                        fontSize: "24px",
                        lineHeight: "30px",
                      }}
                    >
                      Business Strategy Consulting
                    </h3>
                    <p
                      className="font-gilroy-medium text-white leading-relaxed"
                      style={{
                        fontSize: "14px",
                        lineHeight: "140%",
                        opacity: "0.8",
                      }}
                    >
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
    </>
  );
};

export default StrategicSolutionsHero;
