import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header/header.component';
import createStyles from './createStyles';

const InputScreen: React.FC = () => {
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();
  const styles = createStyles();

  const handleAddCategory = () => {
    if (category.trim()) {
      setErrorMessage(''); // Limpa mensagem de erro
      navigation.navigate('Categories', { newCategory: category });
      setCategory(''); // Limpa o campo de input após a submissão
    } else {
      setErrorMessage('Preencha o campo'); // Mostra mensagem de erro
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Nova Categoria" />
      <View style={styles.headerContainer}>
        <TextInput
          placeholder="Nova Categoria"
          value={category}
          onChangeText={setCategory}
          style={styles.input}
        />
      </View>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleAddCategory}>
        <Text style={styles.buttonText}>Adicionar Categoria</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputScreen;
