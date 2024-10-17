import styled from 'styled-components/native';

const Notification = ({ userIcon, title, desc, ing }: NotificationState) => {
  return (
    <NotificationStyled>
      <UserIcon source={{ uri: userIcon ? userIcon : undefined }} />
      <TextBox>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </TextBox>
      {ing && <Ing />}
    </NotificationStyled>
  );
};

export default Notification;

interface NotificationState {
  userIcon?: string;
  title: string;
  desc: string;
  ing?: boolean;
}

const NotificationStyled = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 11px;
  position: relative;
`;

const UserIcon = styled.Image`
  width: 57px;
  height: 57px;
  border-radius: 1000px;
  background: #d9d9d9;
`;

const TextBox = styled.View`
  flex-direction: column;
  gap: 3px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

const Desc = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
`;

const Ing = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 1000px;
  background: #ffee70;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -4.5px;
`;
