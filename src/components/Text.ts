import styled from 'styled-components';
import { Text as TextRN } from 'react-native';

interface TextProps {
  weight?: '400' | '600' | '700';
  color?: string;
  size?: number;
  opacity?: number;
  align?: string;
}

export const Text = styled(TextRN)<TextProps>`
  font-family: ${({ weight }) =>
		weight ? `GeneralSans-${weight}` : 'GeneralSans-400'};
  color: ${({ color }) => color || '#FFF'};
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  opacity: ${({ opacity }) => opacity || 1};
  text-align: ${({ align }) => (align ? align : 'start')};
`;
