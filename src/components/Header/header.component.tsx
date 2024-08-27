import React from 'react';
import {HeaderContainer, HeaderTitle} from './header.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

interface HeaderProps {
  title: string;
  isMyList?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, isMyList}) => {
  return (
    <HeaderContainer>
      {isMyList && <FontAwesomeIcon icon={faBars} size={30} color="white" />}
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
