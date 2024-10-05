import { useRouter } from 'expo-router';
import styled from 'styled-components/native';

const JoinScreens = () => {
  const router = useRouter();

  return (
    <SafeAreaViewStyled>
      <CotainerView>
        <UpScreenView>
          <TitleStyled>트립팟에 오신것을{'\n'}환영합니다</TitleStyled>
          <InputStyled>
            <InputView>
              <InputLabel>닉네임을 입력해주세요</InputLabel>
              <InputBox>
                <InputStyle placeholder="내용을 입력하세요" />
                <Redundant>
                  <RedundantText>중복확인</RedundantText>
                </Redundant>
              </InputBox>
            </InputView>
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
    </SafeAreaViewStyled>
  );
};

export default JoinScreens;

const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 1;
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

const InputView = styled.View``;

const InputLabel = styled.Text`
  font-size: 16px;
`;

const InputBox = styled.View`
  border: 1px;
  border-radius: 12px;
  height: 56px;
  padding: 0 20px;
  margin-top: 12px;
`;

const InputStyle = styled.TextInput`
  font-size: 14px;
  flex: 1;
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
  width: 342px;
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

const Redundant = styled.View`
  background: #d9d9d9;
  position: absolute;
  right: 13px;
  top: 15px;
  border-radius: 1000px;
  width: 67px;
  height: 26px;
  align-items: center;
  justify-content: center;
`;

const RedundantText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #8b8b8b;
`;
