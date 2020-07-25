import styled from "styled-components";

const Content = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.widths.content}%;
  left: calc((100% - ${({ theme }) => theme.widths.content}%) / 2);
  top: 15%;
`;

export default Content;
