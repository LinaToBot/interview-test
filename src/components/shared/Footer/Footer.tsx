// assets.
import facebookIcon from "../../../assets/icons/facebook-brands (2).svg";
import instagramIcon from "../../../assets/icons/instagram-brands (3).svg";
import twitterIcon from "../../../assets/icons/twitter-brands (3).svg";

// styles.
import "./Footer.css";

export const Footer: React.FC = () => {
  const fontStyles = "font-raleway font-[1rem] font-[#36414d] font-[400]";

  return (
    <footer className="footer flex">
      <p className={fontStyles}>© Tame Your Test 2021</p>
      <div className="flex flex-row  gap-[2rem] ">
        <img src={facebookIcon} alt="facebook icon" />
        <img src={instagramIcon} alt="instagram icon" />
        <img src={twitterIcon} alt="twitter icon" />
      </div>
      <div className="final-texts flex">
        <p className={fontStyles}>Terms of Use.</p>
        <p className={fontStyles}> Privacy Policy</p>
      </div>
    </footer>
  );
};
