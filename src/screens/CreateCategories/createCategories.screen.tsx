import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Header from '../../components/Header/header.component';
import styles from './CreateCategoriesScreen.styles';
import { useNavigation } from '@react-navigation/native';

const CreateCategoriesScreen: React.FC = () => {
  const [categoryName, setCategoryName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleAddCategory = () => {
    if (!categoryName.trim()) {
      setErrorMessage('Preencha o campo acima');
      return;
    }
    navigation.navigate('Categories', { newCategory: categoryName });
    setCategoryName(''); 
    setErrorMessage(''); 
  };

  return (
    <View style={styles.container}>
      <Header title={'Adicionar Categoria'} />
      <TextInput
        value={categoryName}
        onChangeText={setCategoryName}
        placeholder="Nome da categoria"
        style={styles.input}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleAddCategory}>
        <Text style={styles.buttonText}>Adicionar Categoria</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateCategoriesScreen;
