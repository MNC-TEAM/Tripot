import {
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import LocationTag from '@components/LocationTag';
import DATA from '@common/DATA';

const FindScreens = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#cbb2b2', flex: 1 }}>
      <Wrapper>
        <Title>검색하기</Title>

        <SearchStyled>
          <SearchTextInput
            placeholder="검색어를 입력하세요"
            placeholderTextColor="rgba(255,255,255,0.29)"
          />
          <SearchIcon>
            <Ionicons name="search" size={26} color="white" />
          </SearchIcon>
        </SearchStyled>

        <SearchHistoryView>
          <SearchHistoryGap>
            <SearchHistoryText>진주</SearchHistoryText>
            <SearchHistoryText>고양</SearchHistoryText>
            <SearchHistoryText>남원</SearchHistoryText>
          </SearchHistoryGap>
          <SearchHistoryPressable>
            <Text>검색 기록 지우기</Text>
          </SearchHistoryPressable>
        </SearchHistoryView>
      </Wrapper>

      <View>
        <ScrollView
          style={{ marginTop: 23 }}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          horizontal
        >
          <View style={{ gap: 11, flexDirection: 'row' }}>
            <HashView>
              <HashText>#2박3일</HashText>
            </HashView>
            <HashView>
              <HashText>#불꽃축제</HashText>
            </HashView>
            <HashView>
              <HashText>#크루즈 여행</HashText>
            </HashView>
            <HashView>
              <HashText>#2박3일</HashText>
            </HashView>
            <HashView>
              <HashText>#불꽃축제</HashText>
            </HashView>
            <HashView>
              <HashText>#크루즈 여행</HashText>
            </HashView>
          </View>
        </ScrollView>
      </View>

      <Wrapper>
        <Heading>지금 많이 보는 스토리</Heading>
      </Wrapper>

      <FlatList
        style={{
          marginTop: 26,
        }}
        horizontal
        data={DATA}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item }) => (
          <NowStoryView>
            <ImageBackground>
              <NowStoryImage />
            </ImageBackground>
            <NowStoryTextView>
              <LocationTag>단양</LocationTag>
              <NowStoryText numberOfLines={1} ellipsizeMode="tail">
                단풍구단풍구
              </NowStoryText>
            </NowStoryTextView>
          </NowStoryView>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 6 }} />}
      />
    </SafeAreaView>
  );
};

export default FindScreens;

const Wrapper = styled.View`
  padding: 0 24px;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin-top: 21px;
`;

const SearchStyled = styled.View`
  flex-direction: row;
  position: relative;
  margin-top: 11px;
`;

const SearchTextInput = styled.TextInput`
  height: 41px;
  width: 100%;
  border-radius: 1000px;
  padding: 0 16px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.24);
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;

const SearchIcon = styled.Pressable`
  position: absolute;
  right: 12px;
  top: 9px;
`;

const SearchHistoryView = styled.View`
  flex-direction: row;
  margin-top: 9px;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 7px;
  font-size: 12px;
  font-weight: 500;
`;

const SearchHistoryGap = styled.View`
  flex-direction: row;
  gap: 16px;
`;

const SearchHistoryText = styled.Text`
  color: #d1d1d1;
`;

const SearchHistoryPressable = styled.Text`
  color: #fff;
`;

const HashView = styled.View`
  padding: 7px 11px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.08);
`;

const HashText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
`;

const Heading = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin-top: 37px;
`;

const NowStoryView = styled.View`
  width: 138px;
  height: 160px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.24);
  align-items: center;
  justify-content: center;
  padding: 12px 13px;
`;

const NowStoryImage = styled.View`
  width: 113px;
  height: 102px;
  border-radius: 8px;
  background: #000;
`;

const NowStoryTextView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
  width: 100%;
`;

const NowStoryText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  flex: 1;
`;
