import React from "react";

import "./Button.css";

interface ButtonProps {
  text: string;
  iconSrc?: string;
}

const CustomButton = ({ text, iconSrc }: ButtonProps) => {
  return (
    <button
      onClick={() => window.alert("Button Clicked!")}
      className="custom-btn"
    >
      {iconSrc && <img className="btn-img" src={iconSrc} alt="button icon" />}
      {text && <p>{text}</p>}
    </button>
  );
};

export default CustomButton;
