import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isIos = Platform.OS === 'ios';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #222;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  margin-bottom: 16px;
  margin-top: ${isIos ? '5%' : `${StatusBar.currentHeight}px`};
  padding: 0 5%;
`;

export const FormContainer = styled.View`
  width: 100%;
  padding: 0 5%;
  gap: 16px;
  flex-direction: column;
  flex: 1;
  background-color: #222;
`;

export const FooterContainer = styled.View`
  width: 100%;
  padding: 10% 5%;
`;

export const ButtonSendImageDocument = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  background-color: #555;
  flex-direction: row;
  justify-content: space-between;
`;
