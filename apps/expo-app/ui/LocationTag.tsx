import { ReactNode } from 'react';
import styled from 'styled-components/native';

const LocationTag = ({ children, main }: LocationTagState) => {
  return (
    <TagStyle main={main}>
      <Tag>{children}</Tag>
    </TagStyle>
  );
};

export default LocationTag;

interface LocationTagState {
  children: ReactNode;
  main?: boolean;
}

const TagStyle = styled.View<Pick<LocationTagState, 'main'>>`
  padding: 2px 12px;
  border-radius: 1000px;
  background: ${({ main }) =>
    !main ? 'rgba(119, 119, 119, 0.45)' : 'rgba(0, 0, 0, 0.45)'};
`;

const Tag = styled.Text`
  line-height: 19px;
  font-size: 13px;
  color: #ffee70;
  font-weight: bold;
`;
