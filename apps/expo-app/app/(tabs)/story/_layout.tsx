import { Stack } from 'expo-router';
import { Platform } from 'react-native';

const StoryLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: Platform.OS === 'android' ? 'fade' : 'default',
      }}
    />
  );
};

export default StoryLayout;
