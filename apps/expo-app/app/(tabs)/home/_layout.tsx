import CustomHeader from '@/ui/CustomHeader';
import { Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="notification"
        options={{
          headerBackTitle: '알림',
          contentStyle: { backgroundColor: '#121212' },
          headerStyle: { backgroundColor: '#222' },
          headerTitle: '',
          headerTintColor: '#fff',
          headerBackTitleStyle: { fontSize: 20 },
          header: ({ navigation, options }) => (
            <CustomHeader navigation={navigation} options={options} />
          ),
          headerRight: () => (
            <Pressable
              style={{
                backgroundColor: '#000',
                paddingHorizontal: 15,
                paddingVertical: 7,
                borderRadius: 1000,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>
                모두 읽기
              </Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="story"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default HomeLayout;
