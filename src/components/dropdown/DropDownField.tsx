import React from "react";
interface DropDownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: string;
  optionlabel?: string[];
  labelclassname?: string;
}

const DropDownField = (props: DropDownProps) => {
  const { label, className, optionlabel, labelclassname } = props;
  return (
    <>
      {label && <label className={labelclassname}>{label}</label>}

      <select {...props} name="cars" id="cars" className={className}>
        {optionlabel?.map((item: any, index) => (
          <option value="volvo" key={index}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDownField;
