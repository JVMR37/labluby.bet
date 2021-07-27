import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputField: React.FC<InputProps> = (props) => {
  return <input {...props}></input>;
};
