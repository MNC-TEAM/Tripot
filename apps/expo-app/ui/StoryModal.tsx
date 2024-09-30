import { FlatList, Pressable, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import StoryCard from '@components/story/StoryCard';

const StoryModal = ({ bottomSheetModalRef }: StoryModalState) => {
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      handleStyle={handleStyle}
      handleIndicatorStyle={handleIndicatorStyle}
      backgroundComponent={({ style }) => (
        <BlurViewStyled style={style} intensity={50} />
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

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <StoryCard
              tag={item.tag}
              title={item.title}
              desc={item.desc}
              date={item.date}
              uri="https://picsum.photos/200"
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </ModalContainer>
    </BottomSheetModal>
  );
};

export default StoryModal;

interface StoryModalState {
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
}

const DATA = [
  {
    id: '0',
    tag: '전주',
    title: '한옥마을 체험기',
    desc: '내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.',
    date: '2024.1.1',
  },
  {
    id: '1',
    tag: '전주1',
    title: '한옥마을 체험기',
    desc: '내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.',
    date: '2024.1.1',
  },
  {
    id: '2',
    tag: '전주2',
    title: '한옥마을 체험기',
    desc: '내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.',
    date: '2024.1.1',
  },
];

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
`;

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