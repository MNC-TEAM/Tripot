import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
