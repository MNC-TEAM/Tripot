import LocationTag from '@components/LocationTag';
import styled from 'styled-components/native';

const StoryCard = ({ tag, title, desc, date, uri }: StoryCardState) => {
  return (
    <StoryCardStyled>
      <StoryCardImg source={{ uri }} />
      <StoryCardTitleView>
        <StoryCardTitle>
          <LocationTag>{tag}</LocationTag>
          <StoryCardTitleDesc>{title}</StoryCardTitleDesc>
        </StoryCardTitle>
        <StoryCardDesc numberOfLines={2} ellipsizeMode="tail">
          {desc}
        </StoryCardDesc>
        <StoryCardDate>{date}</StoryCardDate>
      </StoryCardTitleView>
    </StoryCardStyled>
  );
};

export default StoryCard;

const StoryCardStyled = styled.Pressable`
  flex-direction: row;
  gap: 13px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  width: 342px;
`;

const StoryCardImg = styled.Image`
  width: 93px;
  height: 97px;
  background: #acf;
  border-radius: 12px;
`;

const StoryCardTitleView = styled.View`
  flex: 1;
`;

const StoryCardTitle = styled.View`
  flex-direction: row;
  gap: 7px;
  align-items: center;
`;

const StoryCardTitleDesc = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
`;

const StoryCardDesc = styled.Text`
  margin-top: 12px;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: #fff;
`;

const StoryCardDate = styled.Text`
  color: #fff;
  text-align: right;
  margin-top: 15px;
  font-size: 12px;
  font-weight: 500;
`;
