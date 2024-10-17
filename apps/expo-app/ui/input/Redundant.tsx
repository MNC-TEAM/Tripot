import styled from 'styled-components/native';

const Redundant = () => {
  return (
    <RedundantStyle>
      <Text>중복확인</Text>
    </RedundantStyle>
  );
};

export default Redundant;

const RedundantStyle = styled.View`
  background: #ffee70;
  border-radius: 1000px;
  width: 67px;
  height: 26px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #000;
`;
