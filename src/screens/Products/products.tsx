import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/header.component';
import { categories } from '../../mocks/categories.mock';
import styles from '../Products/products.styles'; 
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { CircleAddedItem } from '../Home/home.styles';


const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const categoryNames = categories.map(category => category.name);
  const navigation = useNavigation(); 
  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const renderCategoryItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[styles.item, selectedCategory === item && styles.selectedItem]}
      onPress={() => handleSelect(item)}
    >
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderProductItem = ({ item }: { item: any }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>R$ {item.value.toFixed(2)}</Text>
    </View>
  );

  const filteredProducts = selectedCategory === 'Todos'
    ? categories.flatMap(category => category.products)
    : categories.find(category => category.name === selectedCategory)?.products || [];

  return (
    <View style={styles.container}>
      <Header title={'Produtos'} />
      <TouchableOpacity
        style={styles.selectContainer}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.selectedText}>
          {selectedCategory ? selectedCategory : 'Selecione uma categoria'}
        </Text>
        <Icon
          name={isOpen ? 'arrow-drop-up' : 'arrow-drop-down'}
          size={24}
          color="#000"
          style={styles.icon}
        />
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          data={categoryNames}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.list}
        />
      )}
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />

      <CircleAddedItem onPress={() => navigation.navigate('NewItem')}>
        <FontAwesomeIcon icon={faAdd} size={25} style={{color: '#fff'}} />
      </CircleAddedItem>
    </View>
  );
};

export default Products;
