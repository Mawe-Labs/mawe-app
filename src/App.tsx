import React from 'react';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
=======
import {SafeAreaView} from 'react-native';
>>>>>>> 068e7a52a7377912b8f00f5abdec3b134989f84b
import Home from './screens/Home/home.screen';
import Products from './screens/Products/products';
import NewItem from './screens/NewItem/new-item.screen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="NewItem" component={NewItem} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
