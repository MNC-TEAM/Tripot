import { Pressable, SafeAreaView, Text, View } from 'react-native';
import LeftSvg from '@/assets/icon/left.svg';

const CustomHeader = ({ navigation, options }: CustomHeaderState) => {
  return (
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
          <Pressable onPress={navigation.goBack}>
            <LeftSvg width={24} />
          </Pressable>
          <Text style={{ color: '#fff', fontWeight: 600, fontSize: 20 }}>
            {options.headerBackTitle}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;

interface CustomHeaderState {
  navigation: any;
  options: any;
}
