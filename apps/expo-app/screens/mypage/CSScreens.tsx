import Accordion from '@/components/Mypage/Accordion';
import styled from 'styled-components/native';
const CSScreens = () => {
  return (
    <Wrapper>
      <Title>자주 묻는 질문 </Title>
      <ScrollViewStyled
        contentContainerStyle={{
          gap: 42,
          alignItems: 'center',
          paddingHorizontal: 24,
        }}
      >
        {Array(100)
          .fill(0)
          .map((_, index) => (
            <Accordion key={index + 1} />
          ))}
      </ScrollViewStyled>
    </Wrapper>
  );
};

export default CSScreens;

const Wrapper = styled.View`
  padding: 34px 0 0;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 14px;
  color: #fff;
  padding: 0 24px;
`;

const ScrollViewStyled = styled.ScrollView`
  flex: 1;
  margin-top: 24px;
`;
