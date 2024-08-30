import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home/home.screen';
import NewItemScreen from './screens/NewItem/new-item.screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: () => (
              <FontAwesomeIcon icon={faHome} size={20} color="gray" />
            ),
          }}
        />
        <Drawer.Screen
          name="NewItem"
          component={NewItemScreen}
          options={{
            drawerLabel: 'Novo item',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
