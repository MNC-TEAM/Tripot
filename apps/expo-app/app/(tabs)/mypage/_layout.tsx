import CustomHeader from '@/ui/layout/CustomHeader';
import { Stack } from 'expo-router';
import { Platform } from 'react-native';

const MyPageLayout = () => {
  return (
    <Stack
      screenOptions={{
        header: ({ navigation, options }) => (
          <CustomHeader navigation={navigation} options={options} />
        ),
        contentStyle: { backgroundColor: '#121212' },
        headerStyle: { backgroundColor: '#222' },
        headerTitle: '',
        headerTintColor: '#fff',
        headerBackTitleStyle: { fontSize: 20 },
        animation: Platform.OS === 'android' ? 'fade' : 'default',
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="story"
        options={{
          headerBackTitle: '내가 쓴 스토리',
        }}
      />
      <Stack.Screen
        name="change"
        options={{
          headerBackTitle: '닉네임 변경',
        }}
      />
      <Stack.Screen
        name="comment"
        options={{
          headerBackTitle: '내가 쓴 댓글',
        }}
      />
      <Stack.Screen
        name="like"
        options={{
          headerBackTitle: '하트 누른 목록',
        }}
      />
      <Stack.Screen
        name="notice"
        options={{
          headerBackTitle: '공지사항',
        }}
      />
      <Stack.Screen
        name="cs"
        options={{
          headerBackTitle: '고객센터',
        }}
      />
    </Stack>
  );
};

export default MyPageLayout;
