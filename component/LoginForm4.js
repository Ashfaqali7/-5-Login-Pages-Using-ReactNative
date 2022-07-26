import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

import React from 'react';

const LoginForm4 = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#ffff',
          borderRadius: 40,
          width: 100,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            width: 150,
            height: 150,

            // transform: [{rotate: '280deg'}],
          }}
          source={require('./assits/logo1.png')}
        />
      </View>
      <View style={styles.InputBox}>
        <TextInput
          style={styles.inputs}
          placeholder="use name"
          placeholderTextColor="#ffff"></TextInput>
        <TextInput
          style={styles.inputs}
          placeholder="your password"
          placeholderTextColor="#fff"></TextInput>
        <View style={styles.rememberBox}></View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => Linking.openURL('')}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.touch}> Login </Text>
        </TouchableOpacity>

        <Text
          style={styles.forget}
          onPress={() =>
            Linking.openURL('https://www.linkedin.com/in/ashfaqalimazahir/')
          }>
          Forget the Password ?
        </Text>
      </View>
      <Text style={styles.signin}>Sign in</Text>
    </View>
  );
};

export default LoginForm4;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.7,
  },

  inputs: {
    // margin: 15,
    fontSize: 15,
    fontWeight: 'normal',
    borderWidth: 2,

    borderColor: '#2ec4b6',
    color: '#ffff',
    margin: 10,
    borderRadius: 30,
    textAlign: 'center',
    fontSize: 14,
  },
  InputBox: {
    width: '80%',
    // height: '100%',
    justifyContent: 'center',
    // color: '#ffff',

    padding: 10,
    fontSize: 15,
    margin: 50,
  },
  rememberBox: {},
  forget: {
    color: '#2ec4b6',
    margin: 20,
  },
  touch: {
    color: '#ffff',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#F9F2ED',
    padding: 10,
    borderRadius: 20,
    width: 150,
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#e71d36',
    // fontWeight: 20,
    // backgroundColor: '#d8e2dc',
  },
  textBox: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  Text: {
    color: '#fff',
    margin: 10,
  },
  Text1: {
    color: '#2cdb72',

    margin: 10,
  },
  signin: {
    color: '#2ec4b6',
    marginTop: 230,
    fontSize: 20,
    marginBottom: 20,
  },
});
