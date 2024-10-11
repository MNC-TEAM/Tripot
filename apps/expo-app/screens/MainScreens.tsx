import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';
import ImageMarker from '@/components/Main/ImageMarker';
import StoryModal from '@/components/Main/StoryModal';
import AlertSVG from '@/assets/icon/alert.svg';

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
      length: 10,
    },
    {
      coordinate: {
        latitude: location.coords.latitude - 1,
        longitude: location.coords.longitude - 1,
      },
      uri: 'https://picsum.photos/200',
    },
  ];

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <MapContainer>
        <AlertBtn>
          <AlertSVG width={24} />
        </AlertBtn>
        <StyledMapView>
          {location &&
            markers.map((marker, index) => (
              <ImageMarker
                onPress={handlePresentModalPress}
                key={index}
                coordinate={marker.coordinate}
                uri={marker.uri}
                length={marker.length}
              />
            ))}
        </StyledMapView>
      </MapContainer>
      <StoryModal bottomSheetModalRef={bottomSheetModalRef} />
    </BottomSheetModalProvider>
  );
};

export default MainScreens;

const MapContainer = styled.View`
  flex: 1;
  position: relative;
`;
const StyledMapView = styled(MapView)`
  flex: 1;
`;

const AlertBtn = styled.Pressable`
  position: absolute;
  right: 24px;
  top: 62px;
  z-index: 2;
`;
