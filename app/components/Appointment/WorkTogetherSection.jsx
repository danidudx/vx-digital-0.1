const WorkTogetherSection = () => {
  return (
    <div
      className="relative py-16 md:py-20 lg:py-24 flex items-center"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/backgrounds/heroback2.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "600px",
      }}
    >
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
              <div className="flex items-center gap-1">
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
              <span className="font-gilroy-medium text-center sm:text-left text-white text-sm sm:text-body">
                200+ Happy Customers
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="font-gilroy-bold mb-6 md:mb-8 text-center px-4 text-2xl sm:text-3xl lg:text-h2 text-gray-100 max-w-4xl mx-auto">
            Let's Work Together
          </h2>

          {/* Description */}
          <p className="font-gilroy-medium text-center mx-auto px-4 text-sm sm:text-body text-white max-w-sm sm:max-w-2xl lg:max-w-3xl">
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
