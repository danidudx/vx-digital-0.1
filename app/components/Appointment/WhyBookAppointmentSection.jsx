const WhyBookAppointmentSection = () => {
  const cardData = [
    {
      title: "Understand Your Needs",
      description:
        "At Visionex Solutions, we understand that success doesn't come from guesswork—it comes from strategy. Whether you're navigating a high-stakes bid or trying to",
    },
    {
      title: "Understand Your Needs",
      description:
        "At Visionex Solutions, we understand that success doesn't come from guesswork—it comes from strategy. Whether you're navigating a high-stakes bid or trying to",
    },
    {
      title: "Understand Your Needs",
      description:
        "At Visionex Solutions, we understand that success doesn't come from guesswork—it comes from strategy. Whether you're navigating a high-stakes bid or trying to",
    },
  ];

  return (
    <div
      className="relative py-16 md:py-20 lg:py-24"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/banners/bg32.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "800px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Title */}
        <h2 className="font-gilroy-bold text-center mb-12 lg:mb-16 text-h2 text-gray-100">
          Why Book an Appointment?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative group cursor-pointer appointment-card"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "40px 20px",
                height: "361px",
                position: "relative",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                overflow: "hidden",
              }}
            >
              {/* Background Blur Effect */}
              <div
                style={{
                  position: "absolute",
                  left: "140%",
                  top: "43%",
                  width: "200px",
                  height: "30px",
                  background: "#D9D9D9",
                  filter: "blur(150px)",
                  zIndex: -1,
                }}
              />

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 60%),
                    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.06) 0%, transparent 40%),
                    radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.06) 0%, transparent 40%),
                    radial-gradient(circle at 40% 60%, rgba(255, 110, 31, 0.05) 0%, transparent 50%)
                  `,
                  borderRadius: "20px",
                }}
              />

              {/* Nova Icon */}
              <div className="flex justify-center mb-8 relative z-10">
                <img
                  src="/icons/nova.png"
                  alt="Nova Icon"
                  className="w-auto h-12"
                  style={{
                    position: "absolute",
                    top: "14.68%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              </div>

              {/* Content Container */}
              <div
                className="flex flex-col items-center text-center relative z-10"
                style={{
                  position: "absolute",
                  left: "9.7%",
                  right: "9.91%",
                  top: "calc(50% - 70px)",
                }}
              >
                {/* Title */}
                <h3
                  className="font-gilroy-medium text-center transition-all duration-300"
                  style={{
                    fontSize: "24px",
                    lineHeight: "30.6px",
                    color: "#F0F0F0",
                    width: "100%",
                    marginBottom: "12px",
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="font-gilroy-medium text-center transition-all duration-300"
                  style={{
                    fontSize: "15.13px",
                    lineHeight: "20px",
                    color: "rgba(240, 240, 240, 0.7)",
                    width: "100%",
                    marginBottom: "12px",
                  }}
                >
                  {card.description}
                </p>

                {/* Navaroo Link */}
                <div className="flex items-center justify-center gap-1 group/link">
                  <span
                    className="font-gilroy-bold transition-all duration-300"
                    style={{
                      fontSize: "16px",
                      lineHeight: "30.6px",
                      color: "#F0F0F0",
                    }}S
                  >
                    Navaroo
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/png"
                    className="transform group-hover/link:translate-x-1 transition-transform duration-300"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="#F0F0F0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles for Enhanced Hover Effects */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .appointment-card:hover h3 {
              text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
            }

            .appointment-card:hover p {
              opacity: 0.9 !important;
            }

            /* Smooth transitions for all elements */
            .appointment-card * {
              transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }

            /* Reduce motion for accessibility */
            @media (prefers-reduced-motion: reduce) {
              .appointment-card, .appointment-card * {
                transition: none !important;
              }
            }
          `,
        }}
      />
    </div>
  );
};

export default WhyBookAppointmentSection;
