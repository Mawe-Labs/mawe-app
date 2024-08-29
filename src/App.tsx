import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home/home.screen';
import Products from './screens/Products/products';
import NewItem from './screens/NewItem/new-item.screen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Oculta o header para todas as telas
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="NewItem" component={NewItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
