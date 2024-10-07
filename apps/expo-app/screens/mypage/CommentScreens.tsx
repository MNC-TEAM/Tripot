import React from 'react';
import styled from 'styled-components/native';

const CommentScreens = () => {
  return (
    <ScrollViewStyled
      contentContainerStyle={{
        gap: 9,
        alignItems: 'center',
        paddingVertical: 24,
      }}
    >
      {Array(100)
        .fill(0)
        .map((item, index) => (
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
  padding: 0 24px;
`;

const CommentView = styled.View`
  background: #000;
  width: 100%;
  padding: 13px 16px;
  border-radius: 12px;
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
  font-size: 13px;
`;

const Date = styled.Text`
  color: rgba(255, 255, 255, 0.56);
  font-size: 13px;
`;
