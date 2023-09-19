import React from "react";
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  labelclassname?:string;
  
}
const CustomTextarea = (props: TextareaProps) => {
  const { className, label, labelclassname } = props;
  return(
    <div>
           {label && (<label className={labelclassname}>{label}</label>)}

     <textarea {...props} className={className} />
    </div>

  )
};

export default CustomTextarea;
