/**
 * if you want to create a RN app with typescript type:
 * npx react-native init MyApp --template react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';
import Login from './components/Login/Login';


const App = () => {
  
  return (
    <View style={ {
        backgroundColor: 'red',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    } } >
      <Login />
      {/* <View style={{ flexDirection: 'row' }}>
        <Text>Hello</Text>  
        <Text>World</Text>  
      </View>         */}
    </View>    
  );

};


export default App;
