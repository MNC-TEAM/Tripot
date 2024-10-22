import { Stack } from 'expo-router';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          gestureEnabled: false,
          animation: Platform.OS === 'android' ? 'fade' : 'default',
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
