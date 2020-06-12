import React from 'react';
import { View, Text } from 'react-native';
import styles from './MenuStyle';

const Menu = (() => {
    return(
        <View style={styles.menuContainer}>
            <Text style={styles.menuText}>Lorem Ipsum</Text>          
        </View>
    );
});

export default Menu;