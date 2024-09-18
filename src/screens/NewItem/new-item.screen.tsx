import React, { useState, useMemo } from 'react';
import { 
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Header from '../../components/Header/header.component';
import { categories } from '../../mocks/categories.mock';
import { styles } from './new-item.styles';

const NewItemScreen: React.FC = () => {
  const [isCheckedCart, setIsCheckedCart] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showCategories, setShowCategories] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [observations, setObservations] = useState('');

  const formatPrice = (value: string) => {
    const cleanedValue = value.replace(/[^0-9]/g, '');
    const numericValue = parseInt(cleanedValue, 10) || 0;
    const formattedValue = (numericValue / 100).toFixed(2).replace('.', ',');

    return formattedValue;
  };

  const filteredProducts = useMemo(() => {
    const category = categories.find(cat => cat.name === selectedCategory);
    if (!category) return [];

    return category.products.filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, selectedCategory]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategories(false);
  };

  const handleProductSelect = (product: any) => {
    setSelectedProduct(product);
    setSearchText(''); 
    setShowCategories(false); 
    setIsModalVisible(true);
  };

  const handleAddToCart = () => {
    console.log('Item adicionado ao carrinho');
  };

  return (
    <SafeAreaView style={{flex: 1}}> 
    <ScrollView contentContainerStyle={styles.container}>
      <Header title={'Novo Item'} />
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Digite o nome do item" 
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
       
        {searchText.trim() && (
          <View style={styles.productListContainer}>
            <Text style={styles.label}>Produtos Encontrados</Text>
            <FlatList
              data={filteredProducts}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleProductSelect(item)}
                  style={[
                    styles.productItem,
                    selectedProduct?.id === item.id && styles.selectedProductItem,
                  ]}
                >
                  <Image source={item.image} style={styles.productImage} />
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>{item.value} R$</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        <View style={styles.row}>
          <View style={styles.quantityContainer}>
            <Text style={styles.label}>Quantidade</Text>
            <TextInput 
              style={styles.input} 
              keyboardType="numeric" 
              placeholder="Digite a quantidade" 
            />
          </View>
          <View style={styles.unitContainer}>
            <Text style={styles.label}>Unidade</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={selectedUnit}
              onChangeText={setSelectedUnit}
              placeholder="Digite a unidade"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Preço</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={price}
            onChangeText={(text) => setPrice(formatPrice(text))}
            placeholder="00,00" 
          />
        </View>
        <View style={styles.cartContainer}>
          <View style={styles.cartCheckboxContainer}>
           
           
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.label}>Categoria</Text>
          <TouchableOpacity onPress={() => setShowCategories(!showCategories)}>
            <Text style={styles.selectedCategory}>{selectedCategory}</Text>
          </TouchableOpacity>
          {showCategories && (
            <FlatList
              data={categories.map(category => ({ key: category.name }))}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.option}
                  onPress={() => handleCategorySelect(item.key)}
                >
                  <Text style={styles.optionText}>{item.key}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Observações</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Observações" 
            value={observations}
            onChangeText={setObservations}
          />
        </View>
        {selectedProduct && (
          <Image 
            source={selectedProduct.image} 
            style={{ width: 200, height: 200, marginTop: 10 }} 
            resizeMode="contain"
          />
        )}
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default NewItemScreen;
