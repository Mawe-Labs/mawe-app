import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../screens/Products/products';
import NewItemScreen from '../screens/NewItem/new-item.screen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="NewItem" component={NewItemScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
