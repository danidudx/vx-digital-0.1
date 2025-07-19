const ScheduleAppointmentSection = () => {
  return (
    <div
      className="relative py-16 md:py-20 lg:py-24"
      style={{
        backgroundColor: "#09090D",
        minHeight: "600px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="font-gilroy-bold text-h2 text-gray-100">
              Schedule Your Appointment
            </h2>

            {/* Description */}
            <p
              className="font-gilroy-medium text-body text-white"
              style={{
                maxWidth: "500px",
              }}
            >
              We're not the biggest. We're not the flashiest. But we are
              relentless when it comes to delivering value.With Visionex
              Solutions, you're not just hiring a service—you're building a
              strategic partnership, fully committed to your business growth.
            </p>

            {/* CTA Button */}
            <div>
              <button className="inline-flex items-center gap-2 bg-white text-black font-gilroy-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Book an appointment
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Bottom Image */}
            <div className="pt-8">
              <img
                src="/banners/lft-bn1.svg"
                alt="Appointment Calendar"
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Form Container */}
            <div
              className="relative p-6"
              style={{
                width: "100%",
                maxWidth: "671px",
                minHeight: "467px",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                margin: "0 auto",
              }}
            >
              {/* Form Title */}
              <h3
                className="font-gilroy-medium mb-6"
                style={{
                  fontSize: "24px",
                  lineHeight: "31px",
                  color: "#F0F0F0",
                  textAlign: "left",
                }}
              >
                Provide the following details to contact us
              </h3>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Name Field */}
                <div
                  style={{
                    width: "100%",
                    height: "48px",
                    background: "#0F0F13",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    borderRadius: "30px",
                    position: "relative",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full h-full bg-transparent border-none outline-none font-gilroy-medium"
                    style={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "rgba(240, 240, 240, 0.3)",
                      paddingLeft: "18px",
                      paddingRight: "18px",
                    }}
                  />
                </div>

                {/* Email Field */}
                <div
                  style={{
                    width: "100%",
                    height: "48px",
                    background: "#0F0F13",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    borderRadius: "30px",
                    position: "relative",
                  }}
                >
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-full bg-transparent border-none outline-none font-gilroy-medium"
                    style={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "rgba(240, 240, 240, 0.3)",
                      paddingLeft: "18px",
                      paddingRight: "18px",
                    }}
                  />
                </div>

                {/* Company Name Field */}
                <div
                  style={{
                    width: "100%",
                    height: "48px",
                    background: "#0F0F13",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    borderRadius: "30px",
                    position: "relative",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full h-full bg-transparent border-none outline-none font-gilroy-medium"
                    style={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "rgba(240, 240, 240, 0.3)",
                      paddingLeft: "18px",
                      paddingRight: "18px",
                    }}
                  />
                </div>

                {/* Phone Number Field */}
                <div
                  style={{
                    width: "100%",
                    height: "48px",
                    background: "#0F0F13",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    borderRadius: "30px",
                    position: "relative",
                  }}
                >
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full h-full bg-transparent border-none outline-none font-gilroy-medium"
                    style={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "rgba(240, 240, 240, 0.3)",
                      paddingLeft: "18px",
                      paddingRight: "18px",
                    }}
                  />
                </div>

                {/* Date and Time Field */}
                <div
                  style={{
                    width: "100%",
                    height: "48px",
                    background: "#0F0F13",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    borderRadius: "30px",
                    position: "relative",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Select Date and Time"
                    className="w-full h-full bg-transparent border-none outline-none font-gilroy-medium"
                    style={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "rgba(240, 240, 240, 0.3)",
                      paddingLeft: "18px",
                      paddingRight: "18px",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    className="w-full flex items-center justify-center gap-2 font-gilroy-semibold"
                    style={{
                      height: "48px",
                      background: "#FFFFFF",
                      border: "1px solid #FFFFFF",
                      borderRadius: "58px",
                      fontSize: "16px",
                      lineHeight: "27px",
                      color: "#000000",
                    }}
                  >
                    Contact us
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33 8H12.67M9.33 4.67L12.67 8L9.33 11.33"
                        stroke="#000000"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppointmentSection;
