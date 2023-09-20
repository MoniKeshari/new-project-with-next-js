import React from 'react'
interface textFieldProps extends React.AllHTMLAttributes<HTMLInputElement>{
    label?:string;
    onChange?:(e: React.SyntheticEvent<HTMLInputElement>)=> void
    className?:string;
    labelclassname?:string;
}
const InputBaseField = (props:textFieldProps) => {
    const {label, className, labelclassname }=props;
  return (
    <div>
        {label && (<label className={labelclassname}>{label}</label>)}
        <input {...props}  className= {className} />
    </div>
  )
}

export default InputBaseField