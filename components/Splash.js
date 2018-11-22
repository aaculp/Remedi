import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';


export default class Splash extends Component {
  state = {
    currentScreen: 'Splash'
  }

  render() {

    setTimeout(() => {
      this.props.navigation.navigate('FacebookLogin')
    }, 300)

    return(
      <View style = {styles.container}>
        <Text style = {styles.text}> Remedi </Text>
        <Image source = {require('../assets/icon.png')} style={styles.Image} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  }
})
