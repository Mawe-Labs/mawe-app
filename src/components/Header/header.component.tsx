import React from 'react';
import {HeaderContainer, HeaderTitle} from './header.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from "@react-navigation/native"

interface HeaderProps {
  title: string;
  isMyList?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, isMyList}) => {
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      {isMyList && (
        <>
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <FontAwesomeIcon icon={faBars} size={30} color="white" />
          </Pressable>
          <HeaderTitle>{title}</HeaderTitle>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
