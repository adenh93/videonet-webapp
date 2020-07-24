import styled from "styled-components";
import { landscape } from "../../assets/img";

export const Background = styled.div`
  height: calc(100vh - ${({ theme }) => theme.margins.gutter * 2}rem);
  border-radius: 0.3rem;
  background-image: linear-gradient(
      to right,
      rgba(34, 34, 34, 0.85),
      rgba(34, 34, 34, 0.85)
    ),
    url(${landscape});
  background-size: cover;
  background-position: top;
  position: relative;
`;
