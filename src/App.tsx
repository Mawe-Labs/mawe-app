import React from 'react';
import {SafeAreaView} from 'react-native';
import Newitem from './screens/NewItem/new-item.screen';
import Home from './screens/Home/home.screen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
}

export default App;
