const LeadershipSection = () => {
  return (
    <div className="relative py-20" style={{ backgroundColor: "#09090D" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image with glass border */}
          <div className="relative">
            <div
              className="relative rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
                padding: "16px",
              }}
            >
              <img
                src="/banners/banner4.png"
                alt="Leadership - Hashan Senarathna"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="max-w-lg">
            {/* Title */}
            <h2
              className="font-gilroy-bold mb-8"
              style={{
                fontSize: "47.4375px",
                lineHeight: "62px",
                letterSpacing: "-1.2px",
                color: "#F0F0F0",
              }}
            >
              Leadership You Can Trust
            </h2>

            {/* Description */}
            <p
              className="font-gilroy-medium mb-8"
              style={{
                fontSize: "16px",
                lineHeight: "140%",
                color: "#FFFFFF",
              }}
            >
              Hashan Senarathna's extensive experience in consulting, project
              management, and strategic planning forms the backbone of Visionex.
              His leadership is guided by integrity, dedication, and a passion
              for helping businesses grow.
            </p>

            {/* Quote */}
            <blockquote
              className="font-gilroy-semibold"
              style={{
                fontSize: "32px",
                lineHeight: "140%",
                color: "#F0F0F0",
              }}
            >
              "At Visionex Solutions, we understand that success doesn't come
              from guesswork—it comes from strategy."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
