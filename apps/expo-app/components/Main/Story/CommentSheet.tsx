import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';
import { useRef } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import ShearSVG from '@/assets/icon/shear.svg';
import CancelSVG from '@/assets/icon/cancel.svg';

const CommentSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      handleIndicatorStyle={{
        display: 'none',
      }}
      snapPoints={[450, 450, 80]}
      backgroundComponent={({ style }) => (
        <BlurViewStyled style={style} intensity={100} />
      )}
    >
      <BottomView>
        <TopView>
          <TopTitle>댓글(2)</TopTitle>
          <IconView>
            <ShearSVG width={24} />
            <CancelSVG width={24} />
          </IconView>
        </TopView>

        <SearchView>
          <SearchTextInput
            placeholder="검색어를 입력하세요"
            placeholderTextColor="rgba(255,255,255,0.29)"
          />
          <SearchBtn>
            <Text>위</Text>
          </SearchBtn>
        </SearchView>

        <View
          style={{
            marginTop: 24,
          }}
        >
          <FlatList
            data={[{ title: '111' }, { title: '111' }]}
            renderItem={({ item }) => (
              <CommentView>
                <CommentUser />
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <CommentTopView>
                      <CommentTitle>닉네임</CommentTitle>
                      <CommentDate>1시간 전</CommentDate>
                    </CommentTopView>
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 8,
                      }}
                    >
                      <CommentButton>답글</CommentButton>
                      <CommentButton>신고</CommentButton>
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 15,
                        fontWeight: 500,
                      }}
                    >
                      댓글입니다.댓글입니다.댓글입니다.댓글입니다.
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 11,
                      alignItems: 'center',
                      marginTop: 10,
                    }}
                  >
                    <View
                      style={{
                        width: 30,
                        height: 1,
                        backgroundColor: 'rgba(255,255,255,0.3)',
                      }}
                    />
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'rgba(255,255,255,0.8)',
                        }}
                      >
                        답글 1개 더보기
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </CommentView>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          />
        </View>
      </BottomView>
    </BottomSheet>
  );
};

export default CommentSheet;

const CommentView = styled.View`
  flex-direction: row;
  gap: 16px;
`;

const CommentUser = styled.View`
  width: 41px;
  height: 41px;
  border-radius: 1000px;
  background: #fff;
`;

const CommentTopView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 9px;
`;

const CommentTitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
`;

const CommentDate = styled.Text`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
`;

const CommentButton = styled.Text`
  font-size: 12px;
  color: #e6e6e6;
`;

const BottomView = styled(BottomSheetView)`
  padding: 0 24px;
`;

const SearchView = styled.View`
  position: relative;
  margin-top: 21px;
`;

const SearchBtn = styled(TouchableOpacity)`
  position: absolute;
  right: 9px;
  top: 9px;
  width: 27px;
  height: 22px;
  border-radius: 25px;
  background: #ffee70;
  align-items: center;
  justify-content: center;
`;

const TopView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const TopTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

const IconView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const SearchTextInput = styled.TextInput`
  height: 41px;
  width: 100%;
  border-radius: 1000px;
  padding: 0 16px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.24);
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;

const BlurViewStyled = styled(BlurView)`
  overflow: hidden;
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
`;
