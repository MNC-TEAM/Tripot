import LocationTag from '@/ui/LocationTag';
import styled from 'styled-components/native';

const PopularityCard = ({
  tag,
  title,
  date,
  uri,
  main,
}: PopularityCardState) => {
  return (
    <PopularityCardStyle>
      <PopularityImg source={{ uri }} />
      <PopularityTitleStyle>
        <LocationTag main={main}>{tag}</LocationTag>
        <PopularityTitle>{title}</PopularityTitle>
      </PopularityTitleStyle>
      <Date>{date}</Date>
    </PopularityCardStyle>
  );
};

export default PopularityCard;

const PopularityCardStyle = styled.Pressable`
  width: 342px;
  background: rgba(0, 0, 0, 0.24);
  border-radius: 20px;
  padding: 10px;
`;

const PopularityImg = styled.Image`
  width: 100%;
  height: 174px;
  border-radius: 12px;
`;

const PopularityTitleStyle = styled.View`
  flex-direction: row;
  margin-top: 12px;
  gap: 7px;
  align-items: center;
`;

const PopularityTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
`;

const Date = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  text-align: right;
`;
