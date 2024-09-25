import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './screens/Categories/categories';
import InputScreen from './screens/CreateCategories/create'; 
import Home from './screens/Home/home.screen';
import NewItemScreen from './screens/NewItem/new-item.screen';
import NewList from './screens/NewList/new-list.screen';
import Products from './screens/Products/products';
import Index from './screens/realm/index';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="NewItemScreen" component={NewItemScreen} />
      <Stack.Screen name="InputScreen" component={InputScreen} />
      <Stack.Screen name="NewList" component={NewList} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MainStack"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen
          name="MainStack"
          component={MainStack}
          options={{
            drawerLabel: 'Início',
            drawerItemStyle: { display: 'none' },
          }}
        />
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            drawerLabel: 'Categorias',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
