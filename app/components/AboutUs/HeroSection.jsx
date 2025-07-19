const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/backgrounds/heroback2.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10 h-full">
        {/* Header with About Us Badge */}
        <div className="pt-48 pb-8">
          <div className="flex justify-center">
            {/* About Us Badge Container */}
            <div
              className="flex flex-col items-start"
              style={{
                width: "203px",
                height: "50px",
                padding: "4px",
                background: "rgba(255, 255, 255, 0.02)",
                borderRadius: "100px",
                gap: "10px",
              }}
            >
              {/* Sub Container */}
              <div
                className="flex items-center"
                style={{
                  width: "195px",
                  height: "42px",
                  padding: "9px 16px",
                  gap: "16px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                  borderRadius: "100px",
                }}
              >
                {/* Content Container */}
                <div
                  className="flex items-center"
                  style={{
                    width: "163px",
                    height: "24px",
                    gap: "8px",
                  }}
                >
                  {/* Logo */}
                  <div
                    className="relative flex-shrink-0"
                    style={{
                      width: "22px",
                      height: "22px",
                      filter:
                        "drop-shadow(0px 3.40741px 2.64074px rgba(0, 0, 0, 0.2)) drop-shadow(0px 1.7037px 1.7037px rgba(0, 0, 0, 0.6)) drop-shadow(0px 0.851852px 0.851852px rgba(0, 0, 0, 0.6)) drop-shadow(0px 3.32096px 25.5556px rgba(0, 0, 0, 0.17)) drop-shadow(0px 9.48844px 60.7261px rgba(0, 0, 0, 0.7))",
                    }}
                  >
                    {/* Logo SVG with Gradients */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="gradient1"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="48.48%" stopColor="#FFFFFF" />
                          <stop
                            offset="90.29%"
                            stopColor="rgba(255, 255, 255, 0.5)"
                          />
                        </linearGradient>
                        <linearGradient
                          id="gradient2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="16.09%" stopColor="#FFFFFF" />
                          <stop
                            offset="90.69%"
                            stopColor="rgba(255, 255, 255, 0.5)"
                          />
                        </linearGradient>
                      </defs>
                      {/* Left part */}
                      <path
                        d="M0.01 1.46C0.01 1.46 8.25 6.62 20.17 20.56"
                        fill="url(#gradient1)"
                        style={{
                          position: "absolute",
                          left: "0.04%",
                          right: "8.25%",
                          top: "6.62%",
                          bottom: "0.03%",
                        }}
                      />
                      {/* Right part */}
                      <path
                        d="M12.55 0.01C12.55 0.01 21.98 0.01 21.98 10.84"
                        fill="url(#gradient2)"
                        style={{
                          position: "absolute",
                          left: "57.05%",
                          right: "-0.02%",
                          top: "0.01%",
                          bottom: "50.75%",
                          boxShadow:
                            "0px -0.851852px 4.25926px rgba(255, 255, 255, 0.25)",
                        }}
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <span
                    className="font-gilroy-semibold"
                    style={{
                      width: "133px",
                      height: "24px",
                      fontSize: "16px",
                      lineHeight: "150%",
                      textAlign: "center",
                      color: "#D6D8DB",
                    }}
                  >
                    Visionex Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="pb-20">
          <div className="relative">
            <h1 className="font-gilroy-bold text-h1 text-center text-white mb-8">
              Empowering Your Business
              <br />
              Through Strategic Expertise
            </h1>
            <div
              className="relative w-full h-96 rounded-lg"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="absolute inset-2 rounded-lg">
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
