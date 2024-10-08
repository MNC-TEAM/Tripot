import styled from 'styled-components/native';

const CommentScreens = () => {
  return (
    <ScrollViewStyled
      contentContainerStyle={{
        alignItems: 'center',
      }}
    >
      {Array(100)
        .fill(0)
        .map((_, index) => (
          <CommentView key={index + 1}>
            <Desc>댓글 내용입니다</Desc>
            <BottomBox>
              <Title>댓글 쓴 스토리 제목 입니다</Title>
              <Date>2024.1.1</Date>
            </BottomBox>
          </CommentView>
        ))}
    </ScrollViewStyled>
  );
};

export default CommentScreens;

const ScrollViewStyled = styled.ScrollView`
  flex: 1;
`;

const CommentView = styled.View`
  width: 100%;
  padding: 19px 24px;
  background: #000;
`;

const Desc = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const BottomBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

const Title = styled.Text`
  color: rgba(255, 255, 255, 0.56);
  font-size: 14px;
`;

const Date = styled.Text`
  color: rgba(255, 255, 255, 0.56);
  font-size: 12px;
`;
