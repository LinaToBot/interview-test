// assets.
import img1 from "../../../../assets/images/person1-x2.png";
import img2 from "../../../../assets/images/person2-x2.png";
import img3 from "../../../../assets/images/person3-x2.png";
// styles.
import "./ThridSection.css";
export const ThirdSection: React.FC = () => {
  return (
    <section id="third-section" className="flex justify-center bg-[#ffffff]">
      <h1 className="text-center mt-[3rem] mb-[4rem] font-raleway font-[#36414d] tracking-normal">
        Know some of the students who had Ace the test.
      </h1>
      <div className="testimonies">
        <div className="testimony">
          <img src={img1} alt="person1" />
          <p className="font-raleway titles">Estanislao D.</p>
          <p className="font-raleway paragraphs">
            by Jaison Justus,Tame Your Test really helped me realize the
            importance of having a solid structure when solving problems.
            Moreover, the course was very well prepared and had tons of material
            to practice and examples to drill down on specific problem types.
            Really pleased with the course. 16 Jun 2016
          </p>
        </div>
        <div className="testimony">
          <img src={img2} alt="person2" />
          <p className="font-raleway titles">Estanislao D.</p>
          <p className="font-raleway paragraphs">
            by Jaison Justus,Tame Your Test really helped me realize the
            importance of having a solid structure when solving problems.
            Moreover, the course was very well prepared and had tons of material
            to practice and examples to drill down on specific problem types.
            Really pleased with the course. 16 Jun 2016
          </p>
        </div>
        <div className="testimony ">
          <img src={img3} alt="person3" />
          <p className="font-raleway titles">Estanislao D.</p>
          <p className="font-raleway paragraphs">
            by Jaison Justus,Tame Your Test really helped me realize the
            importance of having a solid structure when solving problems.
            Moreover, the course was very well prepared and had tons of material
            to practice and examples to drill down on specific problem types.
            Really pleased with the course. 16 Jun 2016
          </p>
        </div>
      </div>
    </section>
  );
};
