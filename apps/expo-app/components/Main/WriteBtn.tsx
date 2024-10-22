import styled from 'styled-components/native';
import WriteSVG from '@/assets/icon/write.svg';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import { useRouter } from 'expo-router';

const WriteBtn = () => {
  const router = useRouter();

  return (
    <WriteStyled onPress={() => router.push('/home/story/write')}>
      <Svg
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <Defs>
          <RadialGradient
            id="radialGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <Stop offset="0%" stopColor="#ffee70" stopOpacity={0.47} />
            <Stop offset="100%" stopColor="#ffee70" stopOpacity={1} />
          </RadialGradient>
        </Defs>
        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#radialGradient)"
        />
      </Svg>
      <ViewStyled>
        <WriteSVG color="black" />
        <TextStyled style={{ fontSize: 15, color: '#000' }}>
          스토리 쓰기
        </TextStyled>
      </ViewStyled>
    </WriteStyled>
  );
};

export default WriteBtn;

const WriteStyled = styled.TouchableOpacity`
  width: 129px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  overflow: hidden;
`;

const ViewStyled = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const TextStyled = styled.Text`
  font-size: 15px;
  color: #000;
`;
