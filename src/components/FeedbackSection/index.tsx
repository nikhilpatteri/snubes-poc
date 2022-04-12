import talixoImg from "../../assets/images/talixo-logo-black-copy-5.png";
import companyLogos from "../../assets/images/group-14.jpg";
import {
  CeoName,
  CompanyLogo,
  CompanyLogos,
  FeedbackContainer,
  FeedbackText,
} from "./feedbackSection.styled";

const FeedbackSection = (): JSX.Element => (
  <>
    <FeedbackContainer>
      <CompanyLogo>
        <img src={talixoImg} alt="Company logo" height="20px" width="80px" />
      </CompanyLogo>
      <FeedbackText>
        “Finding a suitable outsourcing service provider through Snubes was very
        easy and our personal consultant helped us every step of the way. After
        a short time we had good offers on the table. An on-site visit confirmed
        the positive impression and we have now found a matching partner. Thank
        you for your great support, which has helped us a lot in the selection
        process.”
      </FeedbackText>
      <CeoName>
        <b>Jan Brenneke</b>, VP Operations
      </CeoName>
    </FeedbackContainer>
    <CompanyLogos>
      <img src={companyLogos} alt="Company logos" width="100%" />
    </CompanyLogos>
  </>
);

export default FeedbackSection;
