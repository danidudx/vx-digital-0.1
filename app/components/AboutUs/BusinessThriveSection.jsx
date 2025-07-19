const BusinessThriveSection = () => {
  return (
    <div
      className="relative py-16 md:py-24 lg:py-32"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/banners/bg3.svg")',
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with badge */}
        <div className="text-center mb-16">
          {/* Our Mission Badge */}
          {/* Our Mission Badge */}
          <div
            className="inline-flex items-center justify-center mb-8"
            style={{
              width: "125px",
              height: "50px",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "100px",
              padding: "4px",
            }}
          >
            {/* Sub Container */}
            <div
              className="flex items-center justify-center"
              style={{
                width: "117px",
                height: "42px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                borderRadius: "100px",
                padding: "9px 16px",
              }}
            >
              {/* Text */}
              <span
                className="font-gilroy-semibold text-center"
                style={{
                  fontSize: "16px",
                  lineHeight: "150%",
                  color: "#D6D8DB",
                  whiteSpace: "nowrap",
                }}
              >
                Our Mission
              </span>
            </div>
          </div>

          {/* Title */}
          <h2
            className="font-gilroy-bold mb-8 text-center"
            style={{
              fontSize: "47.4375px",
              lineHeight: "62px",
              letterSpacing: "-1.2px",
              color: "#F0F0F0",
              maxWidth: "532px",
              margin: "0 auto 32px auto",
            }}
          >
            Helping Businesses Thrive
          </h2>

          {/* Description */}
          <p
            className="font-gilroy-medium text-center mx-auto"
            style={{
              fontSize: "16px",
              lineHeight: "140%",
              color: "#FFFFFF",
              maxWidth: "756px",
            }}
          >
            We begin by listening. Our goal is to understand your current
            situation, business drivers, and long-term vision. Once we're
            aligned, we begin shaping your strategy—whether it's a bid
            submission plan or a business-wide transformation.
          </p>
        </div>

        {/* Charts Section - Single Image */}
        <div className="relative flex justify-center">
          {/* Single image containing all three charts */}
          <div className="relative">
            <img
              src="/banners/banner3.svg" // Replace with your actual combined charts image path
              alt="Business Analytics Charts"
              className="w-full h-auto max-w-none"
            />

            {/* Center banner image overlay */}
            <div
              className="absolute z-20"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessThriveSection;
