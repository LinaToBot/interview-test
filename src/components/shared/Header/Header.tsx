// logo.
import logoIconL from "../../../assets/images/logo.png";
// styles
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-center items-center">
      <img src={logoIconL} alt="logo" />
    </header>
  );
};
