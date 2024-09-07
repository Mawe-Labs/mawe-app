import React from 'react';
import Header from '../../components/Header/header.component';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faListCheck} from '@fortawesome/free-solid-svg-icons/faListCheck';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import {
  List,
  ListCount,
  ListText,
  LeftList,
} from './list.styles';
import {TouchableOpacity, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import RoundButton from '../../components/Button/round-button.component';

const Lists = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Header title="Listas" />
      <List>
        <LeftList>
          <FontAwesomeIcon icon={faListCheck} size={25} color="gray" />
          <TouchableOpacity>
            <ListText>Lista</ListText>
            <ListCount>(1/18)</ListCount>
          </TouchableOpacity>
        </LeftList>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.jumpTo('Home'))}>
          <FontAwesomeIcon icon={faArrowRight} size={25} color="gray" />
        </TouchableOpacity>
      </List>
      <RoundButton style={{top: '420%'}} />
    </View>
  );
};

export default Lists;
