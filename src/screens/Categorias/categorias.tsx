import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Alert } from 'react-native';
import Header from '../../components/Header/header.component';
import RoundButton from '../../components/Button/round-button.component';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './categories.styles';

const defaultCategories = [
  { id: '1', name: 'Todos' },
  { id: '2', name: 'Bazar e Limpeza' },
  { id: '3', name: 'Bebidas' },
  { id: '4', name: 'Geladeira' },
  { id: '5', name: 'Frutas, Vegetais e Legumes' },
  { id: '6', name: 'Higiene pessoal' },
  { id: '7', name: 'Importados' },
  { id: '8', name: 'Mercearia' },
  { id: '9', name: 'Padaria' },
  { id: '10', name: 'Saúde e Beleza' },
];

const CategoriesScreen: React.FC = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(defaultCategories);


  const handleAddCategory = (newCategory: string) => {
    const newId = (Math.random() * 10000).toFixed(0);
    setCategories(prevCategories => [...prevCategories, { id: newId, name: newCategory }]);
  };


  const handleDeleteCategory = (id: string) => {

    if (defaultCategories.some(category => category.id === id)) {
      Alert.alert("Exclusão não permitida", "Você não pode excluir categorias padrão.");
      return;
    }

   
    setCategories(prevCategories => prevCategories.filter(category => category.id !== id));
  };


  const renderCategoryItem = ({ item }: { item: { id: string; name: string } }) => (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item.name}</Text>
      
      {!defaultCategories.some(category => category.id === item.id) && (
        <TouchableOpacity onPress={() => handleDeleteCategory(item.id)}>
          <FontAwesomeIcon icon={faTrash} size={20} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );


  useFocusEffect(
    React.useCallback(() => {
      const newCategory = navigation.getState().routes[navigation.getState().index].params?.newCategory;
      if (newCategory) {
        handleAddCategory(newCategory);
        navigation.setParams({ newCategory: undefined });
      }
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <Header title={'Categorias'} />
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <RoundButton
        onPress={() => navigation.navigate('CreateCategories')}
        style={styles.addButton}
      >
        <FontAwesomeIcon icon={faPlus} size={20} color="#fff" />
      </RoundButton>
    </View>
  );
};

export default CategoriesScreen;
