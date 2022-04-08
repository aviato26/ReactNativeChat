import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MainLogIn from './components/LogIn/mainLogIn.js';
import config from './config.js';

export default function App() {

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

  return (
    <View style={styles.container}>
      <MainLogIn postToServer={serverCall} />
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
