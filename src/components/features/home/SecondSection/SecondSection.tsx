// Assets.
import writing from "../../../../assets/images/woman-x2.png";
import checkIcon from "../../../../assets/icons/check-icon.svg";
// Styles.
import "./SecondSection.css";

export const SecondSection: React.FC = () => {
  return (
    <section id="second-section">
      <div id="hands-image">
        <p>We help you get all of the necessary foundations</p>{" "}
        <p>for getting into the program of your dreams.</p>
      </div>

      <div id="benefits" className="flex ">
        <img src={writing} alt="woman writing" />

        <div id="content">
          <div id="paragraphs">
            <h2>Is this the best program for me?</h2>
            <p>
              Getting into a top school or landing the job of your <br />
              dreams requires excellent preparation and top scores.
            </p>
          </div>
          <div id="white-line"></div>
          <div id="benefits-list">
            <p id="subtitle">Reach your goals with courses that let you:</p>
            <div className="benefit">
              <img src={checkIcon} alt="icon" />
              <p>Study whenever you want</p>
            </div>
            <div className="benefit">
              <img src={checkIcon} alt="icon" />
              <p>Study wherever you like</p>
            </div>
            <div className="benefit">
              <img src={checkIcon} alt="icon" />
              <p>Plan your perfect study schedule</p>
            </div>
            <div className="benefit">
              <img src={checkIcon} alt="icon" />
              <p>Get personal coaching</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
