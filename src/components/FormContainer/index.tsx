import { FormSection } from "../../pages/Home.styled";
import Button from "../Button";
import Input from "../Input";
import PhoneInput from "../PhoneInput";
import {
  BtnContainer,
  FormHeader,
  InputContainer,
  InputLabel,
} from "./form.styled";

const FormContainer = () => {
  const _handleSubmit = (): void => {};

  return (
    <FormSection>
      <FormHeader>Find inbound call centers for your company</FormHeader>
      <div>Use our AI and Big Data driven call center sourcing solution</div>
      <InputContainer>
        <InputLabel>Company</InputLabel>
        <Input placeholder="Company" />
      </InputContainer>
      <InputContainer>
        <InputLabel>Name</InputLabel>
        <Input placeholder="Full Name" />
      </InputContainer>
      <InputContainer>
        <InputLabel>Phone</InputLabel>
        <PhoneInput
        // ={_handlePhoneNumber}
        // addInternationalOption
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>E-mail</InputLabel>
        <Input type="email" placeholder="name@mail.com" />
      </InputContainer>
      <BtnContainer>
        <Button onClick={_handleSubmit} value="Get Informed" />
      </BtnContainer>
    </FormSection>
  );
};

export default FormContainer;
