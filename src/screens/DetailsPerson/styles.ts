import styled from 'styled-components';

import {
	Image,
	Platform,
	StatusBar,
	TouchableOpacity,
	View,
} from 'react-native';

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
  padding: 5% 5% 30%;
`;

export const HeaderContainer = styled(View)`
  width: 100%;
  flex-direction: column;
  margin-bottom: 4px;
  gap: 16px;
  align-items: center;
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
  width: 100%;
  height: 300px;
  border-radius: 8px;
`;

export const ContainerDocImage = styled(View)`
  align-items: center;
  justify-content: center;
  padding-bottom: 15%;
`;

export const ButtonFinish = styled(TouchableOpacity)`
  background-color: #7c3aed;
  width: 70%;
  align-items: center;
  padding: 10px;
`;
