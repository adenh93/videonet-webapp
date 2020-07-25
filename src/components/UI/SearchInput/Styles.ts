import styled from "styled-components";

export const InputContainer = styled.span`
  position: relative;
`;

export const InputIcon = styled.img`
  width: 2.6rem;
  position: absolute;
  z-index: 3;
  transform: translate(130%, 65%);
`;

export const SearchButton = styled.button`
  position: absolute;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.button.primary};
  color: ${({ theme }) => theme.palette.text.main};
  font-size: ${({ theme }) => theme.fontSize.button};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-family: "Lato", sans-serif;
  letter-spacing: 0.03em;
  height: 6rem;
  width: 12.5rem;
  transform: translateX(calc(-100% + 1px));
  border: none;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.rounded};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.rounded};
`;
