

import { React, useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text, TextInput } from 'react-native';
import ChatInput from './chatInput.js';

const MainChatRoom = () => {

    return(
        <View style={style.container}>
            <FlatList 
                data={
                    [
                        {
                            name: 'ted',
                            time: new Date(),
                            description: 'testing text'
                        },
                        {
                            name: 'shed',
                            time: new Date(),
                            description: 'testing text'
                        },
                        {
                            name: 'al',
                            time: new Date(),
                            description: 'testing text'
                        }                                                
                    ]
                }
                renderItem={({item}) => 
                <Text>{item.name}</Text>                             
            }
            />

            <ChatInput />
        </View>
    )
}

const style = StyleSheet.create({

    text:{
        textAlign: 'center'
    },

    textInput: {
        //height: 25,
        width: 200,
        borderWidth: 1
    },

    container:{
        borderWidth: 1
    }
})

export default MainChatRoom;