const WorkTogetherSection = () => {
  return (
    <div
      className="relative py-16 md:py-20 lg:py-24 flex items-center overflow-hidden"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/backgrounds/heroback2.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "600px",
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 md:mb-8">
            {/* Customer Images */}
            <div className="flex-shrink-0">
              <img
                src="/icons/csim.svg"
                alt="Happy Customers"
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </div>

            {/* Stars and Text Column */}
            <div className="flex flex-col items-center sm:items-start gap-1">
              {/* 5 Stars */}
              <div
                className="flex items-center gap-1"
                aria-label="5 out of 5 stars"
              >
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-5 sm:h-5"
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
              <span className="font-gilroy-medium text-center sm:text-left text-white text-sm sm:text-base">
                200+ Happy Customers
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="font-bold mb-6 md:mb-8 text-center px-4 text-2xl sm:text-3xl lg:text-4xl text-gray-100 max-w-4xl mx-auto">
            Let's Work Together
          </h2>

          {/* Description */}
          <p className="font-medium text-center mx-auto px-4 text-sm sm:text-base text-white max-w-sm sm:max-w-2xl lg:max-w-3xl">
            Whether you're looking to strengthen your bids or redefine your
            business strategy, Visionex Solutions is here to help. Book an
            appointment to discuss how we can support your goals and deliver
            results tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkTogetherSection;
