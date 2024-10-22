import { View, ImageBackground, Platform } from 'react-native';
import React, { ReactNode } from 'react';
import { BlurView } from 'expo-blur';

const OverlayBackground = ({ children }: { children: ReactNode }) => {
  return (
    <ImageBackground
      source={require('@/assets/story_background.jpg')}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <BlurView
        style={{
          flex: 1,
          backgroundColor: Platform.OS === 'android' ? '#fff' : '',
        }}
        intensity={100}
      >
        <View
          style={{
            flex: 1,
            backgroundColor:
              Platform.OS === 'android'
                ? 'rgba(0,0,0,0.5)'
                : 'rgba(0,0,0,0.42)',
          }}
        >
          {children}
        </View>
      </BlurView>
    </ImageBackground>
  );
};

export default OverlayBackground;
