import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, StatusBar, Dimensions, ImageBackground }  from 'react-native'
import { Button } from 'react-native-elements';

const { width, height } = Dimensions.get('window')

export default class SignIn extends Component {
  state = {
    username: '',
    password: '',
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.username)
    console.log(this.state.password)
    this.props.navigation.navigate('ProfileSettings')

  }
  render() {
    return (
      <KeyboardAvoidingView behavior = 'padding' style={styles.container}>
        <StatusBar barStyle = 'light-content'/>
        <ImageBackground
        source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543255900/Remedi/Images/Sign_Up.png'}}
        style = {styles.ImageBackground}
        >

        <Text style = {styles.headingTitle}> REMEDI </Text>
          <View style = {styles.formContainer}>
            <TextInput
              value = {this.state.username}
              placeholder = 'Username'
              placeholderTextColor = 'white'
              returnKeyType = 'next'
              ref = {(input) => this.username = input}
              onSubmitEditing = {() => this.passwordInput.focus()}
              onChangeText = {(username) => this.setState({username})}
              keyboardType = 'email-address'
              autoCapitalize = 'none'
              autoCorrect = {false}
              style = {styles.input}
            />
            <TextInput
              value = {this.state.password}
              placeholder = 'Password'
              placeholderTextColor = 'white'
              secureTextEntry
              returnKeyType = 'go'
              ref = {(input) => this.passwordInput = input}
              onChangeText = {(password) => this.setState({password})}
              style = {styles.input}
            />
            <Button
              title = 'LOGIN'
              color = 'white'
              onPress = {(e) => {this.handleSubmit(e)}}
              buttonStyle = {{
                backgroundColor: 'darkgreen',
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
        </ImageBackground>
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
  headingTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 75,
    textAlign: 'center',
    marginTop: 150,
    marginBottom: 50,
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
  ImageBackground: {
    width,
    height,
  },
});
