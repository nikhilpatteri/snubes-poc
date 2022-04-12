import styled from "styled-components";
import sectionImage from "../../assets/images/shutterstock-690928558.png";

export const WhySnubesContainer = styled.div`
  display: flex;
  background-image: url("${sectionImage}");
  background-size: cover;
  background-position: center;
  height: 506px;
  background-repeat: no-repeat;
  padding: 0 30%;
`;

export const Header = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  line-height: 1.57;
  letter-spacing: normal;
  color: #456;
  padding: 40px 0;
`;

export const SubHeader = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: normal;
  color: #456;
  padding-bottom: 10px;
`;

export const LongText = styled.div`
  font-size: 1.125rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #456;
  padding-bottom: 20px;
`;
