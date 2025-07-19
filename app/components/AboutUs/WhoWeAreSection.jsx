const WhoWeAreSection = () => {
  return (
    <div className="relative py-20" style={{ backgroundColor: "#09090D" }}>
      {/* Background blur effects for this section */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ellipse 155 - Orange blur on image */}
        <div
          className="absolute rounded-full"
          style={{
            width: "291.76px",
            height: "284.75px",
            right: "-50px",
            top: "200px",
            background: "rgba(255, 110, 31, 0.59)",
            opacity: "0.71",
            filter: "blur(200px)",
            transform: "rotate(-89.98deg)",
            zIndex: 15,
          }}
        ></div>

        {/* Ellipse 158 - Orange vertical blur */}
        <div
          className="absolute rounded-full"
          style={{
            width: "84.39px",
            height: "706.41px",
            left: "240px",
            top: "100px",
            background: "#FF6E1F",
            opacity: "0.7",
            filter: "blur(200px)",
            transform: "rotate(-89.98deg)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
          <div className="max-w-md">
            <h2 className="font-gilroy-bold text-h2 text-gray-100 mb-8">
              Who We Are and
              <br />
              What We Do
            </h2>
            <p className="font-gilroy-medium text-body text-white mb-6 max-w-[638px]">
              Visionex Solutions was founded to support businesses in navigating
              complex challenges with precision and expertise. Backed by years
              of industry experience, we work alongside our clients to create
              opportunities, solve problems, and achieve goals.
            </p>
            <p className="font-gilroy-medium text-body text-white max-w-[638px]">
              Led by Hashan Senarathna, a seasoned professional with an
              impressive background in consultancy and strategy, Visionex
              Solutions is committed to building long-lasting partnerships
            </p>
          </div>

          <div className="relative z-10">
            {/* Main image container with glass effect */}
            <div
              className="relative rounded-3xl"
              style={{
                width: "561px",
                height: "524px",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Main background image */}
              <div
                className="absolute rounded-2xl"
                style={{
                  width: "529px",
                  height: "492px",
                  left: "16px",
                  top: "16px",
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54))",
                  borderRadius: "16px",
                }}
              >
                <img
                  src="/banners/whowearewithchart.svg"
                  alt="Modern office space"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Small overlay image */}
              <div
                className="absolute"
                style={{
                  width: "179px",
                  height: "227px",
                  right: "40px",
                  bottom: "20px",
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
