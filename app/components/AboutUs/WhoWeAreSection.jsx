const WhoWeAreSection = () => {
  return (
    <div
      className="relative py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: "#09090D" }}
    >
      {/* Background blur effects for this section */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ellipse 155 - Orange blur on image - Responsive positioning */}
        <div
          className="absolute rounded-full"
          style={{
            width: "200px",
            height: "200px",
            right: "-30px",
            top: "150px",
            background: "rgba(255, 110, 31, 0.59)",
            opacity: "0.71",
            filter: "blur(150px)",
            transform: "rotate(-89.98deg)",
            zIndex: 15,
          }}
        ></div>
        {/* Ellipse 158 - Orange vertical blur - Responsive */}
        <div
          className="absolute rounded-full hidden md:block"
          style={{
            width: "60px",
            height: "500px",
            left: "200px",
            top: "80px",
            background: "#FF6E1F",
            opacity: "0.7",
            filter: "blur(150px)",
            transform: "rotate(-89.98deg)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start relative z-10">
          {/* Text Content */}
          <div className="w-full">
            {/* Title with clamp sizing */}
            <h2
              className="font-gilroy-bold text-gray-100 mb-6 sm:mb-8"
              style={{
                fontSize: "clamp(32px, 5vw, 47.44px)",
                lineHeight: "clamp(40px, 6vw, 62.4px)",
                letterSpacing: "-1.2px",
              }}
            >
              Who We Are and
              <br />
              What We Do
            </h2>

            {/* Text Content with clamp sizing */}
            <div className="space-y-4 sm:space-y-6">
              <p
                className="font-gilroy-medium text-white max-w-full lg:max-w-[638px]"
                style={{
                  fontSize: "clamp(14px, 2vw, 16px)",
                  lineHeight: "140%",
                }}
              >
                Visionex Solutions was founded to support businesses in
                navigating complex challenges with precision and expertise.
                Backed by years of industry experience, we work alongside our
                clients to create opportunities, solve problems, and achieve
                goals.
              </p>
              <p
                className="font-gilroy-medium text-white max-w-full lg:max-w-[638px]"
                style={{
                  fontSize: "clamp(14px, 2vw, 16px)",
                  lineHeight: "140%",
                }}
              >
                Led by Hashan Senarathna, a seasoned professional with an
                impressive background in consultancy and strategy, Visionex
                Solutions is committed to building long-lasting partnerships
              </p>
            </div>
          </div>

          {/* Image Section - Responsive */}
          <div className="relative z-10 w-full flex justify-center lg:justify-end">
            {/* Main image container with glass effect - Using exact design specs */}
            <div
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-none"
              style={{
                width: "100%",
                maxWidth: "561px",
                aspectRatio: "561/524",
                boxSizing: "border-box",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
              }}
            >
              {/* Main background image - More border spacing */}
              <div
                className="absolute inset-6 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54))",
                }}
              >
                <img
                  src="/banners/whowearewithchart.svg"
                  alt="Modern office space"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Small overlay image - Hidden on mobile, visible on larger screens */}
              <div
                className="absolute hidden sm:block"
                style={{
                  width: "120px",
                  height: "152px",
                  right: "25px",
                  bottom: "15px",
                }}
              >
                {/* <img
                  src="/api/placeholder/179/227"
                  alt="Team member"
                  className="w-full h-full object-cover rounded-lg"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
