import { StyledButton } from "./Button.styled";

interface ButtonType {
  value: string;
  onClick: () => void;
}

const Button = ({ value, onClick }: ButtonType): JSX.Element => {
  const _handleClick = (): void => {
    onClick();
  };
  return <StyledButton onClick={_handleClick}>{value}</StyledButton>;
};

export default Button;
