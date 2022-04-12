
import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const MainLogIn = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");    

    return(
        <View style={style.container} >
            <Text style={style.text} >Enter User Name:</Text>
            <TextInput 
                style={style.textInput}
                onChangeText={ setUserName }
                value={userName}
            />
            
            <Text>name: {userName}</Text>
            
            <Text style={style.text} >Enter Password:</Text>

            <TextInput 
                style={style.textInput}
                onChangeText={ setPassword }
                value={password}
            />
            <Text>password: {password}</Text>

            <Button title="Submit" onPress={() => props.serverCall({name: userName, password: password}) }/>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width: '80%',
        margin: 'auto'        
    },

    textInput: {
        width: '100%',
        height: 30,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        margin: 'auto'
    },

    text:{
        textAlign: 'center'
    }
})

export default MainLogIn;