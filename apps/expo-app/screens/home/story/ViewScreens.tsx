import { useLocalSearchParams } from 'expo-router';
import styled from 'styled-components/native';
import LockSVG from '@/assets/icon/lock.svg';
import LocationTag from '@/ui/LocationTag';
import HeartFillSVG from '@/assets/icon/heart2.svg';
import { Image, Text, View } from 'react-native';
import CommentSheet from '@/components/Main/Story/CommentSheet';

const ViewScreens = () => {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Wrapper>
        <TitleView>
          <LocationView>
            <LocationTag>전주{id}</LocationTag>
            <LocationTitleView>
              <LocationTitle>한옥마을 체험기</LocationTitle>
              <LockSVG />
            </LocationTitleView>
          </LocationView>
          <LikeView>
            <HeartFillSVG color="#FF4B4B" width={24} />
            <LikeText>12</LikeText>
          </LikeView>
        </TitleView>
        <WriterStyled>
          <Writer>글쓴이</Writer>
          <WriterDesc>2024.11</WriterDesc>
        </WriterStyled>

        <View
          style={{
            marginTop: 34,
          }}
        >
          <View
            style={{
              gap: 39,
            }}
          >
            <Image
              style={{ width: '100%', height: 301, borderRadius: 8 }}
              source={{ uri: 'https://picsum.photos/200' }}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                lineHeight: 25,
              }}
            >
              내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
              내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
              내용입니다. 내용입니다.{' '}
            </Text>
          </View>
          <View
            style={{
              gap: 39,
              marginTop: 29,
            }}
          >
            <Image
              style={{ width: '100%', height: 301, borderRadius: 8 }}
              source={{ uri: 'https://picsum.photos/200' }}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                lineHeight: 25,
              }}
            >
              내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
              내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
              내용입니다. 내용입니다.{' '}
            </Text>
          </View>
        </View>
      </Wrapper>
      <CommentSheet />
    </>
  );
};

export default ViewScreens;

const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 150,
  },
})`
  padding: 0 24px;
`;

const TitleView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const LocationView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const LocationTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const LocationTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

const LikeView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const LikeText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

const WriterStyled = styled.View`
  flex-direction: row;
  gap: 19px;
  margin-top: 13px;
  padding-top: 9px;
  border-top-width: 1px;
  border-color: #575757;
`;

const Writer = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #959595;
`;

const WriterDesc = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #959595;
`;
