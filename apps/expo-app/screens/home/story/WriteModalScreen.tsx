import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import LocationTag from '@/ui/LocationTag';
import * as ImagePicker from 'expo-image-picker';
import GallerySVG from '@/assets/icon/gallery.svg';
import ImageSVG from '@/assets/icon/image.svg';
import UnlockSVG from '@/assets/icon/unlock.svg';
import LockSVG from '@/assets/icon/lock.svg';
import { useRouter } from 'expo-router';

const WriteModalScreen = () => {
  const router = useRouter();

  const [privates, setPrivates] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      Image.getSize(imageUri, (width, height) => {
        const screenWidth = Dimensions.get('window').width - 48; // 화면 너비
        const scaleFactor = width / screenWidth;
        const imageHeight = height / scaleFactor; // 비율에 맞는 이미지 높이 계산

        setImageDimensions({ width: screenWidth, height: imageHeight });
        setImage(imageUri);
      });
    }
  };

  const takePhoto = async () => {
    // 카메라 권한 요청
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('카메라 접근 권한이 필요합니다.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // 이미지만 허용
      allowsEditing: false, // 사진 편집 허용
      quality: 1, // 사진 품질 (1이 가장 높음)
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      Image.getSize(imageUri, (width, height) => {
        const screenWidth = Dimensions.get('window').width - 48; // 화면 너비
        const scaleFactor = width / screenWidth;
        const imageHeight = height / scaleFactor; // 비율에 맞는 이미지 높이 계산

        setImageDimensions({ width: screenWidth, height: imageHeight });
        setImage(imageUri);
      });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
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
          <TouchableOpacity onPress={() => router.back()}>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
              }}
            >
              취소
            </Text>
          </TouchableOpacity>

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
                color: '#fff',
              }}
              placeholderTextColor="rgba(255,255,255,0.36)"
              placeholder="제목을 입력하세요"
            />
          </View>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              gap: 5,
            }}
            onPress={() => {
              setPrivates(!privates);
            }}
          >
            {!privates && <UnlockSVG width={24} />}
            {privates && <LockSVG color="#FFEE70" width={24} />}

            <Text
              style={{
                fontSize: 12,
                color: !privates ? '#fff' : '#FFEE70',
              }}
            >
              {!privates && '전체공개'}
              {privates && '나만보기'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: 200,
          }}
          style={{
            marginTop: 32,
          }}
        >
          {image && (
            <View
              style={{
                marginBottom: 30,
              }}
            >
              <Image
                style={{
                  width: imageDimensions.width,
                  height: imageDimensions.height,
                }}
                source={{ uri: image }}
                resizeMode="contain"
              />
            </View>
          )}
          <TextInput
            placeholder="내용을 입력하세요"
            style={{ fontSize: 18, color: '#fff' }}
            multiline
            scrollEnabled={false}
            placeholderTextColor="rgba(255,255,255,0.36)"
          />
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              marginTop: 14,
            }}
          >
            <TouchableOpacity
              style={{
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
                borderRadius: 10000,
              }}
              onPress={pickImage}
            >
              <GallerySVG width={24} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
                borderRadius: 10000,
              }}
              onPress={takePhoto}
            >
              <ImageSVG width={24} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WriteModalScreen;
