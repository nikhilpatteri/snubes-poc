import DropdownIcon from "../assets/svg/DropdownIcon";
import Logo from "../assets/svg/Logo";
import BottomFormSection from "../components/BottomFormSection";
import FeedbackSection from "../components/FeedbackSection";
import FooterSection from "../components/FooterSection";
import FormContainer from "../components/FormContainer";
import MiddleSection from "../components/MiddleSection";
import WhySnubesSection from "../components/WhySnubesSection";
import {
  CopyRight,
  IconSpan,
  MainSection,
  NavBar,
  NavList,
  NavListItem,
} from "./Home.styled";

const Home = (): JSX.Element => {
  return (
    <>
      <NavBar style={{ height: "70px" }}>
        <Logo />
        <NavList>
          <NavListItem>About Us</NavListItem>
          <NavListItem>How it works</NavListItem>
          <NavListItem>Become a Partner</NavListItem>
          <NavListItem>UR</NavListItem>
          <IconSpan>
            <DropdownIcon />
          </IconSpan>
          <NavListItem>EN</NavListItem>
          <IconSpan>
            <DropdownIcon />
          </IconSpan>
          <NavListItem>Sign In</NavListItem>
          <NavListItem>Get Access</NavListItem>
        </NavList>
      </NavBar>
      <MainSection>
        <FormContainer />
      </MainSection>
      <MiddleSection />
      <WhySnubesSection />
      <FeedbackSection />
      <BottomFormSection />
      <FooterSection />
      <CopyRight>© 2019 Snubes GmbH All Rights Reserved.</CopyRight>
    </>
  );
};

export default Home;
