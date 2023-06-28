import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ disabled }: { disabled: boolean }) =>
    disabled ? "#999" : " #7c3aed"};
  border-radius: 48px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
