import styled from 'styled-components/native';

const Notice = () => {
  return (
    <NoticeStyled>
      <Title>제목입니다.</Title>
      <Desc>
        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
        내용입니다. 내용입니다. 내용입...
      </Desc>
      <Date>2024.1.1</Date>
    </NoticeStyled>
  );
};

export default Notice;

const NoticeStyled = styled.View`
  width: 100%;
  padding: 15px 0;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
`;

const Desc = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 10px;
  line-height: 18px;
`;

const Date = styled.Text`
  font-size: 12px;
  font-weight: 500;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
  text-align: right;
`;
