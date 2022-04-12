import {
  FooterContainer,
  FooterLink,
  SingleSection,
} from "./footerSection.styled";
import footerImg from "../../assets/images/best-of-internet-service-2018-170-px.png";

const FooterSection = (): JSX.Element => {
  return (
    <FooterContainer>
      <SingleSection>
        <img src={footerImg} alt="Footer Icon" />
      </SingleSection>
      <SingleSection>
        <FooterLink>About us</FooterLink>
        <FooterLink>Become a Partner</FooterLink>
        <FooterLink>FAQ</FooterLink>
      </SingleSection>
      <SingleSection>
        <FooterLink>Imprint</FooterLink>
        <FooterLink>Terms & Conditions</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
      </SingleSection>
      <SingleSection>
        <FooterLink>support@snubes.com</FooterLink>
        <FooterLink>+49 (0) 305 5645327</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
      </SingleSection>
    </FooterContainer>
  );
};

export default FooterSection;
