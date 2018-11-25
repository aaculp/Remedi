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
              onSubmitEditing = {() => {this.props.navigation.navigate('ProfileSettings')}}
              style = {styles.input}
            />
            <Button
              title = 'LOGIN'
              color = 'pink'
              onPress = {() => {this.props.navigation.navigate('ProfileSettings')}}
              buttonStyle = {{
                backgroundColor: 'white',
                width: 200,
                height: 50,
                borderColor: 'white',
                borderRadius: 30,
                marginTop: 50
              }}
            />
            <Button
              title = 'Need To Create An Account?'
              color = 'white'
              onPress={() =>{this.props.navigation.navigate('FacebookLogin')}}
              buttonStyle = {{
                backgroundColor: 'transparent',
                width: 300,
                height: 50,
                borderColor: 'transparent',
                borderWidth: 1,
                borderRadius: 30,
                marginTop: 50
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
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
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
    height: 200,
    width: 250,
    borderRadius: 25,
  },
  buttons: {

  }
});
