import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';

export default function App() {
  return (
    <View>
      <Header backgroundColor={'#03e9f4'} 
          centerComponent={{text:'Dictionary App', style:{color:'white', fontSize:22, fontWeight: 'bold'}}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
