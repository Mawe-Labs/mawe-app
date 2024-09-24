import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Header from '../../components/Header/header.component';
import {categories} from '../../mocks/categories.mock';
import {styles} from './edit-item.styles';
import {useProduct} from '../../context/product-edited.context';
import {useProducts} from '../../context/products.context';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const EditItem = () => {
  const {product} = useProduct();

  const [isCheckedCart, setIsCheckedCart] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showCategories, setShowCategories] = useState(false);
  const [searchText, setSearchText] = useState(product?.name || '');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const {products, setProducts} = useProducts();
  const navigation = useNavigation();

  useEffect(() => {
    setSelectedCategory(product?.category as string);
    setSearchText(product?.name as string);
  }, [product?.category]);

  const formatPrice = (value: string) => {
    const cleanedValue = value.replace(/[^0-9]/g, '');
    const numericValue = parseInt(cleanedValue, 10) || 0;
    const formattedValue = (numericValue / 100).toFixed(2).replace('.', ',');

    return formattedValue;
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategories(false);
  };

  const handleEditProduct = () => {
    if (!products) return;

    let updatedProduct: {
      name: string;
      category: string;
      id: number;
      image: any;
      value: number;
    } | null = null;

    const newProducts = products.map((category) => ({
      ...category,
      products: category.products.filter((prd) => {
        if (prd.name === product?.name) {
          updatedProduct = {
            ...prd,
            name: searchText,
            category: selectedCategory,
          };
          return false;
        }
        return true;
      }),
    }));

    const finalProducts = newProducts.map((category) => {
      if (category.name === selectedCategory && updatedProduct) {
        return {
          ...category,
          products: [...category.products, updatedProduct],
        };
      }
      return category;
    });

    setProducts(finalProducts);

    navigation.dispatch(DrawerActions.jumpTo('Home'));

  };

  const handleRemoveProduct = (id: number | undefined) => {
    if (products) {
      const newProducts = products.map((item) => ({
        ...item,
        products: item.products.filter((prdItem) => prdItem.id !== id),
      }));
      setProducts(newProducts);
    }

    navigation.dispatch(DrawerActions.jumpTo('Home'));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title={'Editar item'} />
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do item"
            defaultValue={product?.name}
            onChangeText={setSearchText}
          />
        </View>
        <View style={styles.row}>
          <View style={styles.quantityContainer}>
            <Text style={styles.label}>Quantidade</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Digite a quantidade"
              value="1"
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
            value={formatPrice(product?.value as string)}
            onChangeText={(text) => setPrice(formatPrice(text))}
            placeholder="00,00"
          />
        </View>
        <View style={styles.cartContainer}>
          <Text style={styles.label}>Inserir no Carrinho</Text>
          <View style={styles.cartCheckboxContainer}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/59/e5/53/59e5531ab44ffbedbc0f40ecf97d5385.jpg',
              }}
              style={styles.image2}
              resizeMode="cover"
            />
            <CheckBox
              value={isCheckedCart}
              onValueChange={setIsCheckedCart}
              boxType="square"
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
              data={categories.map((category) => ({key: category.name}))}
              keyExtractor={(item) => item.key}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleCategorySelect(item.key)}>
                  <Text style={styles.optionText}>{item.key}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
        {selectedProduct && (
          <Image
            source={selectedProduct.image}
            style={{width: 200, height: 200, marginTop: 10}}
            resizeMode="contain"
          />
        )}
        <TouchableOpacity style={styles.addButton} onPress={handleEditProduct}>
          <Text style={styles.addButtonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveProduct(product?.id)}>
          <Text style={styles.addButtonText}>Excluir produto</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditItem;
