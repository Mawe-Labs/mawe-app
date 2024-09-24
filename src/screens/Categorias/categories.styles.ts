import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    marginTop: 16,
    paddingBottom: 16,
  },
  categoryItem: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    flex: 1,
  },
  deleteButton: {
    marginLeft: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});

export default styles;
