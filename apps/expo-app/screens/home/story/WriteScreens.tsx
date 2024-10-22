import { useRouter } from 'expo-router';
import { Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';

const WriteScreens = () => {
  const router = useRouter();
  return (
    <MapContainer>
      {/* 
          Todo 지역 검색기능 추가
          <ViewStyled>
            <TitleText>
              스토리를 쓰실 지역을
              {'\n'}
              지도에서 직접 선택해주세요!
            </TitleText>
            <SearchBox>
              <SearchBar placeholder="지역 검색하기" />
              <SearchIcon />
            </SearchBox>
          </ViewStyled> 
        */}
      <StyledMapView rotateEnabled={false}>
        <Marker
          draggable
          coordinate={{ latitude: 37.60156, longitude: 126.659079 }}
        />
      </StyledMapView>
      <Postion>
        <ButtonStyled onPress={() => router.push('/home/story/modal')}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            다음
          </Text>
        </ButtonStyled>
      </Postion>
    </MapContainer>
  );
};

export default WriteScreens;

const Postion = styled.View`
  position: absolute;
  bottom: 65px;
  left: 0;
  padding: 0 24px;
  width: 100%;
`;
const ButtonStyled = styled.TouchableOpacity`
  width: 100%;
  height: 53px;
  border-radius: 12px;
  background: #000;
  align-items: center;
  justify-content: center;
`;

const MapContainer = styled.View`
  flex: 1;
`;

const StyledMapView = styled(MapView)`
  flex: 1;
`;

/* 
const ViewStyled = styled.View`
  padding: 0 22px 28px;
`;

const TitleText = styled.Text`
  font-size: 23px;
  font-weight: 400;
  color: #fff;
  line-height: 33px;
`;

const SearchBox = styled.View`
  position: relative;
  margin-top: 27px;
`;

const SearchIcon = styled(SearchSVG)`
  width: 21.23px;
  position: absolute;
  right: 13.77px;
  top: 9px;
`;

const SearchBar = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.5)',
})`
  height: 41px;
  width: 100%;
  background: rgba(0, 0, 0, 0.64);
  border-radius: 1000px;
  padding: 0 18px;
  font-size: 14px;
`;
*/
