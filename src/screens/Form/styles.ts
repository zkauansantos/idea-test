import styled from "styled-components/native";

import { Platform, StatusBar } from "react-native";

const isIos = Platform.OS === "ios";

export const HeaderContainer = styled.View`
  width: 100%;
  margin-bottom: 16px;
  margin-top: ${isIos ? "5%" : `${StatusBar.currentHeight}px`};
  padding: 0 5%;
`;

export const Wrapper = styled.View`
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const Input = styled.TextInput`
  padding: ${isIos ? "3.4%" : "2%"};
  border-radius: 4px;
  min-width: 40%;
  background-color: #333;
  border: 1px solid #666;
  color: #fff;
`;

export const FormContainer = styled.View`
  width: 100%;
  padding: 0 5%;
  gap: 16px;
  flex-direction: column;
  flex: 1;
  background-color: #222;
`;

