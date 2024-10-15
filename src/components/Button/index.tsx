import React from "react";

interface IButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  text: string;
  onClick?: () => void;
  modifier?: "primary" | "normal";
}

const getButtonClass = (modifier?: "primary" | "normal") => {
  return modifier === "normal"
    ? "btn btn-warning w-[41.25vw] lg:w-[30vw] h-[11.8vw] lg:text-[2vw] lg:h-[4.8vw] min-h-0 rounded-[33px] bg-white text-[#F98F29] hover:bg-white hover:opacity-70 border border-[#F98F29]"
    : "btn btn-warning w-[41.25vw] lg:w-[30vw] h-[11.8vw] lg:text-[2vw] lg:h-[4.8vw] min-h-0 rounded-[33px] bg-[#F98F29] text-white";
};

const Button = (props: IButtonProps) => {
  return (
    <button
      className={getButtonClass(props.modifier)}
      onClick={props.onClick}
      {...props}
    >
      {props.text}
    </button>
  );
};

export default Button;
