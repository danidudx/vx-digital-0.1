const OurApproachSection = () => {
  return (
    <div className="relative py-20" style={{ backgroundColor: "#09090D" }}>
      {/* Background blur effects for this section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orange blur effect - Ellipse 160 - moved up and reduced opacity */}
        <div
          className="absolute rounded-full"
          style={{
            width: "84.39px",
            height: "706.41px",
            left: "63%",
            top: "-15%",
            background: "#FF6E1F",
            opacity: "0.3",
            filter: "blur(200px)",
            transform: "rotate(-89.98deg)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start relative z-10">
          {/* Left side - Image container */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div
              className="relative w-full aspect-square"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
              }}
            >
              {/* Inner image container */}
              <div
                className="absolute inset-2 rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* png Image */}
                <img
                  src="/banners/banner2.png"
                  alt="Our Approach Visualization"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content with exact positioning */}
          <div className="relative w-full">
            {/* Title */}
            <h2
              className="font-gilroy-bold mb-6 md:mb-8"
              style={{
                fontSize: "clamp(32px, 5vw, 47.4375px)",
                lineHeight: "clamp(40px, 6vw, 62px)",
                letterSpacing: "-1.2px",
                color: "#F0F0F0",
              }}
            >
              Our Approach
            </h2>

            {/* Description */}
            <p
              className="font-gilroy-medium mb-8 md:mb-12"
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
                lineHeight: "140%",
                color: "#FFFFFF",
              }}
            >
              Visionex Solutions was founded to support businesses in navigating
              complex challenges with precision and expertise. Backed by years
              of industry experience, we work alongside our clients to create
              opportunities, solve problems, and achieve goals.
            </p>

            {/* Content with connected borders */}
            <div className="relative">
              {/* Vertical line indicator */}
              <div
                className="absolute"
                style={{
                  width: "1px",
                  height: "100%",
                  left: "0px",
                  top: "0px",
                  background: "rgba(255, 255, 255, 0.5)",
                }}
              ></div>

              {/* Orange line segment for active section */}
              <div
                className="absolute"
                style={{
                  width: "1px",
                  height: "clamp(80px, 15vw, 127px)",
                  left: "0px",
                  top: "0px",
                  background: "#FF6E1F",
                }}
              ></div>

              {/* Content sections */}
              <div className="pl-6 md:pl-8">
                {/* Understanding Your Goals */}
                <div className="mb-6 md:mb-8">
                  <h3
                    className="font-gilroy-medium mb-3 md:mb-4"
                    style={{
                      fontSize: "clamp(20px, 3vw, 24px)",
                      lineHeight: "clamp(26px, 4vw, 31px)",
                      color: "#F0F0F0",
                    }}
                  >
                    Understanding Your Goals
                  </h3>
                  <p
                    className="font-gilroy-medium mb-4 md:mb-6"
                    style={{
                      fontSize: "clamp(13px, 2vw, 15.125px)",
                      lineHeight: "clamp(18px, 2.5vw, 20px)",
                      color: "rgba(240, 240, 240, 0.7)",
                    }}
                  >
                    At Visionex Solutions, we understand that success doesn't
                    come from guesswork—it comes from strategy. Whether you're
                    navigating a high-stakes bid or trying to
                  </p>
                </div>

                {/* Connected horizontal line */}
                <div
                  className="mb-4 md:mb-6"
                  style={{
                    height: "1px",
                    background: "rgba(255, 255, 255, 0.5)",
                    width: "100%",
                    maxWidth: "849px",
                    marginLeft: "clamp(-24px, -4vw, -32px)",
                  }}
                ></div>

                {/* Customised Strategies */}
                <div className="mb-4 md:mb-6">
                  <h3
                    className="font-gilroy-medium"
                    style={{
                      fontSize: "clamp(20px, 3vw, 24px)",
                      lineHeight: "clamp(26px, 4vw, 31px)",
                      color: "#F0F0F0",
                    }}
                  >
                    Customised Strategies
                  </h3>
                </div>

                {/* Connected horizontal line */}
                <div
                  className="mb-4 md:mb-6"
                  style={{
                    height: "1px",
                    background: "rgba(255, 255, 255, 0.5)",
                    width: "100%",
                    maxWidth: "849px",
                    marginLeft: "clamp(-24px, -4vw, -32px)",
                  }}
                ></div>

                {/* Delivering Results */}
                <div>
                  <h3
                    className="font-gilroy-medium"
                    style={{
                      fontSize: "clamp(20px, 3vw, 24px)",
                      lineHeight: "clamp(26px, 4vw, 31px)",
                      color: "#F0F0F0",
                    }}
                  >
                    Delivering Results
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproachSection;
