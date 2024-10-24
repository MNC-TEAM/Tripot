import { FlatList, Platform, Pressable, View, ViewStyle } from 'react-native';
import styled, { css } from 'styled-components/native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import DATA from '@/common/DATA';
import StoryCard from '@/ui/StoryCard';
import SearchSVG from '@/assets/icon/search.svg';
import { useState } from 'react';
import WriteBtn from '@/components/Main/WriteBtn';
import { SearchTextInput } from '@/ui/input/Search';
import LocationSVG from '@/assets/icon/location.svg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const StoryModal = ({ bottomSheetRef }: StoryModalState) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const buttonPosition = useSharedValue<number>(0);

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: buttonPosition.value }],
  }));

  return (
    <>
      <BottomAnimate position="left" style={animatedButtonStyle}>
        <Location>
          <LocationSVG />
        </Location>
      </BottomAnimate>
      <BottomAnimate position="right" style={animatedButtonStyle}>
        <WriteBtn />
      </BottomAnimate>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[670, 450, 150]}
        handleStyle={handleStyle}
        handleIndicatorStyle={handleIndicatorStyle}
        animatedPosition={buttonPosition}
        backgroundComponent={({ style }) => (
          <BlurViewStyled style={style} intensity={70} />
        )}
      >
        <ModalContainer>
          <TitleContainer>
            {!isOpen && <TitleStyle>My all stories (23)</TitleStyle>}
            {isOpen && <SearchTextInput placeholder="내 스토리를 검색하세요" />}
            <Pressable onPress={() => setIsOpen(!isOpen)}>
              <SearchSVG width={24} />
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

          <StoryCardContainer>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <StoryCard
                  main
                  tag={item.tag}
                  title={item.title}
                  desc={item.desc}
                  date={item.date}
                  uri={item.uri}
                />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            />
          </StoryCardContainer>
        </ModalContainer>
      </BottomSheet>
    </>
  );
};

export default StoryModal;

interface StoryModalState {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
}

const BottomAnimate = styled(Animated.View)<{ position: 'left' | 'right' }>`
  position: absolute;
  bottom: 100%;
  margin-bottom: 18px;
  ${({ position }) => {
    return position === 'left'
      ? css`
          left: 26px;
        `
      : css`
          right: 26px;
        `;
  }}
`;

const Location = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 1000px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.51);
`;

const StoryCardContainer = styled.View`
  margin-top: 22px;
  padding: 0 24px;
`;

const handleStyle: ViewStyle = {
  paddingTop: 12,
  paddingBottom: 0,
};

const handleIndicatorStyle: ViewStyle = {
  width: 70,
  height: 7,
  backgroundColor: '#fff',
};

const BlurViewStyled = styled(BlurView)`
  overflow: hidden;
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  ${Platform.OS === 'android' &&
  css`
    background: rgba(0, 0, 0, 0.5);
  `};
`;

const ModalContainer = styled(BottomSheetView)`
  padding: 25px 0;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  gap: 11px;
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
  margin-right: ${props => (props.isLast ? '0px' : '5px')};
`;

const TagText = styled.Text`
  font-size: 15px;
  color: #c5c5c5;
`;

const TagTextColor = styled.Text`
  font-weight: bold;
  color: #ffee70;
`;
