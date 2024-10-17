import LoginBtn from '@/components/Auth/LoginBtn';
import styled from 'styled-components/native';
import LogoSVG from '@/assets/logo.svg';

const LoginScreens = () => {
  return (
    <LoginView>
      <LogoView>
        <LogoSVG />
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
