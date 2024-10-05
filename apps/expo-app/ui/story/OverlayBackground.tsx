import { View, ImageBackground } from 'react-native';
import React, { ReactNode } from 'react';
import { BlurView } from 'expo-blur';

const OverlayBackground = ({ children }: { children: ReactNode }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('@assets/story_background.jpg')}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <BlurView style={{ flex: 1 }} intensity={100}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.42)' }}>
            {children}
          </View>
        </BlurView>
      </ImageBackground>
    </View>
  );
};

export default OverlayBackground;
