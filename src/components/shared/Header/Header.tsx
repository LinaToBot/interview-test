// logo.
// import logoIcon from "../../../assets/images/logo.png";
import logoIconL from "../../../assets/images/logo-2x.png";
import "./header.css";

export const Header: React.FC = () => {
  return (
    <header className="text-[#000] font-[900]">
      <img src={logoIconL} alt="logo" />
      {/* <picture>
        <source src={logoIconL} media="(max-width: 810px)" type="logo-2x/png" />
      </picture> */}
      header
    </header>
  );
};
