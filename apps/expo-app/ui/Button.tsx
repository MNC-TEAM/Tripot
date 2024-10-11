import { GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

const Button = ({ onPress, label }: ButtonState) => {
  return (
    <ButtonStyled onPress={onPress}>
      <ButtonView>
        <ButtonText>{label}</ButtonText>
      </ButtonView>
    </ButtonStyled>
  );
};

export default Button;

interface ButtonState {
  onPress?: ((event: GestureResponderEvent) => void) | null;
  label: string;
}

const ButtonStyled = styled.Pressable`
  width: 100%;
`;

const ButtonView = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  background: #000;
  border-radius: 12px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;
