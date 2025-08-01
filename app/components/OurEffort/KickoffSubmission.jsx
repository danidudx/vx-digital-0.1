const BidManagementSection = () => {
  return (
    <div
      className="relative py-16 md:py-24 lg:py-32"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/banners/bg3.png")',
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with badges */}
        <div className="text-center mb-16">
          {/* Badge Container */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex justify-center mb-16 md:mb-20 lg:mb-24 px-4"></div>
          </div>

          {/* Title */}
          <h2 className="font-gilroy-bold mb-8 text-center text-2xl md:text-3xl lg:text-[47.4375px] leading-tight md:leading-[50px] lg:leading-[62px] tracking-[-0.5px] md:tracking-[-0.8px] lg:tracking-[-1.2px] text-[#F0F0F0] max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto">
            Bid Management: From Kick-Off to Submission
          </h2>

          {/* Description */}
          <p className="font-gilroy-medium text-center mx-auto text-sm md:text-base leading-[140%] text-white max-w-[500px] md:max-w-[650px] lg:max-w-[756px] px-4">
            We begin by listening. Our goal is to understand your current
            situation, business drivers, and long-term vision. Once we're
            aligned, we begin shaping your strategy—whether it's a bid
            submission plan or a business-wide transformation.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-16 md:mb-20 lg:mb-24 px-4">
          <div
            className="animated-gradient-border rounded-full"
            style={{
              width: "min(351px, calc(100vw - 32px))",
              height: "72px",
              padding: "1px",
            }}
          >
            {/* Inner container with glass effect */}
            <div
              className="flex items-center justify-center rounded-full w-full h-full"
              style={{
                background: "#343436",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                padding: "8px",
              }}
            >
              {/* Active Tab - Bid Management */}
              <div className="flex-1 h-full">
                <div
                  className="flex items-center justify-center rounded-full h-full relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255, 255, 255, 0.07) 0%, rgba(153, 153, 153, 0.07) 100%)",
                  }}
                >
                  {/* Orange blur effect */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: "74px",
                      height: "17px",
                      background: "#FF6E1F",
                      filter: "blur(30px)",
                    }}
                  ></div>
                  <span
                    className="font-gilroy-semibold relative z-10 text-center px-3"
                    style={{
                      fontSize: "clamp(12px, 2.5vw, 16px)",
                      lineHeight: "150%",
                      color: "#D6D8DB",
                    }}
                  >
                    Bid Management
                  </span>
                </div>
              </div>

              {/* Spacing between tabs */}
              <div style={{ width: "8px" }}></div>

              {/* Inactive Tab - Business Strategy */}
              <div className="flex-1 h-full">
                <div className="flex items-center justify-center h-full">
                  <span
                    className="font-gilroy-semibold text-center px-3"
                    style={{
                      fontSize: "clamp(12px, 2.5vw, 16px)",
                      lineHeight: "150%",
                      color: "#D6D8DB",
                    }}
                  >
                    Business Strategy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 xl:grid-cols-[46%_54%] gap-6 md:gap-8 lg:gap-12 items-stretch max-w-[1400px] mx-auto">
          {/* Left Column - Tender Submission */}
          <div className="relative w-full">
            {/* Tender Submission Card */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.09)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "32px",
                minHeight: "600px",
              }}
            >
              {/* Background Eclipse Gradient - Static */}
              <div
                className="absolute"
                style={{
                  top: "10px",
                  left: "-150px",
                  width: "600px",
                  height: "600px",
                  backgroundImage: 'url("/gradients/Eclipse.png")',
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  opacity: 0.8,
                  zIndex: 1,
                }}
              />

              {/* Moving Eclipse Gradient */}
              <div
                className="absolute eclipse-floating"
                style={{
                  top: "200px",
                  right: "-200px",
                  width: "700px",
                  height: "700px",
                  backgroundImage: 'url("/gradients/Eclipse.png")',
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  opacity: 0.4,
                  zIndex: 1,
                }}
              />

              {/* Custom CSS for animations */}
              <style>{`
                @keyframes eclipse-float {
                  0% { 
                    transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); 
                  }
                  8% { 
                    transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); 
                  }
                  15% { 
                    transform: translateY(-80px) translateX(60px) scale(1.1) rotate(15deg); 
                  }
                  23% { 
                    transform: translateY(-80px) translateX(60px) scale(1.1) rotate(15deg); 
                  }
                  30% { 
                    transform: translateY(-40px) translateX(-90px) scale(0.9) rotate(-10deg); 
                  }
                  38% { 
                    transform: translateY(-40px) translateX(-90px) scale(0.9) rotate(-10deg); 
                  }
                  45% { 
                    transform: translateY(70px) translateX(40px) scale(1.05) rotate(25deg); 
                  }
                  53% { 
                    transform: translateY(70px) translateX(40px) scale(1.05) rotate(25deg); 
                  }
                  60% { 
                    transform: translateY(-60px) translateX(-70px) scale(0.95) rotate(-20deg); 
                  }
                  68% { 
                    transform: translateY(-60px) translateX(-70px) scale(0.95) rotate(-20deg); 
                  }
                  75% { 
                    transform: translateY(50px) translateX(80px) scale(1.08) rotate(30deg); 
                  }
                  83% { 
                    transform: translateY(50px) translateX(80px) scale(1.08) rotate(30deg); 
                  }
                  90% { 
                    transform: translateY(-90px) translateX(-50px) scale(0.92) rotate(-15deg); 
                  }
                  98% { 
                    transform: translateY(-90px) translateX(-50px) scale(0.92) rotate(-15deg); 
                  }
                  100% { 
                    transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); 
                  }
                }
                
                .eclipse-floating {
                  animation: eclipse-float 16s ease-in-out infinite;
                }
              `}</style>

              {/* Content - with higher z-index */}
              <div className="relative z-10">
                {/* Title */}
                <h3
                  className="font-gilroy-bold mb-2"
                  style={{
                    fontSize: "24px",
                    lineHeight: "31px",
                    color: "#F0F0F0",
                    marginBottom: "8px",
                  }}
                >
                  Tender submission for Dummy Text
                </h3>

                {/* Subtitle */}
                <p
                  className="font-gilroy-medium mb-6"
                  style={{
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#FFFFFF",
                    marginBottom: "24px",
                  }}
                >
                  Secured a high-value contract by creating a comprehensive...
                </p>

                {/* Divider Line */}
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background: "rgba(255, 255, 255, 0.3)",
                    marginBottom: "16px",
                  }}
                />

                {/* Main Description with Eclipse Gradient Behind */}
                <div className="mb-6 relative">
                  <p
                    className="font-gilroy-medium relative z-10"
                    style={{
                      fontSize: "16px",
                      lineHeight: "140%",
                      color: "#FFFFFF",
                      marginBottom: "24px",
                    }}
                  >
                    We're not the biggest. We're not the flashiest. But we are
                    relentless when it comes to delivering value.With Visionex
                    Solutions, you're not just hiring a service—you're building
                    a strategic partnership, fully committed to your business
                    growth.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-5 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img
                        src="/icons/icon1.png"
                        alt="Feature icon"
                        className="w-full h-full"
                      />
                    </div>
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "15.125px",
                        lineHeight: "20px",
                        color: "#F0F0F0",
                      }}
                    >
                      Experience & Precision
                    </span>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "rgba(255, 255, 255, 0.29)",
                    }}
                  />

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img
                        src="/icons/icon1.png"
                        alt="Feature icon"
                        className="w-full h-full"
                      />
                    </div>
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "15.125px",
                        lineHeight: "20px",
                        color: "#F0F0F0",
                      }}
                    >
                      Collaboration Over Consultation
                    </span>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "rgba(255, 255, 255, 0.29)",
                    }}
                  />

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img
                        src="/icons/icon1.png"
                        alt="Feature icon"
                        className="w-full h-full"
                      />
                    </div>
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "15.125px",
                        lineHeight: "20px",
                        color: "#F0F0F0",
                      }}
                    >
                      Execution Over Advice
                    </span>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "rgba(255, 255, 255, 0.29)",
                    }}
                  />

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img
                        src="/icons/icon1.png"
                        alt="Feature icon"
                        className="w-full h-full"
                      />
                    </div>
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "15.125px",
                        lineHeight: "20px",
                        color: "#F0F0F0",
                      }}
                    >
                      Results That Matter
                    </span>
                  </div>
                </div>

                {/* Divider Lines */}
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background: "rgba(255, 255, 255, 0.29)",
                    marginBottom: "24px",
                  }}
                />

                {/* Description */}
                <div className="mb-8">
                  <p
                    className="font-gilroy-medium mb-4"
                    style={{
                      fontSize: "16px",
                      lineHeight: "140%",
                      color: "#FFFFFF",
                      marginBottom: "16px",
                    }}
                  >
                    BidWise Pro is a comprehensive consultation platform
                    designed to support small to medium businesses and
                    contractors in managing their bids, improving their business
                    operations, and winning more projects. The website serves as
                    a digital hub for strategic planning, real-time
                    collaboration, and expert consultation related to bidding
                    processes and business growth.
                  </p>
                  <p
                    className="font-gilroy-medium"
                    style={{
                      fontSize: "16px",
                      lineHeight: "140%",
                      color: "#FFFFFF",
                    }}
                  >
                    digital hub for strategic planning, real-time collaboration,
                    and expert consultation related to bidding processes and
                    business growth.
                  </p>
                </div>

                {/* Divider Lines */}
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background: "rgba(255, 255, 255, 0.29)",
                    marginBottom: "16px",
                  }}
                />

                {/* Project Info */}
                <div className="flex items-end justify-between mb-6">
                  <div className="flex flex-col">
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "16px",
                        lineHeight: "31px",
                        color: "#F0F0F0",
                      }}
                    >
                      Duration
                    </span>
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "24px",
                        lineHeight: "31px",
                        color: "#F0F0F0",
                      }}
                    >
                      4 Weeks
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "16px",
                        lineHeight: "31px",
                        color: "#F0F0F0",
                      }}
                    >
                      Client
                    </span>
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "24px",
                        lineHeight: "31px",
                        color: "#F0F0F0",
                      }}
                    >
                      BidWise Pro
                    </span>
                  </div>
                  <button
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "#4A4A4A",
                      border: "none",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/png"
                    >
                      <path
                        d="M10 4V16M4 10H16"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Final Divider */}
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background: "rgba(255, 255, 255, 0.29)",
                    marginBottom: "16px",
                  }}
                />

                {/* Navigation */}
                <div
                  className="flex items-center justify-between"
                  style={{ transform: "scaleX(-1)" }}
                >
                  <div
                    className="flex items-center gap-2"
                    style={{ transform: "scaleX(-1)" }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/png"
                      style={{ transform: "scaleX(-1)" }}
                    >
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "#F0F0F0",
                      }}
                    >
                      Next Project
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2"
                    style={{ transform: "scaleX(-1)" }}
                  >
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "#F0F0F0",
                      }}
                    >
                      Previous Project
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/png"
                    >
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image with Glass Border */}
          <div className="relative h-full w-full">
            <div
              className="relative h-full"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.09)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "clamp(12px, 3vw, 20px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/banners/techdoc.png"
                alt="Technical Documentation"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidManagementSection;
