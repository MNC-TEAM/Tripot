import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';
import { LocationObject } from 'expo-location';
import ImageMarker from '../components/ImageMarker';

const MainScreens = ({ location }: { location: LocationObject | null }) => {
  return (
    <MapContainer>
      <MapContainer>
        <StyledMapView>
          {location && (
            <>
              <Marker coordinate={location.coords}>
                <ImageMarker uri="https://picsum.photos/200" />
              </Marker>
              <Marker
                coordinate={{
                  latitude: location.coords.latitude + 1,
                  longitude: location.coords.longitude + 1,
                }}
              >
                <ImageMarker uri="https://picsum.photos/200" />
              </Marker>
              <Marker
                coordinate={{
                  latitude: location.coords.latitude - 1,
                  longitude: location.coords.longitude - 1,
                }}
              >
                <ImageMarker uri="https://picsum.photos/200" />
              </Marker>
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
