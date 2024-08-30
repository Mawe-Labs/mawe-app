import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home/home.screen';
import NewItemScreen from './screens/NewItem/new-item.screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faList} from '@fortawesome/free-solid-svg-icons/faList';
import Lists from './screens/Lists/lists.component';

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
            drawerLabel: 'Suas listas'
          }}
        />
        <Drawer.Screen
          name="NewItem"
          component={NewItemScreen}
          options={{
            drawerItemStyle: {display: 'none'},
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
