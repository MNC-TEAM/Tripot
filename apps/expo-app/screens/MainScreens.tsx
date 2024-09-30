import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import ImageMarker from '../components/ImageMarker';
import StoryModal from '../ui/StoryModal';

const MainScreens = ({ location }: MainScreensState) => {
  const markers = [
    {
      coordinate: location.coords,
      uri: 'https://picsum.photos/200',
    },
    {
      coordinate: {
        latitude: location.coords.latitude + 1,
        longitude: location.coords.longitude + 1,
      },
      uri: 'https://picsum.photos/200',
    },
    {
      coordinate: {
        latitude: location.coords.latitude - 1,
        longitude: location.coords.longitude - 1,
      },
      uri: 'https://picsum.photos/200',
    },
  ];

  return (
    <>
      <MapContainer>
        <StyledMapView>
          {location &&
            markers.map((marker, index) => (
              <ImageMarker
                key={index}
                coordinate={marker.coordinate}
                uri={marker.uri}
              />
            ))}
        </StyledMapView>
      </MapContainer>
      <StoryModal />
    </>
  );
};

export default MainScreens;

const MapContainer = styled.View`
  flex: 1;
`;
const StyledMapView = styled(MapView)`
  flex: 1;
`;
