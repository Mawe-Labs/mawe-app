import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home/home.screen';
import NewItemScreen from './screens/NewItem/new-item.screen';
import {faHistory} from '@fortawesome/free-solid-svg-icons/faHistory';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import Lists from './screens/Lists/lists.component';
import NewList from './screens/NewList/new-list.screen';
import EditItem from './screens/EditItem/edit-item.screen';
import { ProductProvider } from './context/product-edited.context';
import { ProductsProvider } from './context/products.context';
import Products from './screens/Products/products.screen';
import History from './screens/History/history';
import RealmExample from './screens/realm/index';
import Index from './screens/realm/index';
import CategoriesScreen from './screens/Categorias/categorias';
import CreateCategoriesScreen from './screens/CreateCategories/createCategories.screen'; // Nova importação

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CreateCategories" component={CreateCategoriesScreen} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Banco de dados" component={Index} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewItem" component={NewItemScreen} />
      <Stack.Screen name="EditItem" component={EditItem} />
    </Stack.Navigator>
  );
}

function ListsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Lists" component={Lists} />
      <Stack.Screen name="NewList" component={NewList} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <ProductProvider>
      <ProductsProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="HomeStack" screenOptions={{ headerShown: false }}>
            <Drawer.Screen
              name="HomeStack"
              component={HomeStack}
              options={{
                drawerIcon: () => <FontAwesomeIcon icon={faHome} size={25} color="gray" />,
                drawerLabel: 'Início',
              }}
            />
            <Drawer.Screen
              name="ListsStack"
              component={ListsStack}
              options={{
                drawerIcon: () => <FontAwesomeIcon icon={faList} size={25} color="gray" />,
                drawerLabel: 'Suas listas',
              }}
            />
            <Drawer.Screen
              name="History"
              component={History}
              options={{
                drawerIcon: () => (
                  <FontAwesomeIcon icon={faHistory} size={25} color="gray" />
                ),
                drawerLabel: 'Hisórico de Compras',
              }}
            />
            <Drawer.Screen
              name="NewItem"
              component={NewItemScreen}
              options={{
                drawerItemStyle: {display: 'none'},
              }}
            />
            <Drawer.Screen
              name="Products"
              component={Products}
              name="RealmExample"
              component={RealmExample}

              options={{
                drawerLabel: 'Banco de Dados (Realm)',
                drawerIcon: () => <FontAwesomeIcon icon={faList} size={25} color="gray" />,
              }}
            />
            <Drawer.Screen
              name="Categories"
              component={CategoriesScreen}
              options={{
                drawerLabel: 'Categorias',
                drawerIcon: () => <FontAwesomeIcon icon={faList} size={25} color="gray" />,
              }}
            />
            <Drawer.Screen
              name="CreateCategories"
              component={CreateCategoriesScreen}
              options={{
                drawerLabel: 'Criar Categoria',
                drawerIcon: () => <FontAwesomeIcon icon={faList} size={25} color="gray" />,
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </ProductsProvider>
    </ProductProvider>
  );
}

export default App;
