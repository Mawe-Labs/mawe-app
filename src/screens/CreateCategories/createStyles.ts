// createStyles.tsx
import { StyleSheet } from 'react-native';

const createStyles = () => StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#12824F',
    padding: 12,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    margin: 10,
    fontSize: 14,
  },
});

export default createStyles;
