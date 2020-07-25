import React from "react";
import { ButtonContainer, StyledButton, ButtonIcon } from "./Styles";

export type ButtonColor = "primary" | "secondary" | "success";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: string;
  color?: ButtonColor;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  color = "primary",
  outline = false,
  ...props
}) => (
  <ButtonContainer>
    {icon && <ButtonIcon src={icon} />}
    <StyledButton
      icon={icon}
      color={color}
      outline={outline}
      {...props}
    ></StyledButton>
  </ButtonContainer>
);

export default Button;
