import InnovativeBrandsSection from "./InnovativeBrandsSection";
import StrategicSolutionsHero from "./StrategicSolutionsHero";
import WhyChooseVisionexSection from "./WhyChooseVisionexSection";
import WhyChooseVisionexSection2 from "./WhyChooseVisionexSection2";
import WorkInActionSection from "./WorkInActionSection";

const Home = () => {
  return (
    <section className="text-white">
      <StrategicSolutionsHero />
      <InnovativeBrandsSection />
      <WhyChooseVisionexSection />
      <WhyChooseVisionexSection2 />
      <WorkInActionSection />
    </section>
  );
};

export default Home;
