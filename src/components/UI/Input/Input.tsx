import styled from "styled-components";
import { deviceWidths } from "../../../CONSTANTS";

const Input = styled.input`
  color: ${({ theme }) => theme.palette.text.input};
  font-size: ${({ theme }) => theme.fontSize.input};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  background-color: ${({ theme }) => theme.palette.background};
  font-family: "Lato", sans-serif;
  letter-spacing: 0.03em;
  height: 6rem;
  width: 73.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  padding: 1rem 14rem 1rem 8rem;
  border: 0;
  filter: drop-shadow(${({ theme }) => theme.shadows.med});

  @media (max-width: ${deviceWidths.tablet}) {
    width: 100%;
  }
`;

export default Input;
