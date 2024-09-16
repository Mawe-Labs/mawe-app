import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home/home.screen';
import NewItemScreen from './screens/NewItem/new-item.screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faList} from '@fortawesome/free-solid-svg-icons/faList';
import {faHistory} from '@fortawesome/free-solid-svg-icons/faHistory';
import Lists from './screens/Lists/lists.component';
import NewList from './screens/NewList/new-list.screen';
import EditItem from './screens/EditItem/edit-item.screen';
import {ProductProvider} from './context/product-edited.context';
import {ProductsProvider} from './context/products.context';
import Products from './screens/Products/products.screen';
import History from './screens/History/history';

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <ProductProvider>
      <ProductsProvider>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Drawer.Screen
              name="Home"
              component={Home}
              options={{
                drawerIcon: () => (
                  <FontAwesomeIcon icon={faHome} size={25} color="gray" />
                ),
              }}
            />
            <Drawer.Screen
              name="Lists"
              component={Lists}
              options={{
                drawerIcon: () => (
                  <FontAwesomeIcon icon={faList} size={25} color="gray" />
                ),
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
              options={{
                drawerItemStyle: {display: 'none'},
              }}
            />
            <Drawer.Screen
              name="NewList"
              component={NewList}
              options={{
                drawerItemStyle: {display: 'none'},
              }}
            />
            <Drawer.Screen
              name="EditItem"
              component={EditItem}
              options={{
                drawerItemStyle: {display: 'none'},
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </ProductsProvider>
    </ProductProvider>
  );
}

export default App;
