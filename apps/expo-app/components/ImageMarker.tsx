import styled from 'styled-components/native';

const ImageMarker = ({ uri }: { uri: string }) => {
  return (
    <Marker>
      <MarkerImage source={{ uri }} resizeMode="cover" />
    </Marker>
  );
};

export default ImageMarker;

const Marker = styled.View`
  width: 67px;
  height: 67px;
  border-radius: 6px;
  border-width: 8px;
  border-color: #fff;
  box-sizing: border-box;
`;

const MarkerImage = styled.Image`
  flex: 1;
  justify-content: 'center';
  border-radius: 6px;
`;
