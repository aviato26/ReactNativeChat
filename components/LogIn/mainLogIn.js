
import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const MainLogIn = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");    
/*
    <Button title="Submit" onPress={ () => props.postToServer(userName) } />    
*/
    return(
        <View>
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

            <Button title="Submit" onPress={() => props.changeDashboard('Topics') }/>
        </View>
    )
}

const style = StyleSheet.create({
    textInput: {
        //height: 25,
        width: 200,
        borderWidth: 1
    },

    text:{
        textAlign: 'center'
    }
})

export default MainLogIn;