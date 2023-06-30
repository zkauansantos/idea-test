import styled from 'styled-components';
import { Platform, TextInput, View } from 'react-native';

const isIos = Platform.OS === 'ios';

export const FieldContainer = styled(View)`
  flex-direction: column;
`;
export const Input = styled(TextInput)`
  padding: ${isIos ? '3.4%' : '2%'};
  border-radius: 4px;
  min-width: 40%;
  background-color: #333;
  border: 1px solid #666;
  color: #fff;
`;
