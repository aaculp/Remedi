import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput, KeyboardAvoidingView, StatusBar, Dimensions }  from 'react-native'
import { Button } from 'react-native-elements';

const { width, height } = Dimensions.get('window')

export default class SignIn extends Component {
render() {
    return (
      <KeyboardAvoidingView behavior = 'padding' style={styles.container}>
        <StatusBar barStyle = 'light-content'/>
        <Image source = {require('../assets/icon.png')} style={styles.Image} />
          <View style = {styles.formContainer}>
            <TextInput
              placeholder = 'Username'
              placholderTextColor = 'white'
              returnKeyType = 'next'
              ref = {(input) => this.username = input}
              onSubmitEditing = {() => this.passwordInput.focus()}
              keyboardType = 'email-address'
              autoCapitalize = 'none'
              autoCorrect = {false}
              style = {styles.input}
            />
            <TextInput
              placeholder = 'Password'
              placholderTextColor = 'white'
              secureTextEntry
              returnKeyType = 'go'
              ref = {(input) => this.passwordInput = input}
              onSubmitEditing = {() => this.passwordTwo.focus()}
              style = {styles.input}
            />
            <Button
              title = 'LOGIN'
              color = 'pink'
              onPress = {() =>{this.props.navigation.navigate('ProfileSettings')}}
              buttonStyle = {{
                backgroundColor: 'white',
                width: 200,
                height: 50,
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 30,
                marginTop: 150
              }}
            />
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: width,
    paddingVertical: 50,
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
    width: 200,
  },
  image: {
  },
  buttons: {

  }
});
