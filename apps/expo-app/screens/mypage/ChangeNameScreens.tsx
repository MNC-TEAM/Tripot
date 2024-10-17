import Button from '@/ui/Button';
import InputLabel from '@/ui/input/InputLabel';
import Redundant from '@/ui/input/Redundant';
import { useRouter } from 'expo-router';
import styled from 'styled-components/native';

const ChangeNameScreens = () => {
  const router = useRouter();

  return (
    <ViewStyle>
      <InputLabel label="닉네임을 입력해주세요" color="#fff">
        <Redundant />
      </InputLabel>
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
