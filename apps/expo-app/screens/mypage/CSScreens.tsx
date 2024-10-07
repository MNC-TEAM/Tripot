import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const CSScreens = () => {
  return (
    <Wrapper>
      <Title>자주 묻는 질문 </Title>
      <ScrollViewStyled
        contentContainerStyle={{
          gap: 42,
          alignItems: 'center',
        }}
      >
        {Array(100)
          .fill(0)
          .map((_, index) => (
            <CS key={index + 1}>
              <CSTitle>Q. 제목입니다</CSTitle>
              <Ionicons name="chevron-down" size={24} color="white" />
            </CS>
          ))}
      </ScrollViewStyled>
    </Wrapper>
  );
};

export default CSScreens;

const Wrapper = styled.View`
  font-size: 14px;
  padding: 32px 24px 0;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 14px;
  color: #fff;
`;

const ScrollViewStyled = styled.ScrollView`
  flex: 1;
  margin-top: 23px;
`;

const CS = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const CSTitle = styled.Text`
  color: #fff;
  font-size: 16px;
`;
