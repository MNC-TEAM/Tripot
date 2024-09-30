import styled from 'styled-components/native';

interface StoryCardState {
  tag: string;
  title: string;
  desc: string;
  date: string;
}

const StoryCard = ({ tag, title, desc, date }: StoryCardState) => {
  return (
    <StoryCardContainer>
      <StoryCardStyled>
        <StoryCardImg source={{ uri: 'https://picsum.photos/200' }} />
        <StoryCardTitleView>
          <StoryCardTitle>
            <StoryCardTitleTagStyle>
              <StoryCardTitleTag>{tag}</StoryCardTitleTag>
            </StoryCardTitleTagStyle>
            <StoryCardTitleDesc>{title}</StoryCardTitleDesc>
          </StoryCardTitle>
          <StoryCardDesc numberOfLines={2} ellipsizeMode="tail">
            {desc}
          </StoryCardDesc>
          <StoryCardDate>{date}</StoryCardDate>
        </StoryCardTitleView>
      </StoryCardStyled>
    </StoryCardContainer>
  );
};

export default StoryCard;

const StoryCardContainer = styled.View`
  margin-top: 22px;
  padding: 0 24px;
`;

const StoryCardStyled = styled.Pressable`
  flex-direction: row;
  gap: 13px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
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

const StoryCardTitleTagStyle = styled.View`
  padding: 6px 12px;
  border-radius: 1000px;
  background: rgba(0, 0, 0, 0.45);
`;

const StoryCardTitleTag = styled.Text`
  font-size: 13px;
  color: #ffee70;
  font-weight: bold;
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
