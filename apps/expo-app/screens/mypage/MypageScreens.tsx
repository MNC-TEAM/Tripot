import { Link, useRouter } from 'expo-router';
import styled from 'styled-components/native';
import EditSVG from '@/assets/icon/edit.svg';
import MainSVG from '@/assets/icon/main.svg';
import CommentSVG from '@/assets/icon/comment.svg';
import HeartSVG from '@/assets/icon/heart.svg';
import { Pressable } from 'react-native';

const MypageScreens = () => {
  const router = useRouter();

  return (
    <SafeAreaViewStyle>
      <Wrapper>
        <TitleBox>
          <TitleBoxText>마이페이지</TitleBoxText>
          {/* 
            Todo - MVP 이후
            다크모드, 
            나이트모드,
            알람설정, 
            추천받을 지역 선택
            <SettingSVG width={24} /> 
          */}
        </TitleBox>

        <UserBox>
          <UserIcon source={require('@/assets/simbol.png')} />
          <UserEditBox onPress={() => router.push('/mypage/change')}>
            <UserName>닉네임</UserName>
            <EditSVG width={24} />
          </UserEditBox>
        </UserBox>

        <ListViews>
          <Link href="/mypage/story">
            <ListViewTextBox>
              <MainSVG width={23} />
              <ListViewText>내가 쓴 스토리</ListViewText>
            </ListViewTextBox>
          </Link>
          <Link href="/mypage/comment">
            <ListViewTextBox>
              <CommentSVG width={23} />
              <ListViewText>내가 쓴 댓글</ListViewText>
            </ListViewTextBox>
          </Link>
          <Link href="/mypage/like">
            <ListViewTextBox>
              <HeartSVG width={23} />
              <ListViewText>하트 누른 목록</ListViewText>
            </ListViewTextBox>
          </Link>
        </ListViews>

        <CommunityBox>
          <CommunityLink href="/mypage/notice">공지사항</CommunityLink>
          <CommunityLink href="/mypage/cs">고객센터</CommunityLink>
        </CommunityBox>

        <CommunityBox>
          <Pressable>
            <CommunityText>로그아웃</CommunityText>
          </Pressable>
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
  margin-top: 41px;
  gap: 18px;
`;

const ListViewTextBox = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 11px;
`;

const ListViewText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

const UserBox = styled.View`
  gap: 15px;
  margin-top: 46px;
  justify-content: center;
  align-items: center;
`;

const UserIcon = styled.Image`
  width: 102px;
  height: 102px;
  border-radius: 1000px;
  background: #d9d9d9;
`;

const UserEditBox = styled.Pressable`
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;

const UserName = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

const CommunityBox = styled.View`
  border-top-width: 1px;
  border-color: #575757;
  padding-top: 18px;
  margin-top: 31px;
  gap: 24px;
`;

const CommunityLink = styled(Link)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.72);
  width: 100%;
`;
const CommunityText = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.72);
  width: 100%;
`;
