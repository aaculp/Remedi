import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, ImageBackground, ScrollView } from 'react-native'
import { Button, Slider, SearchBar } from 'react-native-elements'

const { width, height } = Dimensions.get('window')

export default class Results extends Component {
  state = {
    name: '',
  }

  // componentWillMount() {
  //   let id = this.props.navigation.getParam('name')
  //   console.log('this is in component will mount on RESULTS', name)
  //   this.setState({name: name})
  // }

  handleSubmit() {
    console.log('working!')
  }


  render() {
    return(
      <ImageBackground
      source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543255899/Remedi/Images/Begin_My_Search_Filled_In.png'}}
      style = {styles.ImageBackground}
      >

      <StatusBar barStyle = 'light-content' />
        <View style = {styles.header}>
          <Button
            leftIcon = {{name: 'chevron-left', type: 'font-awesome', size: 50, marginTop: 35}}
            color = 'white'
            onPress = {() => this.props.navigation.navigate('Restrictions')}
            buttonStyle = {{
              marginTop: 50,
              width: 50,
              backgroundColor: 'transparent',
            }}
          />
        <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543529632/Remedi/Images/iPhone_8.png'}} style = {styles.logo} />
      </View>

      <View style = {styles.container}>
        <View style = {styles.titleContainer}>
          <Text style = {styles.title}> What CAN WE SERVE YOU</Text>
          <SearchBar
            placeholder = 'Search'
            placeholderTextColor = 'darkgreen'
            round
            lightTheme
            containerStyle = {{
              marginTop: 10,
              marginHorizontal: 50,
              borderRadius: 20,
            }}
          />
        </View>
      <ScrollView>
        <View style = {styles.mealContainer}>
          <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1542729049/Remedi/Images/soup.jpg'}} style = {styles.image} />
          <View style = {styles.meals}>
            <Text style = {styles.serving}>Serving Size: 1 ball</Text>
            <Text style = {styles.servingTitle}>Oatmeal Energy Ball</Text>
            <Text style = {styles.info}>Calories: 141</Text>
            <Text style = {styles.info}>Sugars: 11</Text>
            <Text style = {styles.info}>Carbs: 23g</Text>
            <View style = {styles.bookmarksContainer}>
              <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543529972/Remedi/Images/iPhone_8_2.png'}} style = {styles.bookmarks1} />
              <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543529947/Remedi/Images/iPhone_8_1.png'}} style = {styles.bookmarks2} />
            </View>
          </View>
        </View>

        <View style = {styles.mealContainer}>
          <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1542729049/Remedi/Images/soup.jpg'}} style = {styles.image}/>
          <View style = {styles.meals}>
            <Text style = {styles.serving}>Serving Size: 1 Shot</Text>
            <Text style = {styles.servingTitle}>Wellness Energy Shot</Text>
            <Text style = {styles.info}>Calories: 141</Text>
            <Text style = {styles.info}>Sugars: 11</Text>
            <Text style = {styles.info}>Carbs: 23g</Text>
            <View style = {styles.bookmarksContainer}>
              <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543529972/Remedi/Images/iPhone_8_2.png'}} style = {styles.bookmarks1} />
              <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543529947/Remedi/Images/iPhone_8_1.png'}} style = {styles.bookmarks2} />
            </View>
          </View>
        </View>

        <View style = {styles.mealContainer}>
          <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1542729049/Remedi/Images/soup.jpg'}} style = {styles.image} />
          <View style = {styles.meals}>
            <Text style = {styles.serving}>Serving Size: 1 bowl</Text>
            <Text style = {styles.servingTitle}>Acai Oat Bowl</Text>
            <Text style = {styles.info}>Calories: 249</Text>
            <Text style = {styles.info}>Sugars: 52</Text>
            <Text style = {styles.info}>Carbs: 70</Text>
            <View style = {styles.bookmarksContainer}>
              <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543529972/Remedi/Images/iPhone_8_2.png'}} style = {styles.bookmarks1}/>
              <Image source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543529947/Remedi/Images/iPhone_8_1.png'}} style = {styles.bookmarks2}/>
            </View>
          </View>
        </View>
      </ScrollView>

      <View>
        <Button
          title = 'Search'
          rounded = {true}
          onPress = {() => this.handleSubmit()}
          buttonStyle = {{
            backgroundColor: 'darkgreen',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 25,
          }}
        />
      </View>

      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  ImageBackground: {
    flex: 1,
    width,
    height,
  }
})

633116164304015
