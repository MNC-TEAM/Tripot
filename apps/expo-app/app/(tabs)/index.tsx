import MainScreens from '@screens/MainScreens';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const IndexPage = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('위치기반 설정이 꺼져있습니다.');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return location && <MainScreens location={location} />;
};

export default IndexPage;
