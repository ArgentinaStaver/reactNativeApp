import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './AboutStyle';

const About = (() => {
    return(
        <View style={styles.itemContainer}> 
           <View>
            <Text style={styles.itemText}>is simply dummy text</Text>    
            <Text style={styles.itemSmallText}>(x lorem lorem)</Text>
          </View>

            <View style={styles.button}>
               <Button title="Go to" onPress={() =>{}}/>  
            </View>     
           
        </View>
    );
});

export default About;