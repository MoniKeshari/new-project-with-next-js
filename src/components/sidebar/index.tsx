import React from "react";
import InputBaseField from "../input/InputBaseField";
const SideBar = () => {
  return (
    <div>
      <InputBaseField />
      <InputBaseField
        label="text"
        onChange={(e: any) => console.log(e.target.value, "here")}
      />
    </div>
  );
};

export default SideBar;
