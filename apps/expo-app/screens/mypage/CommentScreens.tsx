import Comment from '@/components/Mypage/Comment';
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
          <Comment
            key={index + 1}
            desc="댓글 내용입니다."
            title="댓글 쓴 스토리 제목입니다."
            date="2024.1.1"
          />
        ))}
    </ScrollViewStyled>
  );
};

export default CommentScreens;

const ScrollViewStyled = styled.ScrollView`
  flex: 1;
`;
