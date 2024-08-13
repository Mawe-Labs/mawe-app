import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Title} from './App';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Title>Olá, MaweApp!</Title>
      </View>
    </SafeAreaView>
  );
}

export default App;
