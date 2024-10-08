import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

const MyPageLayout = () => {
  return (
    <Stack
      screenOptions={{
        header: ({ navigation, route, options, back }) => {
          return (
            <View
              style={{
                height: 70,
                backgroundColor: '#2b2b2b',
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: '#000',
                }}
              >
                <Text style={{ color: '#fff' }}>{options.headerBackTitle}</Text>
              </View>
            </View>
          );
        },
        contentStyle: { backgroundColor: '#191919' },
        headerStyle: { backgroundColor: '#2b2b2b' },
        headerTitle: '',
        headerTintColor: '#fff',
        headerBackTitleStyle: { fontSize: 20 },
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
