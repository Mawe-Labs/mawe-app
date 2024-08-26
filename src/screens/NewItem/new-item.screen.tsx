import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Header from '../../components/Header/header.component';
import { categories } from '../../mocks/categories.mock';

const NewItemScreen: React.FC = () => {
  const [isCheckedCart, setIsCheckedCart] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showCategories, setShowCategories] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const productImage = useMemo(() => {
    if (!searchText.trim()) return null;
    const product = filteredProducts.find(p => p.name.toLowerCase() === searchText.toLowerCase());
    return product ? product.image : null;
  }, [filteredProducts, searchText]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategories(false);
  };

  const handleProductSelect = (productImage: any) => {
    setSelectedProduct(productImage);
    setIsModalVisible(true);
  };

  const handleAddToCart = () => {
    console.log('Item adicionado ao carrinho');
  };

  return (
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
                  onPress={() => handleProductSelect(item.image)}
                  style={[
                    styles.productItem,
                    selectedProduct === item.image && styles.selectedProductItem,
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
          <Text style={styles.label}>Inserir no Carrinho</Text>
          <View style={styles.cartCheckboxContainer}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/564x/59/e5/53/59e5531ab44ffbedbc0f40ecf97d5385.jpg' }} 
              style={styles.image2} 
              resizeMode="cover"
            />
            <CheckBox
              value={isCheckedCart}
              onValueChange={setIsCheckedCart}
              boxType='square'
              style={styles.checkbox}
            />
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
          <Text style={styles.label}>Observação</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Digite uma observação"
          />
        </View>
        {searchText.trim() && productImage && (
          <>
            <Text style={styles.label}>Foto</Text>
            <Image 
              source={productImage} 
              style={styles.image} 
              resizeMode="cover"
            />
          </>
        )}
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Adicionar Item no Carrinho</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={styles.modalContainer}>
            <Image source={selectedProduct || { uri: '' }} style={styles.modalImage} resizeMode="contain" />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
  form: {
    padding: 15,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 10,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quantityContainer: {
    flex: 1,
    marginRight: 10,
  },
  unitContainer: {
    flex: 1,
  },
  textArea: {
    height: 30,
    paddingTop: 5,
  },
  selectedCategory: {
    fontSize: 20,
    color: '#000',
    backgroundColor: '#ffffff',
    padding: 10, 
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  image2: {
    width: 35,
    height: 35,
  },
  cartContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cartCheckboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  checkbox: {
    marginLeft: 10,
  },
  categoryContainer: {
    marginBottom: 30,
  },
  addButton: {
    backgroundColor: '#12824f',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  productListContainer: {
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productName: {
    fontSize: 16,
    flex: 1,
  },
  productPrice: {
    fontSize: 16,
    color: '#00ba00',
  },
  selectedProductItem: {
    backgroundColor: '#e0e0e0',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: '90%',
    height: '80%',
  },
});

export default NewItemScreen;
