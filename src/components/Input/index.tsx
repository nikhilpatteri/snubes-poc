import { ChangeEvent, useState } from "react";
import { InputText } from "./Input.styled";

interface InputType {
  type?: string;
  defaultValue?: string;
  placeholder?: string;
}

const Input = ({
  type = "text",
  defaultValue,
  placeholder,
}: InputType): JSX.Element => {
  const [text, setText] = useState<string>(defaultValue || "");

  const _handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  return (
    <InputText
      type={type}
      value={text}
      onChange={_handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
