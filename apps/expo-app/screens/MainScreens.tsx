import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import ImageMarker from '../components/ImageMarker';

const MainScreens = ({ location }: MainScreensState) => {
  return (
    <MapContainer>
      <MapContainer>
        <StyledMapView>
          {location && (
            <>
              <ImageMarker
                coordinate={location.coords}
                uri="https://picsum.photos/200"
              />
              <ImageMarker
                coordinate={{
                  latitude: location.coords.latitude + 1,
                  longitude: location.coords.longitude + 1,
                }}
                uri="https://picsum.photos/200"
              />
              <ImageMarker
                coordinate={{
                  latitude: location.coords.latitude - 1,
                  longitude: location.coords.longitude - 1,
                }}
                uri="https://picsum.photos/200"
              />
            </>
          )}
        </StyledMapView>
      </MapContainer>
    </MapContainer>
  );
};

export default MainScreens;

const MapContainer = styled.View`
  flex: 1;
`;

const StyledMapView = styled(MapView)`
  flex: 1;
`;
