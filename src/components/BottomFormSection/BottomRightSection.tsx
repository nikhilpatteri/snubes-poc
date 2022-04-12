import Button from "../Button";
import {
  BtnContainer,
  InputContainer,
  InputLabel,
} from "../FormContainer/form.styled";
import Input from "../Input";
import {
  BlueHeader,
  BottomForm,
  RightSection,
} from "./bottomFormSection.styled";

const BottomRightSection = (): JSX.Element => {
  const _handleSubmit = (): void => {};

  return (
    <RightSection>
      <BlueHeader>Find inbound call centers</BlueHeader>
      <BottomForm>
        <InputContainer>
          <InputLabel>Company</InputLabel>
          <Input defaultValue="" placeholder="Company" />
        </InputContainer>
        <InputContainer>
          <InputLabel>Name</InputLabel>
          <Input defaultValue="" placeholder="Full name" />
        </InputContainer>
        <InputContainer>
          <InputLabel>Phone</InputLabel>
          <Input defaultValue="" placeholder="+49" />
        </InputContainer>
        <InputContainer>
          <InputLabel>E-mail</InputLabel>
          <Input defaultValue="" placeholder="name@mail.com" />
        </InputContainer>
        <BtnContainer>
          <Button onClick={_handleSubmit} value="Get Informed" />
        </BtnContainer>
      </BottomForm>
    </RightSection>
  );
};

export default BottomRightSection;
