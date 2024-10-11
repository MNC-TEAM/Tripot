import styled from 'styled-components/native';

const Comment = ({ desc, title, date }: CommentState) => {
  return (
    <CommentStyled>
      <Desc>{desc}</Desc>
      <BottomBox>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </BottomBox>
    </CommentStyled>
  );
};

export default Comment;

interface CommentState {
  desc: string;
  title: string;
  date: string;
}

const CommentStyled = styled.View`
  width: 100%;
  padding: 19.5px 20px 19.5px 28px;
`;

const Desc = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const BottomBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4px;
`;

const Title = styled.Text`
  color: rgba(255, 255, 255, 0.56);
  font-size: 14px;
  font-weight: 500;
`;

const Date = styled.Text`
  color: rgba(255, 255, 255, 0.56);
  font-size: 12px;
  font-weight: 500;
`;
