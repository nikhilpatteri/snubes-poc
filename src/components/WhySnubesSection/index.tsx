import Grid from "@material-ui/core/Grid";
import {
  Header,
  LongText,
  SubHeader,
  WhySnubesContainer,
} from "./whySnubes.styled";

const WhySnubesSection = (): JSX.Element => {
  return (
    <WhySnubesContainer>
      <Grid container>
        <Grid item>
          <Header>Why Snubes?</Header>
          <SubHeader>Trusted Know-How</SubHeader>
          <LongText>
            We have more than 20 years of experience and continuously check call
            centeres for their quality and capabilities. Customers like Allianz
            trust Snubes industry
          </LongText>
          <SubHeader>Time and cost savings</SubHeader>
          <LongText>
            With Snubes you can easily compare prices, quality and availability,
            and find more potential suppliers. Reach your goal faster and save
            resources
          </LongText>
          <SubHeader>Satisfaction quaranteed</SubHeader>
          <LongText>
            We offer a validated data-based approach to procurement, rather than
            awarding contracts only based on the lowest price, an existing
            relationship or 'gut feeling'.
          </LongText>
        </Grid>
      </Grid>
    </WhySnubesContainer>
  );
};

export default WhySnubesSection;
