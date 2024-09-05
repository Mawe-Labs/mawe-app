import Header from '../../components/Header/header.component';
import React, {useState} from 'react';
import {
  Container,
  ErrorText,
  Input,
  InputControl,
  InputText,
} from './new-list.styles';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const NewList = () => {
  const navigation = useNavigation();
  const [listName, setListName] = useState('');
  const [error, setError] = useState(false);

  const handleConfirmName = () => {
    if (listName === '') {
      setError(true);
    } else {
      navigation.dispatch(DrawerActions.jumpTo('Lists'));
      setError(false);
      setListName('');
    }
  };

  return (
    <Container>
      <Header title="Nova lista" isCheck handleCheck={handleConfirmName} />
      <InputControl>
        <InputText>Nome da lista</InputText>
        <Input
          keyboardType="default"
          onChangeText={(txt) => setListName(txt)}
          value={listName}
        />
        {error && <ErrorText>O nome não pode estar vazio.</ErrorText>}
      </InputControl>
    </Container>
  );
};

export default NewList;
