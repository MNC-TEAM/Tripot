import LocationTag from '@/ui/LocationTag';
import { useRouter } from 'expo-router';
import styled from 'styled-components/native';

const StoryCard = ({ tag, title, desc, date, uri, main }: StoryCardState) => {
  const router = useRouter();
  return (
    <StoryCardStyled
      main={main}
      onPress={() => router.push('home/story/view/1')}
    >
      <Img source={{ uri }} />
      <TitleView>
        <Title>
          <LocationTag>{tag}</LocationTag>
          <TitleDesc>{title}</TitleDesc>
        </Title>
        <Desc numberOfLines={2} ellipsizeMode="tail">
          {desc}
        </Desc>
        <Date>{date}</Date>
      </TitleView>
    </StoryCardStyled>
  );
};

export default StoryCard;

const StoryCardStyled = styled.Pressable<{ main?: boolean }>`
  flex-direction: row;
  gap: 12px;
  padding: ${({ main }) => (main ? '10px 11px' : '16px 24px')};
  background-color: ${({ main }) => (main ? 'rgba(0,0,0,0.24)' : '')};
  border-radius: ${({ main }) => (main ? '20px' : '0px')};
`;

const Img = styled.Image`
  width: 93px;
  height: 97px;
  background: #acf;
  border-radius: 12px;
`;

const TitleView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.View`
  flex-direction: row;
  gap: 7px;
  align-items: center;
`;

const TitleDesc = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
`;

const Desc = styled.Text`
  line-height: 18px;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: #fff;
`;

const Date = styled.Text`
  color: rgba(255, 255, 255, 0.56);
  text-align: right;
  font-size: 12px;
  font-weight: 500;
`;
