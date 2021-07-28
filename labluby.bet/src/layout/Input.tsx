import { InputHTMLAttributes } from "react";
import { StyledInput } from "../GlobalStyles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputField: React.FC<InputProps> = (props) => {
  return <StyledInput {...props}></StyledInput>;
};
