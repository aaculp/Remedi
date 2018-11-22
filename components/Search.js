import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Button, Slider } from 'react-native-elements'

const { width, height } = Dimensions.get('window')

export default class Search extends Component {
  state = {
    value: 0,
  }

  render() {
    return(
      <View style = {styles.container}>

        <Button
          title = '<'
          titleSize = {40}
          color = 'white'
          onPress = {() => this.props.navigation.navigate('Restrictions')}
          buttonStyle = {{
            marginTop: 50,
            width: 50,
            backgroundColor: 'transparent',
          }}/>
        <View style = {styles.header}>
        <Text style = {styles.header}> Select One: </Text>
        </View>

        <View style = {styles.meals}>
        <Button title = 'Breakfast' />
        <Button title = 'Lunch' />
        <Button title = 'Dinner' />
        </View>

        <View style = {styles.slider}>
        <Slider
          value={this.state.value}
          minimumValue = {0}
          maximumValue = {5}
          onValueChange={(value) => this.setState({value: Math.floor(value)})} />
        <Text style = {styles.sliderValue}>Value: {this.state.value}</Text>
        </View>

        <View style = {styles.feeling}>
        <Text style = {styles.feeling}> How are you feeling? </Text>
        </View>

        <View style = {styles.mood}>
        <Button
          title = 'Headache'
          buttonStyle = {{
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
            width: (width / 2),
          }} />
        <Button
          title = 'Anxious'
          buttonStyle = {{
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }} />
        <Button
          title = 'Fatigue'
          buttonStyle = {{
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }} />
        <Button
          title = 'Stomacheache'
          buttonStyle = {{
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
            width: (width / 2),
          }} />
        <Button
          title = 'Alert'
          buttonStyle = {{
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }} />
        <Button
          title = 'Low Energy'
          buttonStyle = {{
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }} />
        <Button
          title = 'Bloated'
          buttonStyle = {{
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
            width: (width / 2),
          }} />
        <Button
          title = 'Unproductive'
          buttonStyle = {{
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }} />
        </View>

        <View>
        <Button
          title = 'Search'
          buttonStyle = {{
            backgroundColor: 'pink',
          }}
        />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
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
  slider: {

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
  }
})
