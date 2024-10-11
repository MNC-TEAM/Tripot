import Notice from '@/components/Mypage/Notice';
import styled from 'styled-components/native';

const NoticeScreens = () => {
  return (
    <ScrollViewStyled
      contentContainerStyle={{
        gap: 10,
        alignItems: 'center',
        paddingVertical: 24,
      }}
    >
      {Array(100)
        .fill(0)
        .map((_, index) => (
          <Notice />
        ))}
    </ScrollViewStyled>
  );
};

export default NoticeScreens;

const ScrollViewStyled = styled.ScrollView`
  flex: 1;
  padding: 0 24px;
`;
