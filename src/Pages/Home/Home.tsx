// components.
import { Header } from "../../components/shared/Header/Header";
import { FirstSection } from "../../components/features/home/FirstSection/FirstSection";
import { SecondSection } from "../../components/features/home/SecondSection/SecondSection";
import { Footer } from "../../components/shared/Footer/Footer";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <Footer />
    </>
  );
};
