import { Stack } from 'expo-router';

const MyPageLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: '#2b2b2b' },
        headerStyle: { backgroundColor: '#2b2b2b' },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="notice" options={{ headerShown: true }} />
      <Stack.Screen name="cs" options={{ headerShown: true }} />
    </Stack>
  );
};

export default MyPageLayout;
