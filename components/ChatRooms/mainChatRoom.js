

import { React, useState } from 'react';
import { StyleSheet, View, Button, SectionList, FlatList, Text, TextInput } from 'react-native';
import ChatInput from './chatInput.js';
import ISOToShortDate from '../../HelperFunctions/ISOToShortDate.js';

const MainChatRoom = (props) => {
    //console.log(props.data)

    return(
        <View style={style.container}>
            <SectionList 
                sections = { props.data }
                renderItem = { ( { item } ) => {
                    return(
                        <View style={style.textContainer}>
                            <Text style = { style.userName }> { item.name } </Text>
                            <Text> { item.description } </Text>
                        </View>    
                    )
                 }
                }
                renderSectionHeader = { ( { section } ) => (
                    <View style = { style.sectionHeaderContainer }>
                        <Text style = {style.sectionHeader}>{ ISOToShortDate(section.date) }</Text>
                    </View>
                ) }
                keyExtractor = {(item, key) => key}
            />

            <ChatInput serverCall={props.serverCall} />
        </View>
    )
}

const style = StyleSheet.create({

    text: {
        textAlign: 'center'
    },

    item: {
        fontSize: 12
    },

    textInput: {
        width: 200,
        borderWidth: 1
    },

    userName: {
        fontWeight: 'bold'
    },

    sectionHeaderContainer: {
        textAlign: 'center'
    },

    sectionHeader: {
        marginBottom: 5,
        marginTop: 5,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        textAlign: 'center'
    },

    textContainer: {
        marginBottom: 5,
        marginTop: 5
    },

    container: {
        width: '100%'
    }
})

export default MainChatRoom;