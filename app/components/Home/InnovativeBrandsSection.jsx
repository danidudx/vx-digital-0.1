const InnovativeBrandsSection = () => {
  const brands = [
    {
      logo: "/icons/visionex.svg",
      title: "Visionex Digital",
      description:
        "Visionex Digital specializes in bold and custom web solutions. With a project-first mindset and agile strategy, we help clients competing build software that differentiates, not frustrates.",
      linkText: "Visionex Digital",
      href: "#visionex-digital",
    },
    {
      logo: "/icons/glowth.svg",
      title: "Growth",
      description:
        "From app marketing research to process-based storytelling, Growth empowers businesses to stand out with smarter messaging for higher-value campaigns.",
      linkText: "Growth",
      href: "#growth",
    },
    {
      logo: "/icons/nova.svg",
      title: "Navaroo",
      description:
        "At Visionex Solutions, we understand that success doesn't come from guesswork—it comes from strategy. Whether you're navigating a high-stakes",
      linkText: "Navaroo",
      href: "#navaroo",
    },
  ];

  return (
    <div
      className="relative overflow-visible -mt-32 py-28 md:py-32 lg:py-56"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/banners/bn44.svg")',
        backgroundSize: "contain",
        backgroundPosition: "center top", // no need for negative Y anymore
        backgroundRepeat: "no-repeat",
        // ensure it's above previous
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Main Title */}
          <h2 className="font-gilroy-bold text-h2 text-white mb-6">
            Innovative Brands, One Shared Vision
          </h2>

          {/* Description */}
          <p
            className="font-gilroy-medium text-white mx-auto max-w-2xl"
            style={{
              fontSize: "16px",
              lineHeight: "140%",
              opacity: "0.8",
            }}
          >
            We're proud to be part of a wider ecosystem of brands, each
            dedicated to excellence in their domain. Together, we help
            businesses grow through strategy, design, and technology
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="relative group cursor-pointer brand-card"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "32px 24px",
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                overflow: "hidden",
              }}
            >
              {/* Faint White Glow with Subtle Orange Overlay */}
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

              {/* Logo */}
              <div className="flex justify-center mb-6 relative z-10">
                <img
                  src={brand.logo}
                  alt={brand.title}
                  className="h-12 w-auto"
                />
              </div>

              {/* Title */}
              <h3
                className="font-gilroy-bold text-center text-white mb-4 relative z-10 transition-all duration-300"
                style={{
                  fontSize: "24px",
                  lineHeight: "30px",
                }}
              >
                {brand.title}
              </h3>

              {/* Description */}
              <p
                className="font-gilroy-medium text-center text-white mb-8 flex-grow relative z-10 transition-all duration-300"
                style={{
                  fontSize: "14px",
                  lineHeight: "140%",
                  opacity: "0.8",
                }}
              >
                {brand.description}
              </p>

              {/* Link */}
              <div className="flex justify-center mt-auto relative z-10">
                <a
                  href={brand.href}
                  className="font-gilroy-medium text-white hover:text-primary transition-all duration-300 flex items-center gap-2 group/link"
                  style={{
                    fontSize: "16px",
                    lineHeight: "20px",
                  }}
                >
                  {brand.linkText}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform group-hover/link:translate-x-1 transition-transform duration-300"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles for Enhanced Hover Effects */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .brand-card:hover h3 {
              text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
            }

            .brand-card:hover p {
              opacity: 0.9 !important;
            }

            /* Smooth transitions for all elements */
            .brand-card * {
              transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }

            /* Reduce motion for accessibility */
            @media (prefers-reduced-motion: reduce) {
              .brand-card, .brand-card * {
                transition: none !important;
              }
            }
          `,
        }}
      />
    </div>
  );
};

export default InnovativeBrandsSection;
