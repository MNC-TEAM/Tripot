import { Marker } from 'react-native-maps';
import styled from 'styled-components/native';

const ImageMarker = ({
  coordinate,
  uri,
  onPress,
  length,
}: ImageMarkerState) => {
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <StyledMarker>
        {length && (
          <Length>
            <LengthNumber>{length}</LengthNumber>
          </Length>
        )}
        <MarkerImage
          source={uri ? { uri } : require('@/assets/Thumbnail.png')}
          resizeMode="cover"
        />
      </StyledMarker>
    </Marker>
  );
};

export default ImageMarker;

const StyledMarker = styled.View`
  width: 67px;
  height: 67px;
  border-radius: 6px;
  background: #fff;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MarkerImage = styled.Image`
  width: ${67 - 8}px;
  height: ${67 - 8}px;
  justify-content: 'center';
  border-radius: 6px;
`;

const Length = styled.View`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 1000px;
  position: absolute;
  right: 0;
  top: 0;
  background: #fff;
  z-index: 3;
  transform: translate(10px, -10px);
`;

const LengthNumber = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;
