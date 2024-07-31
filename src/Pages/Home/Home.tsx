// components.
import { Header } from "../../components/shared/Header/Header";
import { FirstSection } from "../../components/features/home/FirstSection/FirstSection";
import { SecondSection } from "../../components/features/home/SecondSection/SecondSection";
import { ThirdSection } from "../../components/features/home/ThridSection/ThridSection";
import { FourthSection } from "../../components/features/home/FourthSection/FourthSection";
import { Footer } from "../../components/shared/Footer/Footer";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </>
  );
};
