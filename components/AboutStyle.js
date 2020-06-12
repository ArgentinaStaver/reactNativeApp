import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemContainer: { 
        width: '40%',
        height: '250px',       
        backgroundColor: 'yellow',        
        borderRadius: '10px', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingLeft: '20px',
        paddingRight: '20px',
        marginTop: '25px', 
      },
      itemText: {
        fontSize: '16px',
        color: 'black',
        marginTop: '100px'
    },
    itemSmallText: {

    },
    button: {
        width: '50px',
        marginTop: '100px',
    },
});

export default styles;