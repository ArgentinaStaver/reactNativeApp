import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './AboutStyle';

const Item = (() => {
    return(
        <View style={styles.Container}>
             
           <View>
            <Text style={styles.itemText}>Nume</Text>    
            <Text style={styles.itemSmallText}>salariu</Text>
            <Text style={styles.itemSmallText}>varsta</Text>
          </View>      
           
        </View>
    );
});

export default Item;