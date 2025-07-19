const WhyChooseVisionexSection = () => {
  const features = [
    "Experience & Precision",
    "Collaboration Over Consultation",
    "Execution Over Advice",
    "Results That Matter",
  ];

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
              className="font-gilroy-medium text-white"
              style={{
                fontSize: "16px",
                lineHeight: "140%",
                opacity: "0.9",
                maxWidth: "500px",
              }}
            >
              We're not the biggest. We're not the flashiest. But we are
              relentless when it comes to delivering value.With Visionex
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
            <div className="space-y-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  {/* Bullet Icon */}
                  <div className="flex-shrink-0">
                    <img src="/icons/icon1.svg" alt="" className="w-6 h-6" />
                  </div>

                  {/* Feature Text */}
                  <span
                    className="font-gilroy-medium text-white"
                    style={{
                      fontSize: "16px",
                      lineHeight: "140%",
                    }}
                  >
                    {feature}
                  </span>
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
            <div className="relative">
              <img
                src="/banners/homebn2.svg"
                alt="Business professionals in meeting"
                className="w-full h-auto max-w-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseVisionexSection;
