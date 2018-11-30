import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, StatusBar, ImageBackground } from 'react-native'
import { Button, Slider } from 'react-native-elements'
import HeaderLogo from './HeaderLogo'
import axios from 'axios'


const { width, height } = Dimensions.get('window')

export default class Search extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'darkgreen',
      height: 65,
    },
    headerRight: <HeaderLogo />,
  }

  state = {
    value: 2.5,
    breakfast: false,
    lunch: false,
    dinner: false,
    headache: false,
    fatigue: false,
    anxious: false,
    stomacheache: false,
    alert: false,
    lowEnergy: false,
    bloated: false,
    lethargic: false,
    id: '',
    name: '',
  }

  componentWillMount(){
    let id = this.props.navigation.getParam('id')
    let name = this.props.navigation.getParam('profilename')
    console.log('this is in component will mount on SEARCH', id)
    console.log('this is in component will mount on SEARCH', name)
    this.setState({
      id: id,
      name: name,
    })
  }

  handleSubmit = async () => {
    console.log(this.state.id)
    let results = await axios.put(`http://173.2.6.21:3001/remedi/feelings/${this.state.id}`, {
      breakfast: this.state.breakfast,
      lunch: this.state.lunch,
      dinner: this.state.dinner,
      headache: this.state.headache,
      fatigue: this.state.fatigue,
      alert: this.state.alert,
      anxious: this.state.anxious,
      bloated: this.state.bloated,
      stomacheache: this.state.stomacheache,
      lowEnergy:this.state.lowEnergy,
      lethargic: this.state.lethargic
    })
    await console.log(results.data.data)
    this.props.navigation.navigate('Results')
  }

  render() {
    console.log(this.state.breakfast)
    console.log(this.state.lunch)
    console.log(this.state.dinner)
    console.log(this.state.value)
    return (
      <ImageBackground
      source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543255899/Remedi/Images/Begin_My_Search_Filled_In.png'}}
      style = {styles.ImageBackground}
      >
      <StatusBar barStyle = 'light-content' />

        <View style = {styles.header}>
        <Text style = {styles.header}> WHAT TIME IS IT? </Text>
        </View>

        <View style = {styles.meals}>
        <Button
          title = 'Breakfast'
          onPress = {() => this.setState({
            breakfast: !this.state.breakfast,
            lunch: false,
            dinner: false
          })}
          buttonStyle = {{
            backgroundColor: this.state.breakfast ? 'green' : 'transparent',
            width: 100,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 10,
          }}
          />
        <Button
          title = 'Lunch'
          onPress = {() => this.setState({
            breakfast: false,
            lunch: !this.state.lunch,
            dinner: false
          })}
          buttonStyle = {{
            backgroundColor: this.state.lunch ? 'green' : 'transparent',
            width: 100,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 10,
          }} />
        <Button
          title = 'Dinner'
          onPress = {() => this.setState({
            breakfast: false,
            lunch: false,
            dinner: !this.state.dinner
          })}
          buttonStyle = {{
            backgroundColor: this.state.dinner ? 'green' : 'transparent',
            width: 100,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 10,
          }} />
        </View>

        <View style = {styles.slider}>
        <Text style = {styles.header}> HOW HUNGRY ARE YOU? </Text>
        <Slider
          value = {this.state.value}
          minimumValue = {0}
          minimumTrackTintColor = 'red'
          maximumTrackTintColor = 'green'
          maximumValue = {5}
          trackStyle = {{
            marginLeft: 10,
            marginRight: 10
          }}
          onValueChange={(value) => this.setState({value: Math.floor(value)})}
        />
        </View>

        <View style = {styles.feeling}>
        <Text style = {styles.feeling}> HOW ARE YOU FEELING? </Text>
        </View>

        <View style = {styles.mood}>
        <Button
          title = 'Headache'
          onPress = {() => this.setState({headache: !this.state.headache})}
          buttonStyle = {{
            backgroundColor: this.state.headache ? 'green' : 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }} />
        <Button
          title = 'Anxious'
          onPress = {() => this.setState({anxious: !this.state.anxious})}
          buttonStyle = {{
            backgroundColor: this.state.anxious ? 'green' : 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }} />
        <Button
          title = 'Fatigue'
          onPress = {() => this.setState({fatigue: !this.state.fatigue})}
          buttonStyle = {{
            backgroundColor: this.state.fatigue ? 'green' : 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }} />
        <Button
          title = 'Stomacheache'
          onPress = {() => this.setState({stomacheache: !this.state.stomacheache})}
          buttonStyle = {{
            backgroundColor: this.state.stomacheache ? 'green' : 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
            width: 175,
          }} />
        <Button
          title = 'Alert'
          onPress = {() => this.setState({alert: !this.state.alert})}
          buttonStyle = {{
            backgroundColor: this.state.alert ? 'green' : 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }} />
        <Button
          title = 'Low Energy'
          onPress = {() => this.setState({lowEnergy: !this.state.lowEnergy})}
          buttonStyle = {{
            backgroundColor: this.state.lowEnergy ? 'green' : 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }} />
        <Button
          title = 'Bloated'
          onPress = {() => this.setState({bloated: !this.state.bloated})}
          buttonStyle = {{
            backgroundColor: this.state.bloated ? 'green' : 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
            width: 175,
          }} />
        <Button
          title = 'Lethargic'
          onPress = {() => this.setState({lethargic: !this.state.lethargic})}
          buttonStyle = {{
            backgroundColor: this.state.lethargic ? 'green' : 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }} />
        </View>

        <View>
        <Button
          title = 'Search'
          onPress = {() => this.handleSubmit()}
          buttonStyle = {{
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex:1,
    width,
    height,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  meals: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  sliderValue:{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  feeling: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  mood: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
})
