import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';
import ImageMarker from '@/components/Main/ImageMarker';
import StoryModal from '@/components/Main/StoryModal';
import AlertSVG from '@/assets/icon/alert.svg';
import { useRouter } from 'expo-router';

const MainScreens = ({ location }: MainScreensState) => {
  const router = useRouter();

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
    {
      coordinate: {
        latitude: location.coords.latitude - 1,
        longitude: location.coords.longitude + 0.9,
      },
      uri: '',
      length: 20,
    },
  ];

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.snapToPosition(450);
  }, []);

  return (
    <>
      <MapContainer>
        <AlertBtn onPress={() => router.push('/home/notification')}>
          <AlertSVG width={24} />
        </AlertBtn>
        <StyledMapView rotateEnabled={false}>
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
      <StoryModal bottomSheetRef={bottomSheetRef} />
    </>
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
