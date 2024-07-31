// assets.
import gMat from "../../../../assets/images/gmap-x2.png";
import toelf from "../../../../assets/images/toelf-x2.png";
import gre from "../../../../assets/images/gre-x2.png";
// styles.
import "./FirstSection.css";

export const FirstSection: React.FC = () => {
  return (
    <section className="first-section-home w-full ">
      <section
        id="form-section"
        className="flex flex-row bg-transparent w-full h-full"
      >
        <div id="cta-p" className="text-center">
          <div className="title align-end">
            <h1>
              It's time for you to finally <br />{" "}
              <span className="font-bold">Tame Your Test!</span>
            </h1>
          </div>
          <p className="paragraph text-pretty">
            Get started with your test preparation with unique <br />{" "}
            personalized courses and experts that will work with you <br /> hand
            in hand.
          </p>
          <div id="exams-types" className=" gap-[4.5rem]">
            <div className="flex justify-center items-center w-full">
              <img src={gMat} alt="gmat-logo" />
              <img src={toelf} alt="toelf-logo" />
            </div>
            <div className="flex justify-center items-center">
              <img src={gre} alt="gre-logo" />
            </div>{" "}
          </div>
        </div>
        <div id="form" className=" text-center">
          <div>
            <p className="font-[900] text-center text-pretty line-clamp-2">
              Get a FREE personalized <br />
              planning session
            </p>
            <form>
              <label>Full Name:</label>
              <input
                name="submitted-name"
                placeholder=" eg: jaison.justus"
                required
              />
              <label>Email:</label>
              <input
                name="submitted-name"
                placeholder=" eg: yourname@gmail.com"
                required
              />
              <label>Phone Number:</label>
              <input
                name="submitted-name"
                placeholder=" eg: 04713457890"
                required
              />
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
        </div>
      </section>
    </section>
  );
};
