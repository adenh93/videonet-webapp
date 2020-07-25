import styled from "styled-components";

interface SectionProps {
  mt?: number;
  mb?: number;
}

const Section = styled.div<SectionProps>`
  margin-top: ${({ mt = 0 }) => mt}rem;
  margin-bottom: ${({ mb = 0 }) => mb} rem;
`;

export default Section;
