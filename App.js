import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MainLogIn from './components/LogIn/mainLogIn.js';
import MainTopic from './components/Topics/mainTopic.js';
import MainChatRoom from './components/ChatRooms/mainChatRoom.js';
import testData from './TestData/chatData.js'
import Header from './components/Header/header.js';
import config from './config.js';

export default function App() {

  const serverCall = (postToServer) => {
    fetch(config.localhost, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: postToServer })
    })
    .then(data => data.json())
    .then(data => {
      if(data.data === 'accepted'){
        changeDashboard('Topics')
      }
    })
    .catch(err => console.log(err))
  }

//      { dashboard === 'Home' && <MainLogIn postToServer={serverCall} /> }
  const [ dashboard, changeDashboard ] = useState('Home');

  return (
    <View style={style.mainContainer}>
      <Header />
      <View style={style.componentContainer}>
        { dashboard === 'Home' && <MainLogIn changeDashboard={changeDashboard} serverCall={serverCall}/> }
        { dashboard === 'Topics' && <MainTopic changeDashboard={changeDashboard} /> }      
        { dashboard === 'ChatRoom' && <MainChatRoom data={testData} serverCall={serverCall} /> }      
      </View>      
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    //paddingBottom: 100
  },

  componentContainer: {
    width: '90%'
  }

})
