// components.
import { Footer } from "../../components/shared/Footer/Footer";
import { Header } from "../../components/shared/Header/Header";
// assets.
import gMat from "../../assets/images/gmap-x2.png";
import toelf from "../../assets/images/toelf-x2.png";
import gre from "../../assets/images/gre-x2.png";
// styles.
import "./Home.css";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <section className="first-section-home w-full h-screen overflow-hidden">
        <section
          id="form-section"
          className="flex flex-row bg-transparent w-full pt-[35vh] h-full"
        >
          <div id="cta-p" className="w-[60%] text-center">
            <h1 className="title">
              It's time for you to finally <br />{" "}
              <span className="font-bold">Tame Your Test!</span>
            </h1>
            <p className="text-pretty align-center text-center">
              Get started with your test preparation with unique <br />{" "}
              personalized courses and experts that will work with you <br />{" "}
              hand in hand.
            </p>
            <div id="exams-types" className="flex flex-col w-full gap-[4.5rem]">
              <div className="flex justify-center items-center w-full gap-[3.25rem]">
                <img src={gMat} alt="gmat-logo" className="" />
                <img src={toelf} alt="toelf-logo" className="" />
              </div>
              <div className="flex justify-center items-center">
                <img src={gre} alt="gre-logo" className=" " />
              </div>
            </div>
          </div>
          <div id="form" className="w-[40%] text-center">
            <p>Get a FREE personalized planning session</p>
            <form></form>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};
