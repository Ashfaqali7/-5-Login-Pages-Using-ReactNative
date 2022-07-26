import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking,
  Button,
} from 'react-native';

import React from 'react';

const bgimage = {
  uri: 'https://media.istockphoto.com/photos/business-interview-picture-id899019972?k=20&m=899019972&s=612x612&w=0&h=4hSk9urJW2lrmq-iVZssO-XxDYz0nS4RxFXDwhkU8oU=',
};
const Loginpage2 = () => {
  return (
    <ImageBackground
      source={bgimage}
      resizeMode="stretch"
      style={styles.ImageBackground}>
      <View style={styles.container}>
        {/* <Text> hello </Text>
         */}
        <View style={styles.InputBox}>
          <TextInput
            style={styles.inputs}
            placeholder="User Name"
            placeholderTextColor="#ffff"></TextInput>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            placeholderTextColor="#fff"></TextInput>
        </View>
        <View style={styles.rememberBox}>
          <Text style={styles.forget} onPress={() => Linking.openURL('')}>
            Forget Password
          </Text>
        </View>
        <View style={styles.Button}>
          <Button
            title="LOG IN"
            onPress={() => {
              Linking.openURL('');
            }}
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.Text}>Don't have an account ?</Text>
          <Text
            onPress={() => {
              Linking.openURL('');
            }}
            style={styles.Text1}>
            SignUp now
          </Text>
        </View>
        <Text style={styles.Text}>Or</Text>
        <Text style={styles.Text}>Login with</Text>
      </View>
    </ImageBackground>
  );
};

export default Loginpage2;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.7,
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  inputs: {
    // margin: 15,
    fontSize: 15,
    fontWeight: 'normal',
    borderBottomWidth: 1.5,
    borderBottomColor: '#ffff',
    color: '#ffff',
    margin: 10,
  },
  InputBox: {
    width: '80%',
    // height: '100%',
    justifyContent: 'center',
    // color: '#ffff',

    padding: 10,
    fontSize: 15,
  },
  rememberBox: {},
  forget: {
    color: '#ffff',
    marginLeft: 100,
    marginTop: 30,
  },
  Button: {
    margin: 20,
    width: 250,
    fontWeight: 'bold',
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
});
