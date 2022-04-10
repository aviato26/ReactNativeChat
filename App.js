import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MainLogIn from './components/LogIn/mainLogIn.js';
import MainTopic from './components/Topics/mainTopic.js';
import MainChatRoom from './components/ChatRooms/mainChatRoom.js';
//import config from './config.js';

export default function App() {
/*
  const serverCall = (postToServer) => {
    fetch(config.localhost, 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: postToServer })
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
*/
//      { dashboard === 'Home' && <MainLogIn postToServer={serverCall} /> }
  const [ dashboard, changeDashboard ] = useState('ChatRoom');

  return (
    <View style={styles.container}>
      { dashboard === 'Home' && <MainLogIn changeDashboard={changeDashboard} /> }
      { dashboard === 'Topics' && <MainTopic /> }      
      { dashboard === 'ChatRoom' && <MainChatRoom /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
