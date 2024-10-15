import CustomHeader from '@/ui/CustomHeader';
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
    />
  );
};

export default StoryLayout;
