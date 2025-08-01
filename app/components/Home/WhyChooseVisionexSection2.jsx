import React from 'react';

const WhyChooseVisionexSection2 = () => {
  const features = [
    {
      title: "Experience & Precision",
      description:
        "We bring a unique mix of industry expertise, meticulous execution, and practical solutions.",
      illustration: "/icons/cardbox.png",
      hoverIllustration: "/icons/person-card-hovered.png",
    },
    {
      title: "Collaboration Over Consultation",
      description:
        "We don't just consult; we work alongside you to achieve real impact.",
      illustration: "/icons/collab.png",
      hoverIllustration: "/icons/block-hoverd1.png",
    },
    {
      title: "Execution Over Advice",
      description:
        "We don't stop at recommendations; we implement strategies that drive success.",
      illustration: "/icons/advice.png",
      hoverIllustration: "/icons/advice.png",
    },
    {
      title: "Results That Matter",
      description:
        "At Visionex Solutions, we understand that success doesn't come from guesswork—it comes from strategy. Whether you're navigating a high-stakes bid or trying to",
      illustration: "/icons/results.png",
      hoverIllustration: "/icons/results.png",
    },
  ];

  const CardComponent = ({ feature, className, contentPosition = "bottom", textAlign = "left" }) => (
    <div
      className={`${className} relative group cursor-pointer`}
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
        borderRadius: "20px",
        padding: "clamp(16px, 4vw, 32px)",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        overflow: "hidden",
        minHeight: "200px",
      }}
    >
      {/* Enhanced Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12) 0%, transparent 70%),
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(255, 110, 31, 0.1) 0%, transparent 60%)
          `,
          borderRadius: "20px",
          transform: 'scale(1.02)',
          transition: 'opacity 1.2s cubic-bezier(0.2, 0, 0.1, 1), transform 1s cubic-bezier(0.2, 0, 0.1, 1)',
          willChange: 'opacity, transform',
        }}
      />

      {/* Illustration */}
      <div className={`flex justify-center ${contentPosition === 'top' ? 'order-2 mt-4' : 'mb-4'} flex-grow`}>
        <div className="relative w-full h-full flex items-center justify-center min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]">
          {/* Default image */}
          <img
            src={feature.illustration}
            alt={feature.title}
            className="max-w-full max-h-full object-contain transition-all duration-1000 ease-in-out group-hover:opacity-0 absolute"
            style={{
              transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'opacity'
            }}
          />
          {/* Hover image */}
          <img
            src={feature.hoverIllustration}
            alt={feature.title}
            className="max-w-full max-h-full object-contain transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 absolute"
            style={{
              transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'opacity'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className={`${contentPosition === 'top' ? 'order-1' : ''} ${textAlign === 'center' ? 'text-center' : ''}`}>
        <h3
          className="font-gilroy-bold text-white mb-2 sm:mb-3"
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            lineHeight: "clamp(20px, 3.5vw, 26px)",
          }}
        >
          {feature.title}
        </h3>
        <p
          className="font-gilroy-medium text-white"
          style={{
            fontSize: "clamp(12px, 2.5vw, 14px)",
            lineHeight: "140%",
            opacity: "0.8",
          }}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );

  return (
    <div
      className="relative py-12 sm:py-16 md:py-20 lg:py-24"
      style={{
        backgroundColor: "#09090D",
        minHeight: "600px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 
            className="font-gilroy-bold text-white"
            style={{
              fontSize: "clamp(24px, 5vw, 48px)",
              lineHeight: "clamp(28px, 5.5vw, 56px)",
            }}
          >
            Why Choose Visionex – What Makes Us Different
          </h2>
        </div>

        {/* Desktop Grid Layout (lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-6 xl:gap-8 lg:h-[600px]">
          {/* Experience & Precision - Large left card (spans 2 rows) */}
          <CardComponent 
            feature={features[0]} 
            className="row-span-2 col-start-1" 
          />

          {/* Collaboration Over Consultation - Top middle card */}
          <CardComponent 
            feature={features[1]} 
            className="col-start-2" 
          />

          {/* Execution Over Advice - Top right card */}
          <CardComponent 
            feature={features[2]} 
            className="col-start-3" 
          />

          {/* Results That Matter - Bottom wide card (spans 2 columns) */}
          <div
            className="col-span-2 col-start-2 row-start-2 relative group cursor-pointer"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "32px",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              minHeight: "100%",
            }}
          >
            {/* Enhanced Gradient Overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: `
                  radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12) 0%, transparent 70%),
                  radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                  radial-gradient(circle at 40% 60%, rgba(255, 110, 31, 0.1) 0%, transparent 60%)
                `,
                borderRadius: "20px",
                transform: 'scale(1.02)',
                transition: 'opacity 1.2s cubic-bezier(0.2, 0, 0.1, 1), transform 1s cubic-bezier(0.2, 0, 0.1, 1)',
                willChange: 'opacity, transform',
              }}
            />
            {/* Content positioned at top-right */}
            <div
              className="absolute top-8 right-8 z-10"
              style={{ maxWidth: "60%" }}
            >
              <h3
                className="font-gilroy-bold text-white mb-3"
                style={{
                  fontSize: "20px",
                  lineHeight: "26px",
                }}
              >
                {features[3].title}
              </h3>
              <p
                className="font-gilroy-medium text-white"
                style={{
                  fontSize: "14px",
                  lineHeight: "140%",
                  opacity: "0.8",
                }}
              >
                {features[3].description}
              </p>
            </div>

            {/* Illustration positioned to fill from bottom-left */}
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-start">
              <img
                src={features[3].illustration}
                alt={features[3].title}
                className="w-auto h-auto max-w-full max-h-full object-contain transition-all duration-1000 ease-in-out group-hover:opacity-0 absolute"
                style={{
                  transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'opacity'
                }}
              />
              <img
                src={features[3].hoverIllustration}
                alt={features[3].title}
                className="w-auto h-auto max-w-full max-h-full object-contain transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 absolute"
                style={{
                  transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'opacity'
                }}
              />
            </div>
          </div>
        </div>

        {/* Tablet Layout (md) */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 md:gap-6 md:auto-rows-fr">
          {features.map((feature, index) => (
            <CardComponent 
              key={index}
              feature={feature} 
              className={index === 0 ? "md:row-span-2" : ""} 
              textAlign="center"
            />
          ))}
        </div>

        {/* Mobile Layout (sm and below) */}
        <div className="grid md:hidden grid-cols-1 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <CardComponent 
              key={index}
              feature={feature} 
              className="" 
              textAlign="center"
              contentPosition="top"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .group:hover h3 {
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          transition: all 0.8s cubic-bezier(0.2, 0, 0.1, 1);
        }

        .group:hover p {
          opacity: 0.95 !important;
          transition: opacity 0.8s ease-out;
        }

        .group * {
          transition: all 0.6s cubic-bezier(0.2, 0, 0.1, 1);
        }

        .group {
          transition: transform 0.8s cubic-bezier(0.2, 0, 0.1, 1), 
                      box-shadow 0.8s cubic-bezier(0.2, 0, 0.1, 1);
        }

        .group:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .group:hover {
            transform: translateY(-2px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .group, .group * {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseVisionexSection2;