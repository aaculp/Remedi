import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default class Splash extends Component {
  render() {
    setTimeout(() => {
      this.props.navigation.navigate('FacebookLogin')
    }, 3000)

    return(
      <ImageBackground
        source={{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543255901/Remedi/Images/Slash_Page.png'}}
        style = {styles.ImageBackground} >
        <View style = {styles.container}>
          <Text style = {styles.text}> REMEDI </Text>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ImageBackground: {
    width,
    height,
  },
})

