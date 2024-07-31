import { components } from "react-select";
import icon from "../../../../../assets/icons/dropdown-icon.svg";

export const CustomDropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        src={icon}
        alt="dropdown icon"
        style={{ width: "1rem", height: "1rem" }}
      />
    </components.DropdownIndicator>
  );
};
