import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, ImageBackground, ScrollView } from 'react-native'
import { Button, Slider, SearchBar } from 'react-native-elements'
import HeaderLogo from './HeaderLogo'
import axios from 'axios'
import Foods from './Foods'


const { width, height } = Dimensions.get('window')

export default class Results extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'darkgreen',
      height: 65,
    },
    headerRight: <HeaderLogo />,
  }

  state = {
    foods: '',
    dataLoaded: '',
  }

  componentWillMount() {
    let foods = this.props.navigation.getParam('apiData')
    let dataLoaded = this.props.navigation.getParam('apiDataLoaded')
    this.setState({
      foods: foods,
      dataLoaded: dataLoaded,
    })
    console.log('RESULTS page', this.state.foods)
    console.log('RESULTS page',this.state.dataLoaded)
  }

  componentDidMount() {
    if(this.state.dataLoaded) {
      return this.state.foods.map(d => {
        return (
          <Foods foods = {d} key = {d.id}/>
          )
      })
    } else return <Text style = {styles.loading}>Loading...</Text>
  }

  handleSubmit() {

  }


  render() {
    return(
      <ImageBackground
      source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543255899/Remedi/Images/Begin_My_Search_Filled_In.png'}}
      style = {styles.ImageBackground}
      >

      <StatusBar barStyle = 'light-content' />

        <View style = {styles.titleContainer}>
          <Text style = {styles.title}> WHAT CAN WE SERVE YOU</Text>
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
        {this.componentDidMount()}
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

      </ImageBackground>
    )
  }
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
  loading: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  }
})
