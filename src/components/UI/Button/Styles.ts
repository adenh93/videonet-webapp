import styled from "styled-components";
import { ButtonColor } from "./Button";

export const ButtonContainer = styled.div`
  position: relative;
`;

interface StyledButtonProps {
  icon?: string;
  color: ButtonColor;
  outline: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  color: ${({ color, outline, theme }) =>
    outline ? theme.palette.button[color] : theme.palette.text.main};
  font-size: ${({ theme }) => theme.fontSize.button};
  cursor: pointer;
  width: 18rem;
  height: 6rem;
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  background: ${({ color, outline, theme }) =>
    outline ? "none" : theme.palette.button[color]};
  border: ${({ color, outline, theme }) =>
    outline ? `2px solid ${theme.palette.button[color]}` : "none"};
  filter: drop-shadow(${({ theme }) => theme.shadows.dark});
  padding-left: ${({ icon }) => (icon ? "10%" : 0)};
  transition: transform 0.5s;

  &:disabled {
    cursor: not-allowed;
    border: ${({ color, outline, theme }) =>
      outline ? `2px solid ${theme.palette.button.disabled}` : "none"};
    background: ${({ color, outline, theme }) =>
      outline ? "none" : theme.palette.button.disabled};
    color: ${({ theme }) => theme.palette.button.disabled};
  }

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }
`;

export const ButtonIcon = styled.img`
  position: absolute;
  left: 10%;
  top: 25%;
`;
