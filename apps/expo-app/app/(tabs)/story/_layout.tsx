import { Stack } from 'expo-router';

const StoryLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, gestureEnabled: false }} />
  );
};

export default StoryLayout;
