import styled from "styled-components";

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 6.5rem;
  letter-spacing: 0.1em;
`;

export default Title;
