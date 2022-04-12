import styled from "styled-components";
import sectionImage from "../assets/images/group-7.png";

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: white;
  padding: 0px 20%;
  justify-content: space-between;
`;

export const MainSection = styled.div`
  background-image: url("${sectionImage}");
  background-size: cover;
  background-position: center;
  height: 506px;
  background-repeat: no-repeat;
`;

export const NavList = styled.div`
  display: flex;
`;

export const NavListItem = styled.span`
  color: #7f7f7f;
  padding-left: 20px;
`;

export const IconSpan = styled.span`
  padding-left: 4px;
`;

export const FormSection = styled.div`
  background-color: white;
  display: flex;
  position: absolute;
  margin: 16px 20%;
  flex-direction: column;
  padding: 16px 32px;
  border-radius: 5px;
`;

export const MainSectionContent = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  color: #4a4a4a;
  font-size: 0.938rem;
  padding: 20px;
`;
