import CTASection from "../AboutUs/CTASection";
import HowItWorksSection from "./HowItWorksSection";
import ScheduleAppointmentSection from "./ScheduleAppointmentSection";
import WhyBookAppointmentSection from "./WhyBookAppointmentSection";
import WorkTogetherSection from "./WorkTogetherSection";

const AppointmentSection = () => {
  return (
    <section className="text-white">
      <WorkTogetherSection />
      <WhyBookAppointmentSection />
      <HowItWorksSection />
      <ScheduleAppointmentSection />
      <CTASection />
    </section>
  );
};

export default AppointmentSection;
