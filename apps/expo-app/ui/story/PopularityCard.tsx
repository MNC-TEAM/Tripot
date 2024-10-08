import LocationTag from '@/components/LocationTag';
import styled from 'styled-components/native';

const PopularityCard = ({ tag, title, date, uri }: PopularityCardState) => {
  return (
    <PopularityCardStyle>
      <PopularityImg source={{ uri }} />
      <PopularityTitleStyle>
        <LocationTag>{tag}</LocationTag>
        <PopularityTitle>{title}</PopularityTitle>
      </PopularityTitleStyle>
      <PopularityDesc>{date}</PopularityDesc>
    </PopularityCardStyle>
  );
};

export default PopularityCard;

const PopularityCardStyle = styled.Pressable`
  width: 342px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 10px 14px;
`;

const PopularityImg = styled.Image`
  width: 100%;
  height: 174px;
  background: #acf;
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

const PopularityDesc = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-align: right;
`;
