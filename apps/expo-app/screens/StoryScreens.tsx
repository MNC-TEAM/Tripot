import DATA from '@common/DATA';
import PopularityCard from '@ui/story/PopularityCard';
import StoryCard from '@ui/story/StoryCard';
import { SafeAreaView, FlatList, View } from 'react-native';
import styled from 'styled-components/native';

const StoryScreens = () => {
  return (
    <SafeAreaView>
      <Columns>
        <View>
          <Wrapper>
            <Heading>오늘의 추천 여행지</Heading>
          </Wrapper>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 24 }}
            style={{
              marginTop: 13,
            }}
            data={DATA}
            renderItem={({ item }) => (
              <StoryCard
                tag={item.tag}
                title={item.title}
                desc={item.desc}
                date={item.date}
                uri={item.uri}
              />
            )}
            horizontal
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
          />
        </View>
        <View>
          <Wrapper>
            <Heading>최근 많이 가는 곳</Heading>
          </Wrapper>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 24 }}
            style={{
              marginTop: 13,
            }}
            data={DATA}
            renderItem={({ item }) => (
              <StoryCard
                tag={item.tag}
                title={item.title}
                desc={item.desc}
                date={item.date}
                uri={item.uri}
              />
            )}
            horizontal
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
          />
        </View>
        <View>
          <Wrapper>
            <Heading>전국 인기 스토리</Heading>
          </Wrapper>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 24 }}
            data={DATA}
            style={{
              marginTop: 13,
            }}
            renderItem={({ item }) => (
              <PopularityCard
                tag={item.tag}
                title={item.title}
                date={item.date}
                uri={item.uri}
              />
            )}
            horizontal
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
          />
        </View>
      </Columns>
    </SafeAreaView>
  );
};

export default StoryScreens;

const Columns = styled.View`
  flex-direction: column;
  gap: 27px;
`;

const Wrapper = styled.View`
  padding: 0 24px;
`;

const Heading = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;
