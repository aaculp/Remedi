import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, StatusBar, Dimensions } from  'react-native'
import { Button } from 'react-native-elements';


const { width, height } = Dimensions.get('window')

export default class ProfileSettings extends Component {
  render() {
    return(
      <View style = {styles.container}>
        <StatusBar barStyle = 'light-content'/>
        <Image source = {require('../assets/icon.png')} style={styles.Image} />
        <Text style = {styles.name}> Welcome Lily </Text>
        <Button
          title = 'Favorites'
          color = 'white'
          rightIcon = {{name: 'chevron-right', type: 'font-awesome'}}
          onPress = {() => {this.props.navigation.navigate('')}}
          buttonStyle = {{
            backgroundColor: 'transparent',
            width: 250,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 10
          }}
        />
        <Button
          title = 'History'
          color = 'white'
          rightIcon = {{name: 'chevron-right', type: 'font-awesome'}}
          onPress = {() => {this.props.navigation.navigate('')}}
          buttonStyle = {{
            backgroundColor: 'transparent',
            width: 250,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 10
          }}
        />
        <Button
          title = 'Dietary Restrictions'
          color = 'white'
          rightIcon = {{name: 'chevron-right', type: 'font-awesome'}}
          onPress = {() => {this.props.navigation.navigate('Restrictions')}}
          buttonStyle = {{
            backgroundColor: 'transparent',
            width: 250,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 10
          }}
        />
        <Button
          title = 'Dietary Goals'
          color = 'white'
          rightIcon = {{name: 'chevron-right', type: 'font-awesome'}}
          onPress = {() => {this.props.navigation.navigate('')}}
          buttonStyle = {{
            backgroundColor: 'transparent',
            width: 250,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 10
          }}
        />
        <Button
          title = 'Account Settings'
          color = 'white'
          rightIcon = {{name: 'chevron-right', type: 'font-awesome'}}
          onPress = {() => {this.props.navigation.navigate('')}}
          buttonStyle = {{
            backgroundColor: 'transparent',
            width: 250,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 10
          }}
        />
        <Button
          title = 'Contact Us'
          color = 'white'
          rightIcon = {{name: 'chevron-right', type: 'font-awesome'}}
          onPress = {() => {this.props.navigation.navigate('')}}
          buttonStyle = {{
            backgroundColor: 'transparent',
            width: 250,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 10
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width,
    height,
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',

  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    textAlign: 'center',
    marginVertical: 5,
    paddingVertical: 20,
    borderRadius: 55,
    width: 200,
  },
  Image: {
    height: 200,
    width: 250,
    borderRadius: 25,
    marginBottom: 75,
  }
})
