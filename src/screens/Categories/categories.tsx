import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../../components/Header/header.component';
import Button from '../../components/Button/RoundButton';
import styles from './categoriesStyles'; // Importação dos estilos

interface Category {
  id: string;
  name: string;
}

const initialCategories: Category[] = [
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

const CategoriesScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [recentCategoryId, setRecentCategoryId] = useState<string | null>(null);

  useEffect(() => {
    if (route.params?.newCategory) {
      const newCategory = route.params.newCategory;
      const newCategoryId = (categories.length + 1).toString();
      
      // Adiciona a nova categoria à lista
      setCategories((prevCategories) => [
        ...prevCategories,
        { id: newCategoryId, name: newCategory },
      ]);
      setRecentCategoryId(newCategoryId); 
    }
  }, [route.params?.newCategory]);

  const handleDeleteCategory = (id: string) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== id)
    );
    if (id === recentCategoryId) {
      setRecentCategoryId(null); 
    }
  };

  const renderItem = ({ item }: { item: Category }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
      {item.id === recentCategoryId && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteCategory(item.id)}
        >
          <Text style={styles.deleteButtonText}>Excluir</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Categorias'} />
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <View style={styles.buttonContainer}>
        <Button title="Adicionar Categoria" onPress={() => navigation.navigate('InputScreen')} />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
