const BusinessThriveSection = () => {
  return (
    <div
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/banners/bg3.svg")',
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with badge */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Our Mission Badge */}
          <div
            className="inline-flex items-center justify-center mb-6 sm:mb-8"
            style={{
              width: "125px",
              height: "50px",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "100px",
              padding: "4px",
            }}
          >
            {/* Sub Container */}
            <div
              className="flex items-center justify-center"
              style={{
                width: "117px",
                height: "42px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                borderRadius: "100px",
                padding: "9px 16px",
              }}
            >
              {/* Text */}
              <span
                className="font-gilroy-semibold text-center"
                style={{
                  fontSize: "16px",
                  lineHeight: "150%",
                  color: "#D6D8DB",
                  whiteSpace: "nowrap",
                }}
              >
                Our Mission
              </span>
            </div>
          </div>

          {/* Title with responsive sizing */}
          <h2
            className="font-gilroy-bold mb-6 sm:mb-8 text-center mx-auto"
            style={{
              fontSize: "clamp(32px, 5vw, 47.44px)",
              lineHeight: "clamp(40px, 6vw, 62.4px)",
              letterSpacing: "-1.2px",
              color: "#F0F0F0",
              maxWidth: "532px",
            }}
          >
            Helping Businesses Thrive
          </h2>

          {/* Description with responsive sizing */}
          <p
            className="font-gilroy-medium text-center mx-auto"
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              lineHeight: "140%",
              color: "#FFFFFF",
              maxWidth: "756px",
            }}
          >
            We begin by listening. Our goal is to understand your current
            situation, business drivers, and long-term vision. Once we're
            aligned, we begin shaping your strategy—whether it's a bid
            submission plan or a business-wide transformation.
          </p>
        </div>

        {/* Charts Section - Mobile: Stack, Desktop: Grid Layout */}
        <div className="relative">
          {/* Mobile Layout - Stack vertically */}
          <div className="flex flex-col gap-8 lg:hidden">
            {/* Card 1 - Client Portfolios */}
            <div className="flex justify-center">
              <div
                className="relative"
                style={{
                  width: "clamp(280px, 90vw, 392px)",
                  height: "clamp(220px, 60vw, 309px)",
                  background: "rgba(255, 255, 255, 0.02)",
                  boxShadow: "inset 0px 0px 26.3px rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  boxSizing: "border-box",
                }}
              >
                {/* Chart SVG - Will be replaced with your export */}
                <div className="absolute inset-4">
                  <img
                    src="/icons/chart-curve.svg"
                    alt="Growth chart"
                    className="w-full h-2/3 object-contain"
                  />
                </div>

                {/* Up Arrow Icon */}
                <div
                  className="absolute"
                  style={{
                    width: "29px",
                    height: "29px",
                    left: "32px",
                    bottom: "57px",
                  }}
                >
                  <svg viewBox="0 0 29 29" fill="none">
                    <path
                      d="M14.5 20.875V8.125M8.125 14.5L14.5 8.125L20.875 14.5"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Stats Section */}
                <div
                  className="absolute flex items-center gap-1"
                  style={{
                    left: "67px",
                    bottom: "57px",
                  }}
                >
                  <span
                    className="font-gilroy-medium"
                    style={{
                      fontSize: "clamp(20px, 4vw, 28px)",
                      lineHeight: "31px",
                      color: "#F0F0F0",
                    }}
                  >
                    10+
                  </span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 3.75V14.25M3.75 9H14.25"
                      stroke="#FA935B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Label */}
                <div
                  className="absolute"
                  style={{
                    left: "67px",
                    bottom: "25px",
                  }}
                >
                  <span
                    className="font-gilroy-medium"
                    style={{
                      fontSize: "clamp(13px, 2vw, 15.125px)",
                      lineHeight: "20px",
                      color: "rgba(240, 240, 240, 0.7)",
                    }}
                  >
                    Client Portfolios
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 - Followers Base */}
            <div className="flex justify-center">
              <div
                className="relative"
                style={{
                  width: "clamp(280px, 90vw, 392px)",
                  height: "clamp(220px, 60vw, 309px)",
                  background: "rgba(255, 255, 255, 0.02)",
                  boxShadow: "inset 0px 0px 26.3px rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  boxSizing: "border-box",
                }}
              >
                {/* Chart SVG - Will be replaced with your export */}
                <div className="absolute inset-4">
                  <img
                    src="/icons/chart-curve.svg"
                    alt="Growth chart"
                    className="w-full h-2/3 object-contain"
                  />
                </div>

                {/* Up Arrow Icon */}
                <div
                  className="absolute"
                  style={{
                    width: "29px",
                    height: "29px",
                    left: "32px",
                    bottom: "57px",
                  }}
                >
                  <svg viewBox="0 0 29 29" fill="none">
                    <path
                      d="M14.5 20.875V8.125M8.125 14.5L14.5 8.125L20.875 14.5"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Stats Section */}
                <div
                  className="absolute flex items-center gap-1"
                  style={{
                    left: "67px",
                    bottom: "57px",
                  }}
                >
                  <span
                    className="font-gilroy-medium"
                    style={{
                      fontSize: "clamp(20px, 4vw, 28px)",
                      lineHeight: "31px",
                      color: "#F0F0F0",
                    }}
                  >
                    300 million
                  </span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 3.75V14.25M3.75 9H14.25"
                      stroke="#FA935B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Label */}
                <div
                  className="absolute"
                  style={{
                    left: "67px",
                    bottom: "25px",
                  }}
                >
                  <span
                    className="font-gilroy-medium"
                    style={{
                      fontSize: "clamp(13px, 2vw, 15.125px)",
                      lineHeight: "20px",
                      color: "rgba(240, 240, 240, 0.7)",
                    }}
                  >
                    Followers Base
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 - Strike Rate */}
            <div className="flex justify-center">
              <div
                className="relative"
                style={{
                  width: "clamp(320px, 90vw, 509px)",
                  height: "clamp(160px, 45vw, 222px)",
                  background: "rgba(255, 255, 255, 0.02)",
                  boxShadow: "inset 0px 0px 26.3px rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  boxSizing: "border-box",
                }}
              >
                {/* Content Container */}
                <div
                  className="absolute flex flex-col gap-3 sm:gap-4"
                  style={{
                    left: "38px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "232px",
                  }}
                >
                  {/* Main Stat */}
                  <div className="flex items-center gap-1">
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "clamp(28px, 5vw, 36px)",
                        lineHeight: "31px",
                        color: "#F0F0F0",
                      }}
                    >
                      20%
                    </span>
                  </div>

                  {/* Labels */}
                  <div className="flex flex-col gap-2">
                    <span
                      className="font-gilroy-bold"
                      style={{
                        fontSize: "clamp(18px, 3vw, 24px)",
                        lineHeight: "20px",
                        color: "rgba(240, 240, 240, 0.7)",
                      }}
                    >
                      Strike Rate
                    </span>
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "clamp(12px, 2vw, 14px)",
                        lineHeight: "20px",
                        color: "rgba(240, 240, 240, 0.7)",
                      }}
                    >
                      Committed to helping companies
                    </span>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div
                  className="absolute"
                  style={{
                    right: "32px",
                    bottom: "32px",
                    width: "32px",
                    height: "32px",
                  }}
                >
                  <svg viewBox="0 0 32 32" fill="none">
                    <path
                      d="M9.33337 22.6667L22.6667 9.33337M22.6667 9.33337H9.33337M22.6667 9.33337V22.6667"
                      stroke="#FF6E1F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Grid with your exact positioning */}
          <div className="hidden lg:grid grid-cols-3 grid-rows-5 gap-0 max-w-6xl mx-auto">
            {/* Position 1: Client Portfolios (row-span-2) */}
            <div className="row-span-2 flex items-center justify-center">
              <div
                className="relative"
                style={{
                  width: "392px",
                  height: "309px",
                  background: "rgba(255, 255, 255, 0.02)",
                  boxShadow: "inset 0px 0px 26.3px rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  boxSizing: "border-box",
                }}
              >
                {/* Chart SVG - Will be replaced with your export */}
                <div className="absolute inset-4">
                  <img
                    src="/icons/chart-curve.svg"
                    alt="Growth chart"
                    className="w-full h-2/3 object-contain"
                  />
                </div>

                {/* Up Arrow Icon */}
                <div
                  className="absolute"
                  style={{
                    width: "29px",
                    height: "29px",
                    left: "32px",
                    bottom: "57px",
                  }}
                >
                  <svg viewBox="0 0 29 29" fill="none">
                    <path
                      d="M14.5 20.875V8.125M8.125 14.5L14.5 8.125L20.875 14.5"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Stats Section */}
                <div
                  className="absolute flex items-center gap-1"
                  style={{
                    left: "67px",
                    bottom: "57px",
                  }}
                >
                  <span
                    className="font-gilroy-medium"
                    style={{
                      fontSize: "28px",
                      lineHeight: "31px",
                      color: "#F0F0F0",
                    }}
                  >
                    10+
                  </span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 3.75V14.25M3.75 9H14.25"
                      stroke="#FA935B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Label */}
                <div
                  className="absolute"
                  style={{
                    left: "67px",
                    bottom: "25px",
                  }}
                >
                  <span
                    className="font-gilroy-medium"
                    style={{
                      fontSize: "15.125px",
                      lineHeight: "20px",
                      color: "rgba(240, 240, 240, 0.7)",
                    }}
                  >
                    Client Portfolios
                  </span>
                </div>
              </div>
            </div>

            {/* Position 2: Center Node (col-start-2 row-start-1 row-span-3) */}
            <div className="col-start-2 row-start-1 row-span-3 flex items-center justify-center">
              {/* This will be replaced with your exported center-node.svg */}
              <img
                src="/icons/center-node.svg"
                alt="Center connecting node"
                className="w-full h-full object-contain max-w-[400px] max-h-[400px]"
              />
            </div>

            {/* Position 3: Followers Base (col-start-3 row-start-1 row-span-2) */}
            <div className="col-start-3 row-start-1 row-span-2 flex items-center justify-center">
              <div
                className="relative"
                style={{
                  width: "392px",
                  height: "309px",
                  background: "rgba(255, 255, 255, 0.02)",
                  boxShadow: "inset 0px 0px 26.3px rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  boxSizing: "border-box",
                }}
              >
                {/* Chart SVG - Will be replaced with your export */}
                <div className="absolute inset-4">
                  <img
                    src="/icons/chart-curve.svg"
                    alt="Growth chart"
                    className="w-full h-2/3 object-contain"
                  />
                </div>

                {/* Up Arrow Icon */}
                <div
                  className="absolute"
                  style={{
                    width: "29px",
                    height: "29px",
                    left: "32px",
                    bottom: "57px",
                  }}
                >
                  <svg viewBox="0 0 29 29" fill="none">
                    <path
                      d="M14.5 20.875V8.125M8.125 14.5L14.5 8.125L20.875 14.5"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Stats Section */}
                <div
                  className="absolute flex items-center gap-1"
                  style={{
                    left: "67px",
                    bottom: "57px",
                  }}
                >
                  <span
                    className="font-gilroy-medium"
                    style={{
                      fontSize: "28px",
                      lineHeight: "31px",
                      color: "#F0F0F0",
                    }}
                  >
                    300 million
                  </span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 3.75V14.25M3.75 9H14.25"
                      stroke="#FA935B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Label */}
                <div
                  className="absolute"
                  style={{
                    left: "67px",
                    bottom: "25px",
                  }}
                >
                  <span
                    className="font-gilroy-medium"
                    style={{
                      fontSize: "15.125px",
                      lineHeight: "20px",
                      color: "rgba(240, 240, 240, 0.7)",
                    }}
                  >
                    Followers Base
                  </span>
                </div>
              </div>
            </div>

            {/* Position 4: Strike Rate (col-start-2 row-start-4 row-span-2) */}
            <div className="col-start-2 row-start-4 row-span-2 flex items-start justify-center">
              <div
                className="relative"
                style={{
                  width: "509px",
                  height: "222px",
                  background: "rgba(255, 255, 255, 0.02)",
                  boxShadow: "inset 0px 0px 26.3px rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  boxSizing: "border-box",
                }}
              >
                {/* Content Container */}
                <div
                  className="absolute flex flex-col gap-4"
                  style={{
                    left: "38px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "232px",
                  }}
                >
                  {/* Main Stat */}
                  <div className="flex items-center gap-1">
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "36px",
                        lineHeight: "31px",
                        color: "#F0F0F0",
                      }}
                    >
                      20%
                    </span>
                  </div>

                  {/* Labels */}
                  <div className="flex flex-col gap-2">
                    <span
                      className="font-gilroy-bold"
                      style={{
                        fontSize: "24px",
                        lineHeight: "20px",
                        color: "rgba(240, 240, 240, 0.7)",
                      }}
                    >
                      Strike Rate
                    </span>
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "rgba(240, 240, 240, 0.7)",
                      }}
                    >
                      Committed to helping companies
                    </span>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div
                  className="absolute"
                  style={{
                    right: "32px",
                    bottom: "32px",
                    width: "32px",
                    height: "32px",
                  }}
                >
                  <svg viewBox="0 0 32 32" fill="none">
                    <path
                      d="M9.33337 22.6667L22.6667 9.33337M22.6667 9.33337H9.33337M22.6667 9.33337V22.6667"
                      stroke="#FF6E1F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Orange blur effect */}
                <div
                  className="absolute"
                  style={{
                    right: "-20%",
                    top: "12%",
                    width: "60px",
                    height: "60px",
                    background: "rgba(255, 110, 31, 0.28)",
                    filter: "blur(100px)",
                    transform: "rotate(25.86deg)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessThriveSection;
