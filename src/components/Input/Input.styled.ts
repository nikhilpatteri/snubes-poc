import styled from "styled-components";

export const InputText = styled.input`
  padding: 15px 8px;
  width: 360px;
  // width: 100%;
  border-radius: 5px;
  border: 1px solid grey;
  &:focus {
    outline: none;
    border-color: #0099ee;
  }
  &:placeholder {
    color: #aabbcc;
  }
`;
