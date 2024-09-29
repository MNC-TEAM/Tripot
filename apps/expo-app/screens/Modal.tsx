import { Pressable, Text } from 'react-native';
import styled from 'styled-components/native';

const Modal = () => {
  return (
    <ModalContainer>
      <TitleContainer>
        <Text>My all stories (23)</Text>
        <Pressable>
          <Text>돋보기</Text>
        </Pressable>
      </TitleContainer>

      <HorizonScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 24 }}
      >
        <TagContainer>
          <TagText>
            <TagTextColor>서울</TagTextColor>(2)
          </TagText>
        </TagContainer>
        <TagContainer>
          <TagText>
            <TagTextColor>서울</TagTextColor>(2)
          </TagText>
        </TagContainer>
        <TagContainer>
          <TagText>
            <TagTextColor>서울</TagTextColor>(2)
          </TagText>
        </TagContainer>
        <TagContainer>
          <TagText>
            <TagTextColor>서울</TagTextColor>(2)
          </TagText>
        </TagContainer>
        <TagContainer>
          <TagText>
            <TagTextColor>서울</TagTextColor>(2)
          </TagText>
        </TagContainer>
        <TagContainer>
          <TagText>
            <TagTextColor>서울</TagTextColor>(2)
          </TagText>
        </TagContainer>
      </HorizonScrollView>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.View`
  padding: 44px 0;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const HorizonScrollView = styled.ScrollView`
  margin-top: 18px;
`;

const TagContainer = styled.Pressable`
  padding: 5.5px 13.5px;
  background: rgba(000, 000, 000, 0.45);
  border-radius: 1000px;
  gap: 1px;
  margin-right: 5px;
  &:last-child {
    margin-right: 0px;
  }
`;

const TagText = styled.Text`
  font-size: 15px;
  color: #c5c5c5;
  font-weight: 400;
`;

const TagTextColor = styled.Text`
  font-weight: bold;
  color: #8fc0ff;
`;
