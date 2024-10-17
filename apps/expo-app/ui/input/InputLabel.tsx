import { ReactNode } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const InputLabel = ({
  children,
  placeholder,
  label,
}: {
  children: ReactNode;
  placeholder?: string;
  label?: string;
}) => {
  return (
    <View>
      {label && <Label>{label}</Label>}
      <Box>
        <InputStyle placeholder={placeholder} />
        {children}
      </Box>
    </View>
  );
};

export default InputLabel;

const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 12px;
`;

const Box = styled.View`
  border: 1px;
  border-radius: 12px;
  height: 56px;
  padding: 0 13px 0 20px;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const InputStyle = styled.TextInput`
  font-size: 13px;
  flex: 1;
  font-weight: 500;
`;
