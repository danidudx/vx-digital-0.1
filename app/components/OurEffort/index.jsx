import CTASection from "../AboutUs/CTASection";
import WhoWeAreSection from "../AboutUs/WhoWeAreSection";
import BidManagementSection from "./BidManagementSection";
import KickoffSubmission from "./KickoffSubmission";
import OurEffortHeroSection from "./OurEffortsHeroSection";

const OurEffortsSection = () => {
  return (
    <section className="text-white">
      <OurEffortHeroSection />
      <BidManagementSection />
      <KickoffSubmission />
      <CTASection />
    </section>
  );
};

export default OurEffortsSection;
