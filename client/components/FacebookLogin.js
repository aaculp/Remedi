import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, StatusBar, Dimensions, KeyboardAvoidingView, ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';
import * as Expo from 'expo'
import axios from 'axios'

const { width, height } = Dimensions.get('window')

export default class FacebookLogin extends React.Component {
  state = {
    name: '',
    username: '',
    password: '',
    newId: '',
    profilename: '',
  }

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

  handleSignUp = async (e) => {
    e.preventDefault()
    let results = await axios.post('http://172.20.10.2:3001/remedi/', {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password
    })
    console.log(results.data.data)

    this.setState({ newId: results.data.data.id, profilename: results.data.data.name })

    let id = this.state.newId
    let profileName = this.state.profilename

    this.props.navigation.navigate('Restrictions', { newId: id, profilename: profileName })
  }

  render() {
    return (
      <KeyboardAvoidingView  behavior = 'padding' style={styles.container}>
        <StatusBar barStyle = 'light-content' />
        <ImageBackground
        source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543255900/Remedi/Images/Sign_Up.png'}}
        style = {styles.ImageBackground}
        >

        <View style = {styles.heading}>
          <Text style = {styles.headingTitle}> REMEDI </Text>
          <Text style = {styles.headingBio}> We provide natural cures for </Text>
          <Text style = {styles.headingBio}> natural causes </Text>
        </View>

          <View style = {styles.formContainer}>
            <TextInput
              value = {this.state.name}
              placeholder = 'Name'
              placeholderTextColor = 'white'
              returnKeyType = 'next'
              onSubmitEditing = {() => this.username.focus()}
              onChangeText= {(name) => this.setState({name})}
              autoCapitalize = 'words'
              autoCorrect = {false}
              style = {styles.input}
            />
            <TextInput
              value = {this.state.username}
              placeholder = 'Username'
              placeholderTextColor = 'white'
              returnKeyType = 'next'
              ref = {(input) => this.username = input}
              onSubmitEditing = {() => this.passwordInput.focus()}
              onChangeText={(username) => this.setState({username})}
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
              onChangeText={(password) => this.setState({password})}
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
              color = 'white'
              onPress={(e) =>{this.handleSignUp(e)}}
              buttonStyle = {{
                backgroundColor: 'darkgreen',
                width: 200,
                height: 50,
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
                borderRadius: 30,
                marginTop: 25
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
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heading: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  headingTitle: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  headingBio: {
    paddingHorizontal: 25,
    fontSize: 25,
    color: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    marginTop: 100,
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
  buttons: {
    fontWeight: 'bold',
    marginTop: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBackground: {
    width,
    height,
  },
});
