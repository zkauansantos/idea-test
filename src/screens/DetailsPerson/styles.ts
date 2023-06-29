import styled from "styled-components/native";

import { Platform, StatusBar } from "react-native";

const isIos = Platform.OS === "ios";
export const Content = styled.View`
  flex: 1;
  background-color: #222;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 24px;
`;

export const ContainerDetails = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 5%;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  margin-bottom: 16px;
  margin-top: ${isIos ? "5%" : `${StatusBar.currentHeight}px`};
  padding: 0 5%;
`;
