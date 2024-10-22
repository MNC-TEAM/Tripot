import { useRouter } from 'expo-router';
import styled from 'styled-components/native';

const LoginBtn = ({ type }: LoginBtnState) => {
  const router = useRouter();
  return (
    <ButtonStyle type={type} onPress={() => router.push('/join')}>
      {type === 'kakao' && (
        <ButtonIcon source={require('@/assets/login/kakao.png')} />
      )}
      {type === 'apple' && (
        <ButtonIcon source={require('@/assets/login/apple.png')} />
      )}
      {type === 'google' && (
        <ButtonIcon source={require('@/assets/login/google.png')} />
      )}
      <ButtonText type={type}>
        {type === 'kakao' && '카카오로 시작히기'}
        {type === 'apple' && 'Apple로 시작하기'}
        {type === 'google' && 'Google로 시작하기'}
      </ButtonText>
    </ButtonStyle>
  );
};

export default LoginBtn;

interface LoginBtnState {
  type: 'kakao' | 'apple' | 'google';
}

const ButtonStyle = styled.Pressable<LoginBtnState>`
  width: 193px;
  height: 53px;
  background: ${props => {
    if (props.type === 'kakao') {
      return '#f9e000';
    }
    if (props.type === 'apple') {
      return '#000000';
    }
    if (props.type === 'google') {
      return '#e8e8e8';
    }
  }};
  align-items: center;
  flex-direction: row;
  gap: 6px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 12px;
`;

const ButtonIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

const ButtonText = styled.Text<LoginBtnState>`
  font-size: 16px;
  color: ${props => {
    if (props.type === 'kakao') {
      return '#000';
    }
    if (props.type === 'apple') {
      return '#fff';
    }
    if (props.type === 'google') {
      return '#4f4f4f';
    }
  }};
`;
