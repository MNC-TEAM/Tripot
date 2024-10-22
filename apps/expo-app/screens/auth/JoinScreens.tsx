import { SafeAreaUi } from '@/ui/common/style';
import InputLabel from '@/ui/input/InputLabel';
import Redundant from '@/ui/input/Redundant';
import { useRouter } from 'expo-router';
import styled from 'styled-components/native';

const JoinScreens = () => {
  const router = useRouter();

  return (
    <SafeAreaViewStyle>
      <CotainerView>
        <UpScreenView>
          <TitleStyled>트립팟에 오신것을{'\n'}환영합니다</TitleStyled>

          <InputStyled>
            <InputLabel label="닉네임을 입력해주세요">
              <Redundant />
            </InputLabel>
            {/* 
              TODO - 지역 검색 기능
              <InputView>
                <InputLabel>추천받고 싶은 지역은?</InputLabel>
                <InputBox>
                  <InputStyle placeholder="내용을 입력하세요" />
                </InputBox>
                <InputDesc>*추후 설정에서 변경 가능</InputDesc>
              </InputView> 
            */}
          </InputStyled>
        </UpScreenView>
        <ButtonStyle onPress={() => router.push('/home')}>
          <ButtonText>다음</ButtonText>
        </ButtonStyle>
      </CotainerView>
    </SafeAreaViewStyle>
  );
};

export default JoinScreens;

const SafeAreaViewStyle = styled(SafeAreaUi)`
  background: #fff;
`;

const CotainerView = styled.View`
  padding: 52px 22px 65px;
  box-sizing: border-box;
  flex: 1;
`;

const UpScreenView = styled.View`
  flex: 1;
`;

const TitleStyled = styled.Text`
  font-size: 29px;
  line-height: 38px;
`;

const InputStyled = styled.View`
  margin-top: 38px;
  gap: 32px;
`;

/* const InputDesc = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #5f9cff;
  margin-left: 6px;
  margin-top: 8px;
`;
*/

const ButtonStyle = styled.Pressable`
  margin-top: auto;
  width: 100%;
  height: 53px;
  background: #000;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
