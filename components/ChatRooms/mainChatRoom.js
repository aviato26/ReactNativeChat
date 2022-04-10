

import { React, useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';

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
        </View>
    )
}

const style = StyleSheet.create({

    text:{
        textAlign: 'center'
    },

    container:{
        borderWidth: 1
    }
})

export default MainChatRoom;