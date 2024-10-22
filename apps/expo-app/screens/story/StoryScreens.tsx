import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import DATA from '@/common/DATA';
import PopularityCard from '@/ui/PopularityCard';
import StoryCard from '@/ui/StoryCard';
import Header from '@/components/Story/Header';
import { SafeAreaUi } from '@/ui/common/style';

const StoryScreens = () => {
  return (
    <SafeAreaUi>
      <Wrapper>
        <Header search>둘러보기</Header>
      </Wrapper>
      <Columns>
        <View>
          <Wrapper>
            <Heading>오늘의 추천 여행지</Heading>
          </Wrapper>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            style={{
              marginTop: 12,
            }}
            data={DATA}
            renderItem={({ item }) => (
              <View
                style={{
                  width: 341,
                }}
              >
                <StoryCard
                  tag={item.tag}
                  title={item.title}
                  desc={item.desc}
                  date={item.date}
                  uri={item.uri}
                  main
                />
              </View>
            )}
            horizontal
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
          />
        </View>
        <View>
          <Wrapper>
            <Heading>최근 많이 가는 곳</Heading>
          </Wrapper>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            style={{
              marginTop: 12,
            }}
            data={DATA}
            renderItem={({ item }) => (
              <View
                style={{
                  width: 341,
                }}
              >
                <StoryCard
                  tag={item.tag}
                  title={item.title}
                  desc={item.desc}
                  date={item.date}
                  uri={item.uri}
                  main
                />
              </View>
            )}
            horizontal
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
          />
        </View>
        <View>
          <Wrapper>
            <Heading>전국 인기 스토리</Heading>
          </Wrapper>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            data={DATA}
            style={{
              marginTop: 12,
            }}
            renderItem={({ item }) => (
              <PopularityCard
                tag={item.tag}
                title={item.title}
                date={item.date}
                uri={item.uri}
                main
              />
            )}
            horizontal
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
          />
        </View>
      </Columns>
    </SafeAreaUi>
  );
};

export default StoryScreens;

const Columns = styled.View`
  flex-direction: column;
  gap: 20px;
  margin-top: 26px;
`;

const Wrapper = styled.View`
  padding: 0 24px;
`;

const Heading = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;
