import {
  Header,
  LongText,
  SubHeader,
} from "../WhySnubesSection/whySnubes.styled";
import { LeftSection } from "./bottomFormSection.styled";

const BottomLeftSection = () => {
  return (
    <LeftSection>
      <Header>Frequently Asked Questions</Header>
      <SubHeader>Are the call centers verified?</SubHeader>
      <LongText>
        All call centers in our database are checked by quality assurance
        experts. We also take a look at their data and track the key performance
        indicators. In addition, clients rate call centers and share their
        customer experience.
      </LongText>
      <SubHeader>Which inbound services are offered at Snubes?</SubHeader>
      <LongText>
        Our listed call centers offer a broad spectrum of customer services,
        such as technical support, first-level support, helpdesk,
        overflow/after-hours support, etc.
      </LongText>
      <SubHeader>Are there any costs?</SubHeader>
      <LongText>
        The services of Snubes are free of charge and our call center experts
        advise you independently and personally. Together we strive to find the
        optimal solution.
      </LongText>
    </LeftSection>
  );
};

export default BottomLeftSection;
