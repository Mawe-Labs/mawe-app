import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
    marginTop: 1,
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  item: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  deleteButton: {
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 8,
    marginLeft: 8,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
