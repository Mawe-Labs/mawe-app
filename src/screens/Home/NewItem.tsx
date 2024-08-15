import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {TextInputMask} from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';

const NovoItemScreen: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState('un');
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="arrow-left" size={20} color="#ffffff" />
          <Text style={styles.headerButtonText} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Novo Item</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="arrow-right" size={20} color="#ffffff" />
          <Text style={styles.headerButtonText} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Quantidade</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Unidade</Text>
            <Picker
              selectedValue={selectedUnit}
              style={styles.picker}
              onValueChange={itemValue => setSelectedUnit(itemValue)}>
              <Picker.Item label="un" value="un" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
            </Picker>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.priceContainer}>
            <Text style={styles.label}>Preço</Text>
            <View style={styles.priceInputContainer}>
              <TextInputMask
                type={'money'}
                options={{
                  precision: 2,
                  separator: ',',
                  delimiter: '.',
                  unit: '',
                  suffixUnit: '',
                }}
                value={price}
                onChangeText={text => setPrice(text)}
                style={styles.priceInput}
              />
            </View>
          </View>
          <View style={styles.cartContainer}>
            <Text style={styles.label}>Inserir no carrinho</Text>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isChecked}
                onValueChange={setIsChecked}
                style={styles.checkbox}
              />
              <Image
                source={{
                  uri: 'https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade.png',
                }}
                style={styles.checkboxImage}
              />
            </View>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Categoria</Text>
          <Picker
            selectedValue={selectedCategory}
            style={styles.picker}
            onValueChange={itemValue => setSelectedCategory(itemValue)}>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Bazar" value="Bazar e Limpeza" />
            <Picker.Item label="Bebidas" value="Bebidas" />
            <Picker.Item label="refeições prontas" value="Refeições Prontas" />
            <Picker.Item label="geladeira" value="Geladeira" />
            <Picker.Item label="frutas, vegetais" value="Frutas, Vegetais" />
            <Picker.Item label="higiene pessoal" value="Higiene Pessoal" />
            <Picker.Item label="importados" value="Importados" />
            <Picker.Item label="mercearia" value="Mercearia" />
            <Picker.Item label="padaria" value="Padaria" />
            <Picker.Item label="saúde e beleza" value="Saúde e Beleza" />
          </Picker>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Observação</Text>
          <TextInput style={styles.input} placeholder="Observação" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Foto</Text>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/485582959/pt/vetorial/rolo-de-m%C3%A3o-sushi-salm%C3%A3o.jpg?s=612x612&w=0&k=20&c=ly0eryHoTx7qS-UH_JeZ13JYu6G1eMvwEbVMAKRh1TQ=',
            }}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00ba00',
    padding: 20,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerButtonText: {
    color: '#ffffff',
    fontSize: 20,
    marginLeft: 5,
  },
  content: {
    padding: 20,
  },
  label: {
    paddingVertical: 5,
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    color: '#000000',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  inputGroup: {
    marginBottom: 35,
  },
  priceContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  priceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  priceInput: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 12,
    height: 40,
    flex: 1,
  },
  cartContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  image: {
    marginTop: 10,
    width: 150,
    height: 150,
    resizeMode: 'cover',
    backgroundColor: '#D3D3D3',
  },
  picker: {
    height: 40,
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#ffffff',
  },
});

export default NovoItemScreen;