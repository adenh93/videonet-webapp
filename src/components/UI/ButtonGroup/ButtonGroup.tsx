import styled from "styled-components";
import { StyledButton } from "../Button/Styles";

const ButtonGroup = styled.div`
  display: flex;

  ${StyledButton} {
    margin-right: 2rem;
  }
`;

export default ButtonGroup;
