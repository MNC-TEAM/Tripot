import CustomHeader from '@/ui/layout/CustomHeader';
import { Stack } from 'expo-router';

const StoryLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: '#222' },
        headerStyle: { backgroundColor: '#222' },
        headerTitle: '',
        headerTintColor: '#fff',
        headerBackTitleStyle: { fontSize: 20 },
        header: ({ navigation, options }) => (
          <CustomHeader navigation={navigation} options={options} />
        ),
      }}
    >
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'fullScreenModal',
          animation: 'fade',
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default StoryLayout;
