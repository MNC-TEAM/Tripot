import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import SearchSVG from '@/assets/icon/search.svg';
import { useRouter } from 'expo-router';
import { ReactNode } from 'react';

const Header = ({
  children,
  search,
}: {
  children: ReactNode;
  search?: boolean;
}) => {
  const router = useRouter();

  return (
    <HeaderStyled>
      <HeaderLogo>{children}</HeaderLogo>
      {search && (
        <Pressable
          onPress={() => {
            router.push('/story/find');
          }}
        >
          <SearchSVG width={24} />
        </Pressable>
      )}
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;

const HeaderLogo = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
