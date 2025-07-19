import React, { useState, useEffect } from "react";

const WhyChooseVisionexSection = () => {
  const features = [
    "Experience & Precision",
    "Collaboration Over Consultation",
    "Execution Over Advice",
    "Results That Matter",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % (features.length - 1); // Skip last item
        return nextIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div
      className="relative py-16 md:py-20 lg:py-24"
      style={{
        backgroundColor: "#09090D",
        minHeight: "600px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="relative space-y-8">
            {/* Title */}
            <h2 className="font-gilroy-bold text-h2 text-white">
              Why Choose Visionex
              <br />– What Makes Us Different
            </h2>

            {/* Description */}
            <p
              className="font-medium text-white"
              style={{
                fontSize: "16px",
                lineHeight: "140%",
                opacity: "0.9",
                maxWidth: "500px",
              }}
            >
              We're not the biggest. We're not the flashiest. But we are
              relentless when it comes to delivering value. With Visionex
              Solutions, you're not just hiring a service—you're building a
              strategic partnership, fully committed to your business growth.
            </p>

            {/* Left Gradient - Below paragraph */}
            <div
              className="absolute left-0"
              style={{ top: "280px", zIndex: -1 }}
            >
              <img
                src="/gradients/gradient1.svg"
                alt=""
                className="w-auto h-auto opacity-60"
              />
            </div>

            {/* Features List */}
            <div className="space-y-0 pt-4 relative">
              {/* Single Animated Rectangle that moves between positions */}
              <div
                className="absolute rounded-md transition-all duration-1000 ease-in-out"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 15%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.1) 70%, rgba(255,255,255,0.05) 85%, transparent 100%)",
                  left: "-16px",
                  right: "-16px",
                  height: "66px",
                  borderRadius: "8px",
                  transform: `translateY(${activeIndex * 66}px)`, // Move to active position
                  zIndex: 1,
                }}
              />

              {features.map((feature, index) => (
                <div key={index}>
                  <div
                    className="flex items-center gap-4 relative"
                    style={{
                      minHeight: "66px", // Ensures consistent height
                      zIndex: 10,
                    }}
                  >
                    {/* Bullet Icon */}
                    <div className="flex-shrink-0 relative z-10">
                      <img src="/icons/icon1.svg" alt="" className="w-6 h-6" />
                    </div>

                    {/* Feature Text */}
                    <span
                      className="font-gilroy-medium text-white relative z-10"
                      style={{
                        fontSize: "16px",
                        lineHeight: "140%",
                      }}
                    >
                      {feature}
                    </span>
                  </div>

                  {/* Divider Line - Only show between items, not after the last one */}
                  {index < features.length - 1 && (
                    <div
                      className="w-full h-px relative z-5"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)",
                        margin: "0",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Right Gradient - On top of image */}
            <div className="absolute top-0 right-0 z-10">
              <img
                src="/gradients/gradient2.svg"
                alt=""
                className="w-auto h-auto opacity-50"
              />
            </div>

            {/* Main Image */}
            <div className="relative overflow-hidden">
              <img
                key={activeIndex} // Force re-render for animation
                src={`/banners/features/${activeIndex + 1}.svg`}
                alt="Business professionals in meeting"
                className="w-full h-auto max-w-lg rounded-lg transition-all duration-1000 ease-in-out"
                style={{
                  animation: "slideInLeft 1000ms ease-in-out",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0.7;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseVisionexSection;
