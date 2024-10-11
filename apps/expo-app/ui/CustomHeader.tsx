import { Pressable, SafeAreaView, Text, View } from 'react-native';
import LeftSvg from '@/assets/icon/left.svg';

const CustomHeader = ({ navigation, options }: CustomHeaderState) => {
  return (
    <SafeAreaView style={options.headerStyle}>
      <View
        style={[
          {
            height: 60,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 24,
            paddingBottom: 20,
            flexDirection: 'row',
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
          {!options.headerBackVisible && (
            <Pressable onPress={navigation.goBack}>
              <LeftSvg width={24} />
            </Pressable>
          )}
          <Text style={{ color: '#fff', fontWeight: 600, fontSize: 20 }}>
            {options.headerBackTitle}
          </Text>
        </View>

        {options.headerRight && <options.headerRight />}
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;

interface CustomHeaderState {
  navigation: any;
  options: any;
}
