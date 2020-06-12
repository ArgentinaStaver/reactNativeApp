import React from 'react';
import { Text, View } from 'react-native';
import Menu from './components/Menu';
import About from './components/About';
import styles from './AppStyle';

export default function App() {
  return (
    <View style={styles.container}>
       <Menu />
       <About />    
    </View>
  );
}
