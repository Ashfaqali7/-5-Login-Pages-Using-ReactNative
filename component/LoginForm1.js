import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import React from 'react';
import styling from './style/style';

// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';

const bgimage = {
  uri: 'https://i.pinimg.com/236x/fe/e5/ea/fee5eab30a698c169dc4fd5752359c2c.jpg',
};
const profileimage = {
  uri: 'https://cdn4.vectorstock.com/i/1000x1000/08/38/avatar-icon-male-user-person-profile-symbol-vector-20910838.jpg',
};
const Loginpage1 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.bgimage}
        source={bgimage}>
        <View style={styles.Boxmain}>
          <Text style={styles.Heading}> My Account</Text>
          <View style={styles.Box2}>
            {/* <Image
              source={require('./assits/profile.jpg')}
              style={(width = 30)}
            /> */}
            <TextInput style={styles.inputs} placeholder="Login"></TextInput>
            <TextInput style={styles.inputs} placeholder="Password"></TextInput>
            <View style={styles.ForgetPass}>
              <Text onPress={() => Linking.openURL('')}>Forget Password ?</Text>
            </View>
            <View style={styles.Button}>
              <Button color="#14cce0" title="Login" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create(styling);

export default Loginpage1;
