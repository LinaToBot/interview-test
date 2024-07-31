// libraries.
import { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { CustomDropdownIndicator } from "./CustomDropdownIndicator/CustomDropdownIndicator";
// assets.
import gMat from "../../../../assets/images/gmap-x2.png";
import toelf from "../../../../assets/images/toelf-x2.png";
import gre from "../../../../assets/images/gre-x2.png";
// styles.
import "./FirstSection.css";

export const FirstSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const options = [
    { value: "test1", label: "G MAT" },
    { value: "test2", label: "TOELF" },
    { value: "test3", label: "GRE" },
  ];

  const handleChange = (option: any) => {
    setSelectedOption(option);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsFormSubmitted(true);

    if (!selectedOption) {
      console.log("Please select an option");
    } else {
      alert("Your request was sended");
    }
  };

  const customStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: "Raleway, sans-serif",
      fontSize: "1rem",
      border: state.isFocused ? "1px solid #a8895b" : "1px solid #a4a89d",
      boxShadow: state.isFocused ? "0 0 0 1px #a8895b" : "1px solid #a4a89d",
      borderRadius: "3px",
      padding: "0 0.5rem",
      width: "100%",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "0",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Raleway, sans-serif",
      fontSize: "1rem",
      backgroundColor: state.isFocused ? "#a8895b" : "#ffffff",
      color: state.isFocused ? "#ffffff" : "#36414d",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#36414d", // Custom text color
    }),
  };

  return (
    <section className="first-section-home flex">
      <div id="cta-p" className="">
        <h1 className="title font-raleway">
          It's time for you to finally <br /> <span>Tame Your Test!</span>
        </h1>

        <div className="grey-line h-[1px] bg-[#a4a89d]" />

        <div className="after-grey-line">
          <p className="paragraph font-raleway">
            Get started with your test preparation with unique <br />{" "}
            personalized courses and experts that will work with you <br /> hand
            in hand.
          </p>

          <div className="exams-container flex ">
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
        <form className="flex bg-[#ffffff]" onSubmit={handleSubmit}>
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
          <div>
            <Select
              options={options}
              styles={customStyles}
              placeholder="- Select -"
              components={{ DropdownIndicator: CustomDropdownIndicator }}
              value={selectedOption}
              onChange={handleChange}
            />
            {isFormSubmitted && !selectedOption && (
              <div className=" font-raleway font-[1rem] mt-[0.5rem] ml-[0.5rem] text-red-600 font-[500]">
                This field is required
              </div>
            )}
          </div>

          <button type="submit">SEND</button>
        </form>
      </div>
    </section>
  );
};
