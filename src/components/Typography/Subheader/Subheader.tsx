import styled from "styled-components";

const Subheader = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.subHeader};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-shadow: ${({ theme }) => theme.shadows.med};
  line-height: 4.4rem;
  letter-spacing: 0.05em;
`;

export default Subheader;
