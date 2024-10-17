import { ReactNode } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const InputLabel = ({
  children,
  placeholder,
  label,
  color,
}: {
  children: ReactNode;
  placeholder?: string;
  label?: string;
  color?: string;
}) => {
  return (
    <View>
      {label && <Label color={color}>{label}</Label>}
      <Box color={color}>
        <InputStyle color={color} placeholder={placeholder} />
        {children}
      </Box>
    </View>
  );
};

export default InputLabel;

const Label = styled.Text<{ color?: string }>`
  font-size: 16px;
  margin-bottom: 12px;
  color: ${({ color }) => (color ? color : '#000')};
`;

const Box = styled.View<{ color?: string }>`
  border: 1px;
  border-radius: 12px;
  border-color: ${({ color }) => (color ? color : '#000')};
  height: 56px;
  padding: 0 13px 0 20px;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const InputStyle = styled.TextInput<{ color?: string }>`
  font-size: 13px;
  flex: 1;
  font-weight: 500;
  color: ${({ color }) => (color ? color : '#000')};
`;
