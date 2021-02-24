import React from 'react';
import { View, Text } from 'react-native';
import Need from './src/NEED/Need'

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HELLO!!!!</Text>
      <Need />
    </View>
  );
};

export default App;
