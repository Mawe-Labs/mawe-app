import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home/home.screen';
import NewItemScreen from './screens/NewItem/new-item.screen';
import {faHistory} from '@fortawesome/free-solid-svg-icons/faHistory';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import Lists from './screens/Lists/lists.component';
import { ProductProvider } from './context/product-edited.context';
import { ProductsProvider } from './context/products.context';
import History from './screens/History/history';
import RealmExample from './screens/realm/index';
import CategoriesScreen from './screens/Categorias/categorias';
import CreateCategoriesScreen from './screens/CreateCategories/createCategories.screen';

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <ProductProvider>
      <ProductsProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="HomeStack" screenOptions={{ headerShown: false }}>
            <Drawer.Screen
              name="HomeStack"
              component={Home}
              options={{
                drawerIcon: () => <FontAwesomeIcon icon={faHome} size={25} color="gray" />,
                drawerLabel: 'Início',
              }}
            />
            <Drawer.Screen
              name="ListsStack"
              component={Lists}
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
