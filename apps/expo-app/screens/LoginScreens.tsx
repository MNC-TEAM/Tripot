import LoginBtn from '@components/Auth/LoginBtn';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const LoginScreens = () => {
  return (
    <LoginView>
      <LogoView>
        <Image source={require('@assets/Logo.png')} />
      </LogoView>
      <ButtonView>
        <LoginBtn type="kakao" />
        <LoginBtn type="apple" />
        <LoginBtn type="google" />
      </ButtonView>
    </LoginView>
  );
};

export default LoginScreens;

const LoginView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LogoView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ButtonView = styled.View`
  gap: 9px;
  margin-top: auto;
  padding-bottom: 75px;
`;
