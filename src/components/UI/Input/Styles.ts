import styled from "styled-components";

export const InputContainer = styled.span`
  position: relative;
`;

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.palette.text.input};
  font-size: ${({ theme }) => theme.fontSize.input};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  background-color: ${({ theme }) => theme.palette.background};
  font-family: "Lato", sans-serif;
  letter-spacing: 0.03em;
  height: 6rem;
  width: 73.5rem;
  border-radius: 20rem;
  padding: 1rem 12rem 1rem 8rem;
  border: 0;
  filter: drop-shadow(${({ theme }) => theme.shadows.med});
`;

export const InputIcon = styled.img`
  width: 2.6rem;
  position: absolute;
  z-index: 3;
  transform: translate(130%, 65%);
`;
