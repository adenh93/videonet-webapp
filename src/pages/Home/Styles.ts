import styled from "styled-components";
import cars from "../../assets/img/cars.jpg";
import { Background } from "../../components/UI";

export const HomeBackground = styled(Background)`
  background-image: linear-gradient(
      to right bottom,
      rgba(249, 119, 148, 0.63) 0.3%,
      rgba(98, 58, 162, 0.9) 82%
    ),
    url(${cars});
  clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 100%);
`;
