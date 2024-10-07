import React from 'react';
import StoryCard from '@ui/story/StoryCard';
import styled from 'styled-components/native';

const LikeScreens = () => {
  return (
    <Wrapper
      contentContainerStyle={{
        alignItems: 'center',
        paddingVertical: 30,
        gap: 10,
      }}
    >
      {Array(100)
        .fill(0)
        .map((_, index) => (
          <StoryCard
            key={index + 1}
            tag="태그"
            title="제목1"
            desc="내용"
            date="2020.00.00"
            uri="/"
          />
        ))}
    </Wrapper>
  );
};

export default LikeScreens;

const Wrapper = styled.ScrollView`
  padding: 0 24px;
  flex: 1;
`;
