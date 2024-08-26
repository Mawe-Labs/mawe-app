// styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
});
