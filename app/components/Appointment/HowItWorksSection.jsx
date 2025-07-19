const HowItWorksSection = () => {
  const steps = [
    {
      image: "/banners/1bn.svg",
      side: "right",
    },
    {
      image: "/banners/2bn.svg",
      side: "left",
    },
    {
      image: "/banners/3bn.svg",
      side: "right",
    },
  ];

  return (
    <div
      className="relative py-16 md:py-20 lg:py-24"
      style={{
        backgroundColor: "#09090D",
        minHeight: "800px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Title */}
        <h2 className="font-gilroy-bold text-center mb-16 lg:mb-20 text-h2 text-gray-100">
          How it's Works
        </h2>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full"
            style={{
              width: "2px",
              background: "rgba(255, 255, 255, 0.3)",
              top: "0",
              bottom: "0",
            }}
          />

          {/* Timeline Steps */}
          <div className="space-y-24 lg:space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  step.side === "left" ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 z-20"
                  style={{
                    width: "16px",
                    height: "16px",
                    background: "#FFFFFF",
                    borderRadius: "50%",
                    border: "4px solid #09090D",
                  }}
                />

                {/* Content Container */}
                <div
                  className={`relative ${
                    step.side === "left" ? "pr-8 lg:pr-16" : "pl-8 lg:pl-16"
                  }`}
                  style={{
                    width: "50%",
                  }}
                >
                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      className="w-full h-auto max-w-md lg:max-w-lg"
                      style={{
                        filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.3))",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
