import styled from "styled-components";

export const BottomFormcontainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 20%;
  flex: 1;
`;

export const LeftSection = styled.div`
  display: flex;
  flex: 0.6;
  flex-direction: column;
  padding-right: 30px;
`;

export const RightSection = styled.div`
  display: flex;
  flex: 0.4;
  padding-top: 40px;
  flex-direction: column;
`;

export const BlueHeader = styled.div`
  align-items: center;
  font-size: 1.75rem;
  font-weight: bold;
  display: flex;
  color: white;
  background-color: #0099ee;
  text-align: center;
  height: 60px;
  justify-content: center;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const BottomForm = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #0099ee;
  background-color: #f9f9f9;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 30px 0px;
`;
