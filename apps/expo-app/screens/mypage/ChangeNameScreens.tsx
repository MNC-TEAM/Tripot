import Button from '@/ui/Button';
import { useRouter } from 'expo-router';
import styled from 'styled-components/native';

const ChangeNameScreens = () => {
  const router = useRouter();

  return (
    <ViewStyle>
      <Label>닉네임을 입력해주세요</Label>
      {/* 
        TODO
        로그인 페이지가 끝났을경우 Input창과 함께 기능 구현
      */}
      <Button onPress={() => router.back()} label="저장하기" />
    </ViewStyle>
  );
};

export default ChangeNameScreens;

const ViewStyle = styled.View`
  padding: 30px 24px 73px;
  flex: 1;
  justify-content: space-between;
`;

const Label = styled.Text`
  font-size: 16px;
  color: #fff;
`;
