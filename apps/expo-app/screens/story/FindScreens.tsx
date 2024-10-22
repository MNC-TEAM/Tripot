import { Text, View, ScrollView, FlatList } from 'react-native';
import styled from 'styled-components/native';
import DATA from '@/common/DATA';
import NowStoryCard from '@/ui/NowStoryCard';
import Header from '@/components/Story/Header';
import SearchSVG from '@/assets/icon/search.svg';
import { SearchTextInput } from '@/ui/input/Search';
import { SafeAreaUi } from '@/ui/common/style';

const FindScreens = () => {
  return (
    <SafeAreaUi>
      <Wrapper>
        <Header>검색하기</Header>

        <SearchStyled>
          <SearchTextInput placeholder="검색어를 입력하세요" />
          <SearchIcon>
            <SearchSVG width={21.23} />
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
          showsHorizontalScrollIndicator={false}
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

      <View>
        <FlatList
          style={{
            marginTop: 26,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          renderItem={({ item }) => <NowStoryCard {...item} />}
          ItemSeparatorComponent={() => <View style={{ width: 6 }} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaUi>
  );
};

export default FindScreens;

const Wrapper = styled.View`
  padding: 0 24px;
`;

const SearchStyled = styled.View`
  flex-direction: row;
  position: relative;
  margin-top: 30px;
`;

const SearchIcon = styled.Pressable`
  position: absolute;
  right: 12px;
  top: 9px;
`;

const SearchHistoryView = styled.View`
  flex-direction: row;
  margin-top: 12px;
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
  font-size: 14px;
  font-weight: 500;
`;

const Heading = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin-top: 37px;
`;
