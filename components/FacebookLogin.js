import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, StatusBar, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import * as Expo from 'expo'

const { width, height } = Dimensions.get('window')

export default class FacebookLogin extends React.Component {
  logIn = async () => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Expo.Facebook.logInWithReadPermissionsAsync("189386285344595", {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        setTimeout(() => {
          this.props.navigation.navigate('ProfileSettings')
        }, 100)
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView  behavior = 'padding' style={styles.container}>
        <StatusBar barStyle = 'light-content'/>
        <View style = {styles.formContainer}>
        <Image source = {require('../assets/icon.png')} style={styles.Image} />
        </View>
          <View style = {styles.formContainer}>
            <TextInput
              placeholder = 'Name'
              placeholderTextColor = 'white'
              returnKeyType = 'next'
              onSubmitEditing = {() => this.username.focus()}
              autoCapitalize = 'words'
              autoCorrect = {false}
              style = {styles.input}
            />
            <TextInput
              placeholder = 'Username'
              placeholderTextColor = 'white'
              returnKeyType = 'next'
              ref = {(input) => this.username = input}
              onSubmitEditing = {() => this.passwordInput.focus()}
              autoCapitalize = 'none'
              autoCorrect = {false}
              style = {styles.input}
            />
            <TextInput
              placeholder = 'Password'
              placeholderTextColor = 'white'
              secureTextEntry
              returnKeyType = 'go'
              ref = {(input) => this.passwordInput = input}
              style = {styles.input}
            />
            <Button
              title = 'Already have an account?'
              color = 'white'
              onPress={() =>{this.props.navigation.navigate('SignIn')}}
              buttonStyle = {{
                backgroundColor: 'transparent',
                width: 300,
                height: 50,
                borderColor: 'transparent',
                borderWidth: 1,
                borderRadius: 30,
                marginTop: 10
              }}
            />
          </View>

          <View style = {styles.buttons}>
            <Button
              title = 'Sign Up!'
              color = 'pink'
              onPress={() =>{this.props.navigation.navigate('ProfileSettings')}}
              buttonStyle = {{
                backgroundColor: 'white',
                width: 200,
                height: 50,
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 30,
              }}
            />
            <Button
              title = 'Facebook Login'
              color = 'white'
              onPress = {this.logIn}
              buttonStyle = {{
                backgroundColor: 'blue',
                width: 200,
                height: 50,
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 30,
                marginTop: 25
              }}
            />
          </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formContainer: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    marginTop: 25,
  },
  title: {
    flex: 1,
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'white',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    textAlign: 'center',
    marginVertical: 5,
    paddingVertical: 20,
    borderRadius: 55,
    width: 325,
  },
  Image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 250,
    borderRadius: 25,
    marginTop: 50
  },
  buttons: {
    fontWeight: 'bold',
    marginTop: 75,
  }
});
