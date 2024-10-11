import { Tabs } from 'expo-router';
import { ViewStyle } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabLayout = () => {
  return (
    <Tabs
      safeAreaInsets={safeAreaInsetsStyle}
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarStyle,
        tabBarItemStyle,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: 'rgba(000,000,000,0.6)',
      }}
    >
      <Tabs.Screen
        name="mypage"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={20} color={color} />
          ),
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="map-outline" size={20} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="story"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-text" size={20} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const safeAreaInsetsStyle = { top: 0, bottom: 0, left: 0, right: 0 };

const tabBarStyle: ViewStyle = {
  position: 'absolute',
  bottom: 35,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 1000,
  backgroundColor: 'rgba(000,000,000,0.39)',
  width: 206,
  height: 60,
  left: '50%',
  transform: [{ translateX: -103 }],
  flexDirection: 'row',
};

const tabBarItemStyle: ViewStyle = {
  width: 47,
  height: 47,
  borderRadius: 1000,
  flex: 0,
  marginHorizontal: 11,
  justifyContent: 'center',
  alignItems: 'center',
};
