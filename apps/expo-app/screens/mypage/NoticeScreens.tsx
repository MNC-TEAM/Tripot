import Accordion from '@/components/Mypage/Accordion';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const NoticeScreens = () => {
  return (
    <ScrollViewStyled
      contentContainerStyle={{
        gap: 10,
        alignItems: 'center',
        paddingVertical: 24,
      }}
    >
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 24,
        }}
        data={Array.from({ length: 100 }, (_, i) => ({ index: i + 1 }))}
        renderItem={({ index }) => (
          <Line index={index}>
            <Accordion />
          </Line>
        )}
        keyExtractor={item => String(item.index)}
      />
    </ScrollViewStyled>
  );
};

export default NoticeScreens;

const ScrollViewStyled = styled.ScrollView`
  flex: 1;
`;

const Line = styled.View<{ index: number }>`
  border-top-width: ${({ index }) => (index !== 0 ? '1px' : '')};
  border-color: rgba(255, 255, 255, 0.3);
  padding: ${({ index }) => (index !== 0 ? '32px 0px' : '0px 0px 32px 0px')};
`;
