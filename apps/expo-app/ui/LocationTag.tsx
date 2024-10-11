import { ReactNode } from 'react';
import styled from 'styled-components/native';

const LocationTag = ({ children }: LocationTagState) => {
  return (
    <TagStyle>
      <Tag>{children}</Tag>
    </TagStyle>
  );
};

export default LocationTag;

interface LocationTagState {
  children: ReactNode;
}

const TagStyle = styled.View`
  padding: 2px 12px;
  border-radius: 1000px;
  background: rgba(119, 119, 119, 0.45);
`;

const Tag = styled.Text`
  line-height: 19px;
  font-size: 13px;
  color: #ffee70;
  font-weight: bold;
`;
