import { useState } from "react";

const WorkInActionSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      avatar: "/avatars/client1.jpg", // Replace with actual avatar path
      name: "Understand Your Needs",
      position: "Experience & Precision",
      quote:
        "At Visionex Solutions, we understand that success doesn't come from guesswork—it comes from strategy. Whether you're navigating a high-stakes bid or trying to",
    },
    {
      avatar: "/avatars/client2.jpg",
      name: "Strategic Partnership",
      position: "Business Growth",
      quote:
        "Working with Visionex has transformed our approach to business development. Their strategic insights have helped us win more contracts and grow sustainably.",
    },
    {
      avatar: "/avatars/client3.jpg",
      name: "Results Driven",
      position: "Project Success",
      quote:
        "The team at Visionex doesn't just provide advice—they work alongside you to implement real solutions that drive measurable results for your business.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className="relative py-16 md:py-20 lg:py-24"
      style={{
        backgroundColor: "#09090D",
        minHeight: "500px",
      }}
    >
      <div
        className="min-w-0 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10"
        style={{ minWidth: "320px" }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-gilroy-bold text-h2 text-white">
            Our Work in Action – Real Results, Real Clients
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-7xl mx-auto">
          {/* Background blur effect */}
          <div
            className="absolute"
            style={{
              left: "115%",
              top: "43%",
              width: "200px",
              height: "30px",
              background: "#D9D9D9",
              filter: "blur(150px)",
              zIndex: -1,
            }}
          />

          <div
            className="relative px-6 py-12 md:px-16 md:py-16 lg:px-24 lg:py-20 group overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              minHeight: "280px",
            }}
          >
            {/* Animated gradient overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 70%)",
                animation: "gradientSlide 1.2s ease-out forwards",
                animationDelay: "0.1s",
                animationPlayState: "paused",
              }}
            />

            <style jsx>{`
              .group:hover .absolute:first-of-type {
                animation-play-state: running !important;
              }

              @keyframes gradientSlide {
                0% {
                  transform: translateX(100%) scale(0.3);
                  opacity: 0;
                }
                30% {
                  opacity: 1;
                }
                100% {
                  transform: translateX(0%) scale(1);
                  opacity: 0.8;
                }
              }
            `}</style>
            {/* Left Navigation Arrow */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 md:left-8 lg:left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:opacity-80 transition-opacity"
              style={{ zIndex: 10 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-6 md:h-6"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={nextTestimonial}
              className="absolute right-4 md:right-8 lg:right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:opacity-80 transition-opacity"
              style={{ zIndex: 10 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-6 md:h-6 opacity-50"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 lg:space-y-10 mx-auto max-w-5xl">
              {/* Profile Section */}
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5">
                {/* Avatar */}
                <div
                  className="rounded-full bg-gray-600 flex-shrink-0 w-16 h-16 md:w-20 md:h-20"
                  style={{
                    backgroundImage: `url(${testimonials[currentTestimonial].avatar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Name and Position */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <h3 className="font-gilroy-medium text-gray-100 text-xl md:text-2xl">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="font-gilroy-medium text-gray-300 opacity-70 text-sm md:text-base">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>

              {/* Quote with custom quotation marks */}
              <div className="relative w-full">
                <blockquote className="font-gilroy-semibold text-center text-white opacity-80 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed relative inline-block">
                  {/* Opening quote */}
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block opacity-40 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 mr-1 md:mr-2 align-top"
                  >
                    <path
                      d="M0.262813 11.2L3.14281 0.399998H6.02281L4.10281 11.2H0.262813ZM6.98281 11.2L9.86281 0.399998H12.7428L10.8228 11.2H6.98281Z"
                      fill="white"
                    />
                  </svg>

                  <span className="relative">
                    {testimonials[currentTestimonial].quote}
                  </span>

                  {/* Closing quote */}
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block opacity-40 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 ml-1 md:ml-2 align-top rotate-180"
                  >
                    <path
                      d="M0.262813 11.2L3.14281 0.399998H6.02281L4.10281 11.2H0.262813ZM6.98281 11.2L9.86281 0.399998H12.7428L10.8228 11.2H6.98281Z"
                      fill="white"
                    />
                  </svg>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkInActionSection;
