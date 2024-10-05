import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageBackground } from 'react-native';
import { Link } from 'expo-router';

const MypageScreens = () => {
  return (
    <SafeAreaViewStyle>
      <Wrapper>
        <TitleBox>
          <TitleBoxText>마이페이지</TitleBoxText>
          <Ionicons name="settings-sharp" size={24} color="white" />
        </TitleBox>

        <UserBox>
          <UserIcon>
            <ImageBackground></ImageBackground>
          </UserIcon>
          <UserEditBox>
            <UserName>닉네임</UserName>
            <Ionicons name="pencil-outline" size={24} color="white" />
          </UserEditBox>
        </UserBox>

        <ListViews>
          <ListViewTextBox>
            <Ionicons name="map" size={24} color="white" />
            <ListViewText>내가 쓴 스토리</ListViewText>
          </ListViewTextBox>
          <ListViewTextBox>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color="white"
            />
            <ListViewText>내가 쓴 댓글</ListViewText>
          </ListViewTextBox>
          <ListViewTextBox>
            <Ionicons name="heart-outline" size={24} color="white" />
            <ListViewText>하트 누른 목록</ListViewText>
          </ListViewTextBox>
        </ListViews>

        <CommunityBox>
          <CommunityText href={''}>공지사항</CommunityText>
          <CommunityText href={''}>고객센터</CommunityText>
        </CommunityBox>
      </Wrapper>
    </SafeAreaViewStyle>
  );
};

export default MypageScreens;

const SafeAreaViewStyle = styled.SafeAreaView`
  flex: 1;
  background: #2b2b2b;
  padding: 0 24px;
`;

const Wrapper = styled.View`
  padding: 20px 24px 0;
`;

const TitleBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleBoxText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

const ListViews = styled.View`
  margin-top: 45px;
  gap: 25px;
`;

const ListViewTextBox = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const ListViewText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const UserBox = styled.View`
  gap: 17px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

const UserIcon = styled.View`
  width: 102px;
  height: 102px;
  border-radius: 1000px;
  background: #d9d9d9;
`;

const UserEditBox = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const UserName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

const CommunityBox = styled.View`
  border-top-width: 1px;
  border-color: #606060;
  padding-top: 20px;
  margin-top: 20px;
  gap: 24px;
`;

const CommunityText = styled(Link)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.72);
`;
