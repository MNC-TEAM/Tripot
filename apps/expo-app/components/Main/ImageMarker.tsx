import { Marker } from 'react-native-maps';
import styled from 'styled-components/native';

const ImageMarker = ({ coordinate, uri, onPress }: ImageMarkerState) => {
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <StyledMarker>
        <MarkerImage source={{ uri }} resizeMode="cover" />
      </StyledMarker>
    </Marker>
  );
};

export default ImageMarker;

const StyledMarker = styled.View`
  width: 67px;
  height: 67px;
  border-radius: 6px;
  border-width: 8px;
  border-color: #fff;
  box-sizing: border-box;
`;

const MarkerImage = styled.Image`
  flex: 1;
  justify-content: 'center';
  border-radius: 6px;
`;
