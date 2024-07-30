// logo.
// import logoIcon from "../../../assets/images/logo.png";
import logoIconL from "../../../assets/images/logo.png";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-center items-center">
      <img src={logoIconL} alt="logo" />
    </header>
  );
};
