import { Stack } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const MyPageLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: '#000' },
        headerStyle: { backgroundColor: '#222' },
        header: ({ navigation, options }) => (
          <SafeAreaView style={options.headerStyle}>
            <View
              style={[
                {
                  height: 60,
                  justifyContent: 'flex-end',
                  paddingHorizontal: 24,
                  paddingBottom: 20,
                },
              ]}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 14,
                }}
              >
                <Ionicons
                  onPress={navigation.goBack}
                  name="chevron-back"
                  size={32}
                  color="white"
                />
                <Text style={{ color: '#fff', fontWeight: 600, fontSize: 20 }}>
                  {options.headerBackTitle}
                </Text>
              </View>
            </View>
          </SafeAreaView>
        ),
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
