import React from "react";
import { InputContainer, StyledInput, InputIcon } from "./Styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

const Input: React.FC<InputProps> = ({ icon, ...props }) => (
  <InputContainer>
    {icon && <InputIcon src={icon} />}
    <StyledInput {...props} />
  </InputContainer>
);

export default Input;
