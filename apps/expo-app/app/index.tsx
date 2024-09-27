import { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';
import styled from 'styled-components/native';

export default function Page() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <MapContainer>
      <MapContainer>
        <StyledMapView>
          {location && (
            <>
              <Marker coordinate={location.coords}>
                <Marker2>
                  <MarkerImage
                    source={{ uri: 'https://picsum.photos/200' }}
                    resizeMode="cover"
                  />
                </Marker2>
              </Marker>
              <Marker
                coordinate={{
                  latitude: location.coords.latitude + 1,
                  longitude: location.coords.longitude + 1,
                }}
              >
                <Marker2>
                  <MarkerImage
                    source={{ uri: 'https://picsum.photos/200' }}
                    resizeMode="cover"
                  />
                </Marker2>
              </Marker>
              <Marker
                coordinate={{
                  latitude: location.coords.latitude - 1,
                  longitude: location.coords.longitude - 1,
                }}
              >
                <Marker2>
                  <MarkerImage
                    source={{ uri: 'https://picsum.photos/200' }}
                    resizeMode="cover"
                  />
                </Marker2>
              </Marker>
            </>
          )}
        </StyledMapView>
      </MapContainer>
    </MapContainer>
  );
}

const MapContainer = styled.View`
  flex: 1;
`;

const StyledMapView = styled(MapView)`
  flex: 1;
`;

const Marker2 = styled.View`
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
