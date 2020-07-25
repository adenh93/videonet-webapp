import styled from "styled-components";

export const Poster = styled.img`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.light};
  width: 16.5rem;
  height: 25rem;
  filter: drop-shadow(${({ theme }) => theme.shadows.dark});
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
