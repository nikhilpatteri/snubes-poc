import { BottomFormcontainer } from "./bottomFormSection.styled";
import BottomLeftSection from "./BottomLeftSection";
import BottomRightSection from "./BottomRightSection";

const BottomFormSection = (): JSX.Element => {
  return (
    <BottomFormcontainer>
      <BottomLeftSection />
      <BottomRightSection />
    </BottomFormcontainer>
  );
};

export default BottomFormSection;
