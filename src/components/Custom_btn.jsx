import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomButton = ({
  title,
  trailingIcon, // expects an icon definition like faUser
  onPress,
  className = "",
}) => {
  return (
    <button
      className={`border-1 border-blue-500 text-blue-500 px-2 py-2 rounded-lg inline-flex items-center justify-center text-base hover:bg-blue-200 active:scale-95 transition duration-150 gap-x-2 ${className}`}
      onClick={onPress}
    >
      <span>{title}</span>
      {trailingIcon && <FontAwesomeIcon icon={trailingIcon} />}
    </button>
  );
};

export default CustomButton;
