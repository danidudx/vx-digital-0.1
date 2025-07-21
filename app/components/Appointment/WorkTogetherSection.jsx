const WorkTogetherSection = () => {
  return (
    <div
      className="relative py-24 md:py-32 lg:py-40 flex items-center overflow-hidden"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/backgrounds/heroback2.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "70vh", // 70% of viewport height
      }}
    >
      {/* Animated Line Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Line 1 */}
        <img
          src="/backgrounds/line1.svg"
          alt=""
          className="absolute h-full w-auto opacity-70 brightness-125"
          style={{
            left: "15%",
            animation: "moveLeftRight1 20s ease-in-out infinite",
            filter: "brightness(1.3) contrast(1.2)",
          }}
        />

        {/* Line 2 */}
        <img
          src="/backgrounds/line2.svg"
          alt=""
          className="absolute h-full w-auto opacity-60 brightness-110"
          style={{
            left: "35%",
            animation: "moveLeftRight2 25s ease-in-out infinite 5s",
            filter: "brightness(1.2) contrast(1.1)",
          }}
        />

        {/* Line 3 */}
        <img
          src="/backgrounds/line3.svg"
          alt=""
          className="absolute h-full w-auto opacity-65 brightness-115"
          style={{
            left: "55%",
            animation: "moveLeftRight3 30s ease-in-out infinite 10s",
            filter: "brightness(1.25) contrast(1.15)",
          }}
        />

        {/* Line 4 */}
        <img
          src="/backgrounds/line4.svg"
          alt=""
          className="absolute h-full w-auto opacity-55 brightness-120"
          style={{
            left: "75%",
            animation: "moveLeftRight4 22s ease-in-out infinite 15s",
            filter: "brightness(1.4) contrast(1.3)",
          }}
        />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes moveLeftRight1 {
          0%,
          100% {
            transform: translateX(-80vw);
          }
          50% {
            transform: translateX(80vw);
          }
        }

        @keyframes moveLeftRight2 {
          0%,
          100% {
            transform: translateX(70vw);
          }
          50% {
            transform: translateX(-70vw);
          }
        }

        @keyframes moveLeftRight3 {
          0%,
          100% {
            transform: translateX(-75vw);
          }
          50% {
            transform: translateX(75vw);
          }
        }

        @keyframes moveLeftRight4 {
          0%,
          100% {
            transform: translateX(85vw);
          }
          50% {
            transform: translateX(-85vw);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center w-full">
          {/* Customer Images and Reviews - Single Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 md:mb-12">
            {/* Customer Images */}
            <div className="flex-shrink-0">
              <img
                src="/icons/csim.svg"
                alt="Happy Customers"
                className="h-14 sm:h-16 md:h-20 w-auto"
              />
            </div>

            {/* Stars and Text Column */}
            <div className="flex flex-col items-center sm:items-start gap-2">
              {/* 5 Stars */}
              <div
                className="flex items-center gap-1"
                aria-label="5 out of 5 stars"
              >
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-6 sm:h-6"
                  >
                    <path
                      d="M10 1L12.09 6.26L18 7.27L14 11.14L15.18 17.02L10 14.77L4.82 17.02L6 11.14L2 7.27L7.91 6.26L10 1Z"
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ))}
              </div>

              {/* Customer Count */}
              <span className="font-gilroy-medium text-center sm:text-left text-white text-base sm:text-lg">
                200+ Happy Customers
              </span>
            </div>
          </div>

          {/* Main Title - Updated to H1 with proper typography */}
          <h1 className="font-gilroy-bold text-h1 mb-8 md:mb-12 text-center px-4 text-gray-100 max-w-5xl mx-auto">
            Let's Work Together
          </h1>

          {/* Description - Updated with proper typography */}
          <p className="font-gilroy-medium text-body text-center mx-auto px-4 text-white max-w-2xl lg:max-w-4xl">
            Whether you're looking to strengthen your bids or redefine your
            business strategy, Visionex Solutions is here to help. Book an
            appointment to discuss how we can support your goals and deliver
            results tailored to your needs.
          </p>
        </div>
      </div>

      {/* Section Divider - Gradient Line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div
          className="w-full"
          style={{
            height: "2px",
            background:
              "linear-gradient(90deg, transparent 0%, transparent 30%, #FF6E1F 50%, transparent 70%, transparent 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default WorkTogetherSection;
