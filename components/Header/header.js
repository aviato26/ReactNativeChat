
import { React } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Header = () => {
    return(
        <View style={style.header}>
            <Text style={style.text}>Chatter Box</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        position: 'absolute',
        //textAlign: 'center',
        flex: 1,
        justifyContent: 'center',
        top: 0,
        height: '10%',
        width: '100%',
        backgroundColor: '#592466'
    },
    
    text: {
        color: 'white',
        position: 'relative',
        transform: 'translate(-50%, -50%)',
        top: '80%',
        left: '50%',
        textAlign: 'center',
        height: '100%',
        width: '100%',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Header;