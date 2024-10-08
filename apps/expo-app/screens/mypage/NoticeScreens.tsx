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
          <Notice key={index + 1}>
            <Title>제목입니다.</Title>
            <Desc>
              내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
              내용입니다. 내용입니다. 내용입니다. 내용입...
            </Desc>
            <Date>2024.1.1</Date>
          </Notice>
        ))}
    </ScrollViewStyled>
  );
};

export default NoticeScreens;

const ScrollViewStyled = styled.ScrollView`
  flex: 1;
  padding: 0 24px;
`;

const Notice = styled.View`
  width: 100%;
  background: #000;
  padding: 15px 20px;
  border-radius: 12px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
`;

const Desc = styled.Text`
  font-size: 13px;
  color: #fff;
  margin-top: 10px;
`;

const Date = styled.Text`
  font-size: 12px;
  font-weight: 500;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.56);
  text-align: right;
`;
