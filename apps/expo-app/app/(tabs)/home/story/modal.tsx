import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import LocationTag from '@/ui/LocationTag';
import * as ImagePicker from 'expo-image-picker';

const WriteModal = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 24,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 60,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
            }}
          >
            취소
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#fff',
            }}
          >
            My Story
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
            }}
          >
            등록
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 18,
            borderBottomWidth: 1,
            paddingBottom: 14,
            borderColor: '#5A5A5A',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
            }}
          >
            <LocationTag>전주</LocationTag>
            <TextInput
              style={{
                fontSize: 18,
              }}
              placeholderTextColor="rgba(255,255,255,0.36)"
              placeholder="제목을 입력하세요"
            />
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                color: '#fff',
              }}
            >
              전체공개
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{
            marginTop: 32,
          }}
        >
          <TextInput
            placeholder="내용을 입력하세요"
            style={{ fontSize: 18 }}
            placeholderTextColor="rgba(255,255,255,0.36)"
          />
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              marginTop: 14,
            }}
          >
            <TouchableOpacity onPress={pickImage}>
              <Text>이미지 버튼</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>이미지 버튼</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WriteModal;
