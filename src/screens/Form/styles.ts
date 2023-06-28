import SelectDropdown from "react-native-select-dropdown";
import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;
  background-color: #222;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 24px;
`;

export const HeaderContainer = styled.View`
  height: 73px;
  margin-top: 48px;
  width: 100%;
`;

export const Wrapper = styled.View`
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Input = styled.TextInput`
  padding: 12px;
  border-radius: 4px;
  min-width: 40%;
  background-color: #333;
  border: 1px solid #666;
  color: #fff;
`;

export const FormContainer = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
  flex: 1;
`;

export const FooterContainer = styled.View`
  width: 100%;
  padding-bottom: 48px;
`;

