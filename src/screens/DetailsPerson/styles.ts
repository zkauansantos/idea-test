import styled from 'styled-components';

import { Image, Platform, StatusBar, View } from 'react-native';

const isIos = Platform.OS === 'ios';

export const Content = styled(View)`
  flex: 1;
  background-color: #222;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 24px;
`;

export const ContainerDetails = styled(View)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 5%;
`;

export const HeaderContainer = styled(View)`
  width: 100%;
  margin-bottom: 4px;
  margin-top: ${isIos ? '5%' : `${StatusBar.currentHeight}px`};
  padding: 0 5%;
`;

export const FieldDetail = styled(View)`
  width: 100%;
  border-bottom-width: 2px;
  gap: 8px;
  border-bottom-color: #888;
  margin-top: 16px;
`;

export const DocumentImage = styled(Image)`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;
