import styled from 'styled-components/native';

export const SearchTextInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.29)',
})`
  height: 41px;
  flex: 1;
  border-radius: 1000px;
  padding: 0 16px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.24);
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;
