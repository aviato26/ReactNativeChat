
import { React, useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

const ChatInput = () => {
    return(
        <View>
            <TextInput style={styles.textInput} />
            <Button title="Send">
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1
    }
})

export default ChatInput;