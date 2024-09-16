import React from 'react';
import {HeaderContainer, HeaderTitle} from './header.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  isCheck?: boolean;
  handleCheck?: () => void;
}

const Header = ({title, isCheck, handleCheck}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <HeaderContainer isCheck={isCheck}>
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <FontAwesomeIcon icon={faBars} size={30} color="white" />
      </Pressable>
      <HeaderTitle>{title}</HeaderTitle>
      {isCheck && (
        <Pressable onPress={handleCheck}>
          <FontAwesomeIcon icon={faCheck} size={30} color="white" />
        </Pressable>
      )}
    </HeaderContainer>
  );
};

export default Header;
