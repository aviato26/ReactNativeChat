

import { React, useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const MainTopic = () => {

    return(
        <View>
            <Button title="Technology" />
            <Button title="Sports" />
            <Button title="Home Repair" />                        
        </View>
    )
}

const style = StyleSheet.create({

    text:{
        textAlign: 'center'
    }
})

export default MainTopic;