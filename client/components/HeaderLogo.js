import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'

export default class HeaderLogo extends Component {
  render() {
    return (
      <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543529632/Remedi/Images/iPhone_8.png'}} style = {styles.logo} />
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 75,
    width: 75,
    marginRight: 10,
  }
})
