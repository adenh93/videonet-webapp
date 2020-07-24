import styled from "styled-components";

const Subtitle = styled.h3`
  color: ${({ theme }) => theme.palette.text.light};
  font-size: ${({ theme }) => theme.fontSize.subTitle};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 2.5rem;
`;

export default Subtitle;
