// assets.
import coffeeImg from "../../../../assets/images/coffee-x2.png";
import harvardLogo from "../../../../assets/images/harvard-h@2x.png";
import standfordLogo from "../../../../assets/images/stanford-h@2x.png";
// styles.
import "./FourthSection.css";

export const FourthSection: React.FC = () => {
  return (
    <section id="fourth-section" className="bg-[#fafafa]">
      <div className="content">
        <p className="font-[#36414d] font-raleway">Hi,</p>
        <p className="font-[#36414d] font-raleway">
          I started Tame Your Test in an attempt to provide a{" "}
          <strong>better alternative to studying</strong> after suffering the
          horrible reality that is the GMAT.
        </p>
        <p className="font-[#36414d] font-raleway">
          I was a victim of all the “magical solution courses” and I{" "}
          <strong>did everything you're not supposed to do</strong>.
          Fortunately, I eventually developed a love-hate relationship with the
          process and reached great results!
        </p>
        <p className="font-[#36414d] font-raleway">
          Here's a little bit more about me:
        </p>
        <div className="paragraphs-set">
          <p className="font-[#36414d] font-raleway">
            Harvard MBA Class of 2024
          </p>
          <p className="font-[#36414d] font-raleway">
            Accepted into HBS and Stanford GSB
          </p>
          <p className="font-[#36414d] font-raleway">GMAT 720 (50 Quant)</p>
        </div>

        <div className="imgs-set">
          <img src={harvardLogo} alt="harverd logo" />
          <img src={standfordLogo} alt="stanford logo" />
        </div>
      </div>
      <div id="principal-img">
        <img src={coffeeImg} alt="coffee" />
      </div>
    </section>
  );
};
