import Grid from "@material-ui/core/Grid";
import ReceiveOffersIcon from "../../assets/svg/ReceiveOffersIcon";
import SignUpIcon from "../../assets/svg/SignUpIcon";
import SourceSmarterIcon from "../../assets/svg/SourceSmarterIcon";
import { IconContainer } from "./middleSection.styled";

const MiddleSection = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <IconContainer>
          <div>
            <SignUpIcon />
          </div>
          <div>Sign up for free</div>
          <div>
            Singing up and setting up your project takes less than 5 minutes
          </div>
        </IconContainer>
      </Grid>
      <Grid item xs={12} md={4}>
        <IconContainer>
          <div>
            <SourceSmarterIcon />
          </div>
          <div>Source smarter</div>
          <div>
            Our data-based AI and our experts will help you find exactly what
            you are looking for
          </div>
        </IconContainer>
      </Grid>
      <Grid item xs={12} md={4}>
        <IconContainer>
          <div>
            <ReceiveOffersIcon />
          </div>
          <div>Receive offers</div>
          <div>
            With our insights you always receive high-quality proposals at best
            price
          </div>
        </IconContainer>
      </Grid>
    </Grid>
  );
};

export default MiddleSection;
