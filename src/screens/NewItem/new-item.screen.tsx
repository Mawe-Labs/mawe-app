import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Header from '../../components/Header/header.component';

const unitOptions = Array.from({ length: 9 }, (_, i) => i + 1);
const categoryOptions = ['All', 'Frutas', 'Geladeira', 'Bebidas', 'Outros'];

const formatPrice = (value: string) => {
  const cleanedValue = value.replace(/[^0-9]/g, '');
  let formattedValue = cleanedValue;
  if (cleanedValue.length > 2) {
    formattedValue = cleanedValue.slice(0, -2) + ',' + cleanedValue.slice(-2);
  } else {
    formattedValue = '0,' + cleanedValue.padStart(2, '0');
  }
  return formattedValue;
};

const NewItemScreen: React.FC = () => {
  const [isCheckedCart, setIsCheckedCart] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState('2');
  const [showUnits, setShowUnits] = useState(false);
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Frutas');
  const [showCategories, setShowCategories] = useState(false);

  const handleUnitSelect = (unit: string) => {
    setSelectedUnit(unit);
    setShowUnits(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategories(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="NOVO ITEM" />
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.quantityContainer}>
          <View style={styles.quantitySection}>
            <Text style={styles.label}>Quantidade</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
          <View style={styles.unitSection}>
            <Text style={styles.label}>Unidade</Text>
            <TouchableOpacity onPress={() => setShowUnits(true)}>
              <Text style={styles.selectedUnit}>{selectedUnit}</Text>
            </TouchableOpacity>
            <Modal
              visible={showUnits}
              transparent={true}
              animationType="slide"
              onRequestClose={() => setShowUnits(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <FlatList
                    data={unitOptions.map(num => ({ key: num.toString() }))}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                      <TouchableOpacity 
                        style={styles.option}
                        onPress={() => handleUnitSelect(item.key)}
                      >
                        <Text style={styles.optionText}>{item.key}</Text>
                      </TouchableOpacity>
                    )}
                  />
                  <TouchableHighlight
                    style={styles.modalCloseButton}
                    onPress={() => setShowUnits(false)}
                  >
                    <Text style={styles.modalCloseButtonText}>Fechar</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.priceSection}>
            <Text style={styles.label}>Preço</Text>
            <TextInput
              style={styles.input2}
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
              />
              <CheckBox
                value={isCheckedCart}
                onValueChange={setIsCheckedCart}
                boxType='square'
                style={styles.checkbox}
              />
            </View>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.label}>Categoria</Text>
          <TouchableOpacity onPress={() => setShowCategories(!showCategories)}>
            <Text style={styles.selectedCategory}>{selectedCategory}</Text>
          </TouchableOpacity>
          {showCategories && (
            <FlatList
              data={categoryOptions.map(category => ({ key: category }))}
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
            multiline 
            numberOfLines={4}
          />
        </View>
        <Text style={styles.label}>Foto</Text>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://media.istockphoto.com/id/485582959/pt/vetorial/rolo-de-m%C3%A3o-sushi-salm%C3%A3o.jpg?s=612x612&w=0&k=20&c=ly0eryHoTx7qS-UH_JeZ13JYu6G1eMvwEbVMAKRh1TQ=' }} 
            style={styles.image} 
          />
        </View>
      </View>
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
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input2: {
    height: 40,
    width: 190,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  quantitySection: {
    flex: 1,
    marginRight: 10,
  },
  unitSection: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', 
    marginBottom: 10,
  },
  selectedUnit: {
    marginTop:8,
    fontSize: 16,
    color: '#000',
  },
  selectedCategory: {
    fontSize: 20,
    color: '#000',
    backgroundColor: '#ffffff',
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
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  priceSection: {
    flex: 1,
    marginRight: 10,
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
  imageContainer: {},
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  categoryContainer: {
    marginBottom: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#00ba00',
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default NewItemScreen;
