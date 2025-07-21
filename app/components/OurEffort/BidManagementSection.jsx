import React, { useEffect, useRef, useState } from "react";

const BidManagementSection = () => {
  const sectionRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Only run animations on desktop

    // Import GSAP
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.onload = () => {
      const scrollTriggerScript = document.createElement("script");
      scrollTriggerScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
      scrollTriggerScript.onload = () => {
        window.gsap.registerPlugin(window.ScrollTrigger);
        initAnimations();
      };
      document.head.appendChild(scrollTriggerScript);
    };
    document.head.appendChild(script);

    return () => {
      // Clean up
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, [isDesktop]);

  const initAnimations = () => {
    const { gsap, ScrollTrigger } = window;

    const stepElements = document.querySelectorAll("[data-step]");

    stepElements.forEach((step, index) => {
      // Each step becomes sticky when it reaches the center
      ScrollTrigger.create({
        trigger: step,
        start: "top center",
        end: "bottom center",
        pin: true,
        pinSpacing: false,
        onEnter: () => {
          // Hide all previous steps when current step becomes active
          for (let i = 0; i < index; i++) {
            gsap.set(stepElements[i], { opacity: 0 });
          }
        },
        onLeaveBack: () => {
          // Show previous step when scrolling back
          if (index > 0) {
            gsap.set(stepElements[index - 1], { opacity: 1 });
          }
        },
      });

      // Add some space between steps for better scroll experience
      if (index < stepElements.length - 1) {
        gsap.set(step, { marginBottom: "100vh" });
      }
    });
  };

  const steps = [
    {
      number: "01",
      title: "Kick-Off Meeting",
      points: [
        "Define project objectives and requirements",
        "Align timelines and responsibilities with client teams",
        "Clarify compliance and key evaluation criteria",
      ],
    },
    {
      number: "02",
      title: "Requirement Analysis",
      points: [
        "Analyse tender documents and identify essential criteria",
        "Gather relevant project data and supporting documentation",
        "Develop a clear compliance matrix for submission",
      ],
    },
    {
      number: "03",
      title: "Bid Strategy Development",
      points: [
        "Design a winning strategy tailored to client strengths",
        "Highlight unique selling points and value propositions",
        "Map out a roadmap for bid creation and review",
      ],
    },
    {
      number: "04",
      title: "Content Creation",
      points: [
        "Write and design high-quality, persuasive bid documents",
        "Integrate visuals, charts, and data to strengthen the proposal",
        "Ensure clarity, professionalism, and alignment with tender requirements",
      ],
    },
    {
      number: "05",
      title: "Final Review & Submission",
      points: [
        "Comprehensive quality assurance and compliance check",
        "Final formatting and presentation optimization",
        "Timely submission with all required documentation",
      ],
    },
  ];

  const renderStepCard = (step, index) => (
    <div
      data-step={isDesktop ? index : undefined}
      className="flex flex-col lg:flex-row items-start lg:items-start"
      style={{ gap: "clamp(20px, 4vw, 38px)" }}
    >
      {/* Number and Line - Fixed Width */}
      <div
        className="flex flex-row lg:flex-col items-center lg:items-center w-full lg:w-auto justify-start lg:justify-center"
        style={{ minWidth: "134px" }}
      >
        <span
          className="font-gilroy-extrabold text-white opacity-50"
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            lineHeight: "1.4",
          }}
        >
          {step.number}
        </span>
        {step.number !== "05" && (
          <img
            src="/icons/line.svg"
            alt="connecting line"
            className="ml-4 lg:ml-0 lg:mt-4 w-8 h-8 lg:w-auto lg:h-auto hidden lg:block"
          />
        )}
      </div>

      {/* Card - Responsive */}
      <div className="w-full lg:w-auto">
        <div
          className="relative rounded-3xl p-6 lg:p-8"
          style={{
            width: "100%",
            maxWidth: "686px",
            minHeight: "200px",
            background: "#131013",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            className="absolute"
            style={{
              width: "60%",
              height: "32px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              background: "#FF6E1F",
              filter: "blur(150px)",
            }}
          ></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
            <div className="flex-shrink-0 mt-1">
              <img
                src="/icons/icon1.svg"
                alt={step.title}
                className="w-12 h-12 lg:w-14 lg:h-14"
              />
            </div>

            <div className="flex-1">
              <h3
                className="font-gilroy-medium mb-4 lg:mb-6"
                style={{
                  fontSize: "clamp(18px, 3vw, 24px)",
                  lineHeight: "1.3",
                  color: "#F0F0F0",
                }}
              >
                {step.title}
              </h3>

              <div className="space-y-3">
                {step.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start gap-3">
                    <img
                      src="/icons/icon2.svg"
                      alt="bullet"
                      className="w-3 h-3 lg:w-4 lg:h-4 mt-0.5 flex-shrink-0"
                    />
                    <span
                      className="font-gilroy-medium"
                      style={{
                        fontSize: "clamp(13px, 2.2vw, 15.13px)",
                        lineHeight: "1.4",
                        color: "#F0F0F0B2",
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      ref={sectionRef}
      id="bid-management-section"
      className="relative py-16 md:py-24 lg:py-32"
      style={{
        backgroundColor: "#09090D",
        backgroundImage: 'url("/banners/bg3.svg")',
        backgroundSize: "contain",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "0px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2
            className="font-gilroy-bold mb-8 md:mb-10 px-4"
            style={{
              fontSize: "clamp(28px, 5vw, 47.44px)",
              lineHeight: "1.3",
              letterSpacing: "-1.2px",
              color: "#F0F0F0",
              marginTop: "0",
            }}
          >
            Bid Management: From Kick-Off to Submission
          </h2>

          <p
            className="font-gilroy-medium mx-auto max-w-4xl px-4"
            style={{
              fontSize: "clamp(14px, 2.5vw, 16px)",
              lineHeight: "140%",
              color: "#FFFFFF",
            }}
          >
            We begin by listening. Our goal is to understand your current
            situation, business drivers, and long-term vision. Once we're
            aligned, we begin shaping your strategy—whether it's a bid
            submission plan or a business-wide transformation.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-16 md:mb-20 lg:mb-24 px-4">
          <div
            className="animated-gradient-border rounded-full"
            style={{
              width: "min(351px, calc(100vw - 32px))",
              height: "72px",
              padding: "1px",
            }}
          >
            {/* Inner container with glass effect */}
            <div
              className="flex items-center justify-center rounded-full w-full h-full"
              style={{
                background: "#343436",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                padding: "8px",
              }}
            >
              {/* Active Tab - Bid Management */}
              <div className="flex-1 h-full">
                <div
                  className="flex items-center justify-center rounded-full h-full relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255, 255, 255, 0.07) 0%, rgba(153, 153, 153, 0.07) 100%)",
                  }}
                >
                  {/* Orange blur effect */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: "74px",
                      height: "17px",
                      background: "#FF6E1F",
                      filter: "blur(30px)",
                    }}
                  ></div>
                  <span
                    className="font-gilroy-semibold relative z-10 text-center px-3"
                    style={{
                      fontSize: "clamp(12px, 2.5vw, 16px)",
                      lineHeight: "150%",
                      color: "#D6D8DB",
                    }}
                  >
                    Bid Management
                  </span>
                </div>
              </div>

              {/* Spacing between tabs */}
              <div style={{ width: "8px" }}></div>

              {/* Inactive Tab - Business Strategy */}
              <div className="flex-1 h-full">
                <div className="flex items-center justify-center h-full">
                  <span
                    className="font-gilroy-semibold text-center px-3"
                    style={{
                      fontSize: "clamp(12px, 2.5vw, 16px)",
                      lineHeight: "150%",
                      color: "#D6D8DB",
                    }}
                  >
                    Business Strategy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="flex justify-center px-4">
          <div
            ref={stepsContainerRef}
            className={isDesktop ? "" : "space-y-12"}
          >
            {steps.map((step, index) => (
              <div key={index}>{renderStepCard(step, index)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidManagementSection;
