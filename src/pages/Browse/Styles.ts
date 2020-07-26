import styled from "styled-components";
import { landscape } from "../../assets/img";
import { Background } from "../../components/UI";

export const BrowseBackground = styled(Background)`
  background-image: linear-gradient(
      to right,
      rgba(34, 34, 34, 0.85),
      rgba(34, 34, 34, 0.85)
    ),
    url(${landscape});
`;
