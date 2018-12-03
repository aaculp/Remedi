import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, ImageBackground, ScrollView } from 'react-native'
import { Button, Slider, SearchBar } from 'react-native-elements'

const { width, height } = Dimensions.get('window')

export default function Foods(props) {
  return(
        <View style = {styles.mealContainer}>
          <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1542729049/Remedi/Images/soup.jpg'}} style = {styles.image} />
          <View style = {styles.meals}>
            <Text style = {styles.serving}>{props.foods.name}</Text>
            <Text style = {styles.servingTitle}>{props.foods.description}</Text>
            <Text style = {styles.info}>Calories: 141</Text>
            <Text style = {styles.info}>Sugars: 11</Text>
            <Text style = {styles.info}>Carbs: 23g</Text>
            <View style = {styles.bookmarksContainer}>
              <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543529972/Remedi/Images/iPhone_8_2.png'}} style = {styles.bookmarks1} />
              <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543529947/Remedi/Images/iPhone_8_1.png'}} style = {styles.bookmarks2} />
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    width,
    height,
  },
  logo: {
    height: 75,
    width: 75,
    marginRight: 25,
    marginTop: 35,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 5,
  },
  titleContainer: {
    marginBottom: 40,
    marginTop: 25,
  },
  mealContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  meals: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
  },
  serving: {
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 10,
  },
  servingTitle: {
    color: 'white',
    fontSize: 20
  },
  info: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  bookmarks1: {
    height: 50,
    width: 50,
  },
  bookmarks2: {
    height: 70,
    width: 70,
  },
  bookmarksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 25,
    borderColor: 'darkgreen',
    borderWidth: 5,
  },
})
