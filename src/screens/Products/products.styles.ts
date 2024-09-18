import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 16,
  },
  selectedText: {
    fontSize: 18,
  },
  icon: {
    marginLeft: 8,
  },

  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  selectedItem: {
    backgroundColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  productList: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  productName: {
    fontSize: 16,
    flex: 1,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, 
    right: 20, 
    zIndex: 1,  
    width: '100%', 
    alignItems: 'center', 
  },
});

export default styles;
