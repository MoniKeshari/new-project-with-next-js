import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    className?: string;
    buttonclassname?: string;
    onClickHandler?:()=>void;
  }
const ButtonComponent = (props:ButtonProps) => {
    const {label, className, buttonclassname, onClickHandler} = props;
  return (
    <>
      <button className={buttonclassname} onClick={onClickHandler}>{label}</button>
    </>
  );
};

export default ButtonComponent;
