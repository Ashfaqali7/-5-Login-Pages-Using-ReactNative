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

const bgimage = {
  uri: 'https://media.istockphoto.com/photos/business-interview-picture-id899019972?k=20&m=899019972&s=612x612&w=0&h=4hSk9urJW2lrmq-iVZssO-XxDYz0nS4RxFXDwhkU8oU=',
};
const LoginForm3 = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: 120,
            height: 120,
            transform: [{rotate: '280deg'}],
          }}
          source={require('./assits/ss.png')}
        />
      </View>
      <View style={styles.InputBox}>
        <TextInput
          style={styles.inputs}
          placeholder="Your mobile number"
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
          style={{alignItems: 'center', justifyContent: 'center'}}
          onFocus={''}>
          <Text style={styles.touch}> Login </Text>
        </TouchableOpacity>

        <Text style={styles.forget} onPress={() => Linking.openURL('')}>
          Forget the Password
        </Text>
      </View>
      <Text style={styles.signin}>Sign in</Text>
    </View>
  );
};

export default LoginForm3;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#804069',
    opacity: 0.7,
  },

  inputs: {
    // margin: 15,
    fontSize: 15,
    fontWeight: 'normal',
    borderBottomWidth: 0.8,
    borderBottomColor: '#ffff',
    color: '#ffff',
    margin: 10,
    textAlign: 'center',
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
    color: '#ffff',
    margin: 20,
  },
  touch: {
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 20,
    width: 200,
    height: 40,
    textAlign: 'center',

    // fontWeight: 20,
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
    color: '#fff',
    marginTop: 230,
  },
});
