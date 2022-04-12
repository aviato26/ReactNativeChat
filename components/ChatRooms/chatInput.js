
import { React, useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

const ChatInput = (props) => {

    const [reply, updateReply] = useState('');

    return(
        <View style={style.componentContainer}>
            <TextInput style={style.textInput} onChangeText={updateReply} value={reply} />
            <Button style={style.subButton} title="Send" onPress={() => {
                    props.serverCall(reply);

                    // calling updateReply to set reply state back to an empty string
                    updateReply('');
                }
            }></Button>
        </View>
    )
}

const style = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        height: 25,
        width: '80%'
    },

    subButton: {

    },

    componentContainer: {
        flex: 3.3,
        flexDirection: 'row'
    }
})

export default ChatInput;