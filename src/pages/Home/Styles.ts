import styled from "styled-components";
import cars from "../../assets/img/cars.jpg";

export const Background = styled.div`
  height: calc(100vh - ${({ theme }) => theme.margins.gutter * 2}rem);
  border-radius: 0.3rem;
  background-image: linear-gradient(
      to right bottom,
      rgba(249, 119, 148, 0.63) 0.3%,
      rgba(98, 58, 162, 0.9) 82%
    ),
    url(${cars});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  top: 15%;
  left: 12%;
`;
