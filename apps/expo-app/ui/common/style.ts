import { Platform, StatusBar } from 'react-native';
import styled, { css } from 'styled-components/native';

const SafeAreaUi = styled.SafeAreaView`
  flex: 1;
  ${Platform.select({
    ios: css`
      padding: 0 24px;
    `,
    android: css`
      padding-top: ${StatusBar.currentHeight && StatusBar.currentHeight * 2}px;
    `,
  })}
`;

export { SafeAreaUi };
