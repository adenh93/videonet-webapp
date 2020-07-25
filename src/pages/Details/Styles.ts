import styled from "styled-components";

interface BackgroundProps {
  image: string;
}

export const Background = styled.div<BackgroundProps>`
  height: calc(100vh - ${({ theme }) => theme.margins.gutter * 2}rem);
  border-radius: 0.3rem;
  background-image: linear-gradient(
      to right,
      rgba(34, 34, 34, 0.85),
      rgba(34, 34, 34, 0.85)
    ),
    url(${({ image }) => image});
  background-size: cover;
  background-position: top;
  position: relative;
`;
