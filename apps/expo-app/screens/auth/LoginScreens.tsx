import LoginBtn from '@/components/Auth/LoginBtn';
import styled from 'styled-components/native';
import LogoSVG from '@/assets/logo.svg';
import { SafeAreaUi } from '@/ui/common/style';

const LoginScreens = () => {
  return (
    <SafeAreaViewStyle>
      <LogoView>
        <LogoSVG />
      </LogoView>
      <ButtonView>
        <LoginBtn type="kakao" />
        <LoginBtn type="apple" />
        <LoginBtn type="google" />
      </ButtonView>
    </SafeAreaViewStyle>
  );
};

export default LoginScreens;

const SafeAreaViewStyle = styled(SafeAreaUi)`
  justify-content: center;
  align-items: center;
  background: #fff;
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
