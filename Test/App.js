/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {
  View, Text
} from 'react-native';
import {MKButton, MKColor} from 'react-native-material-kit';

const App = () => {
  return (
    <View>
      <MKButton 
      backgroundColor={MKColor.Teal}
      shadowRadius={2}
      shadowOffset={{width:0, height:2}}
      shadowOpacity={.7}
      shadowColor="black"
      onPress={() => {
        console.log('hi, raised button!');
      }} >
        <Text>Click Me</Text>
      </MKButton>
    </View>
  );
};



export default App;
