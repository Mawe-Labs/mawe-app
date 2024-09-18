import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../screens/Products/products';
import NewItemScreen from '../screens/NewItem/new-item.screen';
import Index from '../screens/realm/index'; // Importe a tela Index

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Index"> {/* Defina a tela Index como inicial */}
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="NewItem" component={NewItemScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
