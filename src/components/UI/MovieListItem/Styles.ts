import styled, { keyframes } from "styled-components";

const entry = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const Poster = styled.img`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.light};
  width: 16.5rem;
  height: 25rem;
  filter: drop-shadow(${({ theme }) => theme.shadows.dark});
  transform: scale(1);
  transition: all 0.3s;
  animation: ${entry} 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
