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
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 15%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.06) 70%, rgba(255,255,255,0.03) 85%, transparent 100%)",
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

          {/* Right Column - Image with Glass Border */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Small Ellipse Gradient - On top of images */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-25">
              <img
                src="/gradients/ellipse-small.svg"
                alt=""
                className="w-auto h-auto"
              />
            </div>

            {/* Glass Border Container */}
            <div
              className="relative overflow-hidden z-20"
              style={{
                width: "100%",
                maxWidth: "32rem", // max-w-lg equivalent
                height: "400px", // Fixed height for train animation
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(25px)",
                border: "10px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "32px",
                boxShadow: `
                  0 12px 40px 0 rgba(0, 0, 0, 0.5),
                  inset 0 2px 4px rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              {/* Train Container - All images in a row */}
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  width: `${(features.length - 1) * 100}%`, // Only first 3 images
                  height: "100%",
                  transform: `translateX(-${
                    activeIndex * (100 / (features.length - 1))
                  }%)`,
                }}
              >
                {/* Only render first 3 images */}
                {features.slice(0, 3).map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full h-full flex items-center justify-center"
                    style={{
                      width: `${100 / (features.length - 1)}%`,
                    }}
                  >
                    <img
                      src={`/banners/features/${index + 1}.svg`}
                      alt={`Feature ${index + 1}`}
                      className="w-full h-full object-cover"
                      style={{
                        borderRadius: "24px",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Removed unused slideInLeft animation */
      `}</style>
    </div>
  );
};

export default WhyChooseVisionexSection;
