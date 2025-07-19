const WhyChooseVisionexSection2 = () => {
  const features = [
    {
      title: "Experience & Precision",
      description:
        "We bring a unique mix of industry expertise, meticulous execution, and practical solutions.",
      illustration: "/icons/cardbox.svg",
    },
    {
      title: "Collaboration Over Consultation",
      description:
        "We don't just consult; we work alongside you to achieve real impact.",
      illustration: "/icons/collab.svg",
    },
    {
      title: "Execution Over Advice",
      description:
        "We don't stop at recommendations; we implement strategies that drive success.",
      illustration: "/icons/advice.svg",
    },
    {
      title: "Results That Matter",
      description:
        "At Visionex Solutions, we understand that success doesn't come from guesswork—it comes from strategy. Whether you're navigating a high-stakes bid or trying to",
      illustration: "/icons/results.svg",
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
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-gilroy-bold text-h2 text-white">
            Why Choose Visionex – What Makes Us Different
          </h2>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-6 lg:gap-8 h-[600px]">
          {/* Experience & Precision - Large left card (spans 2 rows) */}
          <div
            className="row-span-2 col-start-1 relative group "
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Illustration */}
            <div className="flex justify-center mb-6 flex-grow">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={features[0].illustration}
                  alt={features[0].title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="">
              <h3
                className="font-gilroy-bold text-white mb-3"
                style={{
                  fontSize: "20px",
                  lineHeight: "26px",
                }}
              >
                {features[0].title}
              </h3>
              <p
                className="font-gilroy-medium text-white"
                style={{
                  fontSize: "14px",
                  lineHeight: "140%",
                  opacity: "0.8",
                }}
              >
                {features[0].description}
              </p>
            </div>
          </div>

          {/* Collaboration Over Consultation - Top middle card */}
          <div
            className="col-start-2 relative group justify-center"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Illustration */}
            <div className="flex justify-center mb-4">
              <div className="relative w-full h-24 flex items-center justify-center">
                <img
                  src={features[1].illustration}
                  alt={features[1].title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mt-2">
              <h3
                className="font-gilroy-bold text-white mb-2"
                style={{
                  fontSize: "18px",
                  lineHeight: "24px",
                }}
              >
                {features[1].title}
              </h3>
              <p
                className="font-gilroy-medium text-white"
                style={{
                  fontSize: "12px",
                  lineHeight: "140%",
                  opacity: "0.8",
                }}
              >
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Execution Over Advice - Top right card */}
          <div
            className="col-start-3 relative group justify-center"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Illustration */}
            <div className="flex justify-center mb-4">
              <div className="relative w-full h-24 flex items-center justify-center">
                <img
                  src={features[2].illustration}
                  alt={features[2].title}
                  className="max-w-full max-h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="mt-2">
              <h3
                className="font-gilroy-bold text-white mb-2"
                style={{
                  fontSize: "18px",
                  lineHeight: "24px",
                }}
              >
                {features[2].title}
              </h3>
              <p
                className="font-gilroy-medium text-white"
                style={{
                  fontSize: "12px",
                  lineHeight: "140%",
                  opacity: "0.8",
                }}
              >
                {features[2].description}
              </p>
            </div>
          </div>

          {/* Results That Matter - Bottom wide card (spans 2 columns) */}
          <div
            className="col-span-2 col-start-2 row-start-2 relative group"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Content positioned at top-right */}
            <div
              className="absolute top-8 right-8 z-10"
              style={{ maxWidth: "60%" }}
            >
              <h3
                className="font-gilroy-bold text-white mb-3"
                style={{
                  fontSize: "20px",
                  lineHeight: "26px",
                }}
              >
                {features[3].title}
              </h3>
              <p
                className="font-gilroy-medium text-white"
                style={{
                  fontSize: "14px",
                  lineHeight: "140%",
                  opacity: "0.8",
                }}
              >
                {features[3].description}
              </p>
            </div>

            {/* Illustration positioned to fill from bottom-left */}
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-start">
              <img
                src={features[3].illustration}
                alt={features[3].title}
                className="w-auto h-auto max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseVisionexSection2;
