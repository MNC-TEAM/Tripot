import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import StoryCard from '../components/story/StoryCard';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';
import { BlurView } from 'expo-blur';
import Ionicons from '@expo/vector-icons/Ionicons';

const StoryModal = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      handleStyle={{
        paddingTop: 12,
        paddingBottom: 0,
      }}
      handleIndicatorStyle={{
        width: 70,
        height: 7,
        backgroundColor: '#fff',
      }}
      backgroundComponent={({ style }) => (
        <BlurView
          style={[
            style,
            {
              borderTopLeftRadius: 34,
              borderTopRightRadius: 34,
              overflow: 'hidden',
            },
          ]}
          intensity={50}
        />
      )}
    >
      <ModalContainer>
        <TitleContainer>
          <TitleStyle>My all stories (23)</TitleStyle>
          <Pressable>
            <Ionicons name="search" size={26} color="white" />
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
        </HorizonScrollView>

        <StoryCard
          tag="전주"
          title="한옥마을 체험기"
          desc="내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다."
          date="2024.1.1"
        />
      </ModalContainer>
    </BottomSheet>
  );
};

export default StoryModal;

const ModalContainer = styled(BottomSheetView)`
  padding: 25px 0;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const TitleStyle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

const HorizonScrollView = styled.ScrollView`
  margin-top: 18px;
`;

const TagContainer = styled.Pressable<{ isLast?: boolean }>`
  padding: 8px 13.5px;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 1000px;
  margin-right: ${(props) => (props.isLast ? '0px' : '5px')};
`;

const TagText = styled.Text`
  font-size: 15px;
  color: #c5c5c5;
`;

const TagTextColor = styled.Text`
  font-weight: bold;
  color: #ffee70;
`;
