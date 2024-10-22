import { Stack } from 'expo-router';
import { Platform } from 'react-native';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade' : 'default',
      }}
    />
  );
};

export default AuthLayout;
