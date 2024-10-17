import { Tabs } from 'expo-router';
import { ViewStyle } from 'react-native';
import MypageSVG from '@/assets/icon/mypage.svg';
import MainSVG from '@/assets/icon/main.svg';
import DashSVG from '@/assets/icon/dash.svg';

const TabLayout = () => {
  return (
    <Tabs
      safeAreaInsets={safeAreaInsetsStyle}
      screenOptions={({ route }) => {
        return {
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarItemStyle,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: 'rgba(000,000,000,0.6)',
          tabBarStyle: {
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
            zIndex: 1,
            // display: 'none',
          },
        };
      }}
    >
      <Tabs.Screen
        name="mypage"
        options={{
          tabBarIcon: ({ color }) => <MypageSVG width={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <MainSVG width={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="story"
        options={{
          tabBarIcon: ({ color }) => <DashSVG width={24} color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const safeAreaInsetsStyle = { top: 0, bottom: 0, left: 0, right: 0 };

const tabBarItemStyle: ViewStyle = {
  width: 47,
  height: 47,
  borderRadius: 1000,
  flex: 0,
  marginHorizontal: 11,
  justifyContent: 'center',
  alignItems: 'center',
};
