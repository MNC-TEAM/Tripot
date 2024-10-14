import LocationTag from '@/ui/LocationTag';
import styled from 'styled-components/native';

const NowStoryCard = ({ tag, title, uri }: NowStoryCardState) => {
  return (
    <NowStoryView>
      <NowStoryImage source={{ uri }} />
      <NowStoryTextView>
        <LocationTag main>{tag}</LocationTag>
        <NowStoryText numberOfLines={1} ellipsizeMode="tail">
          {title}
        </NowStoryText>
      </NowStoryTextView>
    </NowStoryView>
  );
};

export default NowStoryCard;

const NowStoryView = styled.View`
  width: 138px;
  height: 160px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.24);
  align-items: center;
  justify-content: center;
  padding: 12px 13px;
`;

const NowStoryImage = styled.Image`
  width: 113px;
  height: 102px;
  border-radius: 12px;
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
