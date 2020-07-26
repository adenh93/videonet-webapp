import styled from "styled-components";

export const Background = styled.div`
  height: calc(100vh - ${({ theme }) => theme.margins.gutter * 2}rem);
  border-radius: 0.3rem;
  background-size: cover;
  background-position: top;
  position: relative;
  overflow-y: auto;
`;

export default Background;
