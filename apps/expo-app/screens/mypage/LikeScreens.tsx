import StoryCard from '@/ui/StoryCard';
import React from 'react';
import styled from 'styled-components/native';

const LikeScreens = () => {
  return (
    <Wrapper
      contentContainerStyle={{
        alignItems: 'center',
        paddingVertical: 14,
      }}
    >
      {Array(100)
        .fill(0)
        .map((_, index) => (
          <StoryCard
            key={index + 1}
            tag="전주"
            title="한옥마을 체험기🌽"
            desc="내용입니다.  내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다."
            date="2024.1.1"
            uri="/"
          />
        ))}
    </Wrapper>
  );
};

export default LikeScreens;

const Wrapper = styled.ScrollView`
  flex: 1;
`;
