import { useEffect, useState } from 'react';

import * as Location from 'expo-location';
import MainScreens from '../screens/MainScreens';

export default function Page() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('위치기반 설정이 꺼져있습니다.');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return <MainScreens location={location} />;
}
