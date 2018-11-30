import React, { Component } from 'react'
import { StyleSheet, View, Image, ImageBackground, Dimensions } from 'react-native';

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
        <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543529632/Remedi/Images/iPhone_8.png'}} style = {styles.image} />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  image: {
    height: 375,
    width: 375,
  },
  text: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

