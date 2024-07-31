// assets.
import gMat from "../../../../assets/images/gmap-x2.png";
import toelf from "../../../../assets/images/toelf-x2.png";
import gre from "../../../../assets/images/gre-x2.png";
// styles.
import "./FirstSection.css";

export const FirstSection: React.FC = () => {
  return (
    <section className="first-section-home flex">
      <div id="cta-p" className="">
        <h1 className="title font-raleway">
          It's time for you to finally <br /> <span>Tame Your Test!</span>
        </h1>

        <div className="grey-line h-[1px] bg-[#a4a89d]" />

        <p className="paragraph font-raleway">
          Get started with your test preparation with unique <br /> personalized
          courses and experts that will work with you <br /> hand in hand.
        </p>
        <div className="exams-container flex ">
          <div className="exams-types flex">
            <div className="first-exams flex">
              <img src={gMat} alt="gmat logo" />
              <img src={toelf} alt="toelf logo" />
            </div>
            <div className="third-exam flex">
              <img src={gre} alt="gre logo" />
            </div>
          </div>
        </div>
      </div>
      <div id="form-content" className="flex">
        <p className="font-raleway">
          Get a FREE personalized <br />
          planning session
        </p>
        <form className="flex bg-[#ffffff]">
          <label>Full Name:</label>
          <input name="full-name" placeholder=" eg: jaison.justus" required />
          <label>Email:</label>
          <input
            name="Email-name"
            placeholder=" eg: yourname@gmail.com"
            required
          />
          <label>Phone Number:</label>
          <input name="Phone-number" placeholder=" eg: 04713457890" required />
          <label>Test of Interest:</label>
          <div className="custom-select">
            <select required>
              <option value="">- Select -</option>
              <option value="test1">G MAT</option>
              <option value="test2">TOEFL</option>
              <option value="test3">GRE</option>
            </select>
          </div>

          <button type="submit">SEND</button>
        </form>
      </div>
    </section>
  );
};
