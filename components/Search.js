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
          leftIcon = {{name: 'chevron-left', type: 'font-awesome', size: 30}}
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
        <Button
          title = 'Breakfast'
          buttonStyle = {{
            backgroundColor: 'transparent',
            width: 100,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 10,
          }} />
        <Button
          title = 'Lunch'
          buttonStyle = {{
            backgroundColor: 'transparent',
            width: 100,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 10,
          }} />
        <Button
          title = 'Dinner'
          buttonStyle = {{
            backgroundColor: 'transparent',
            width: 100,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 10,
          }} />
        </View>

        <View style = {styles.slider}>
        <Text style = {styles.header}> How Hungry Are You? </Text>
        <Slider
          value={this.state.value}
          minimumValue = {0}
          maximumValue = {5}
          onValueChange={(value) => this.setState({value: Math.floor(value)})} />
        <Text style = {styles.sliderValue}>Value: {this.state.value}</Text>
        </View>

        <View style = {styles.feeling}>
        <Text style = {styles.feeling}> How Are You Feeling? </Text>
        </View>

        <View style = {styles.mood}>
        <Button
          title = 'Headache'
          buttonStyle = {{
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
            width: (width / 2),
          }} />
        <Button
          title = 'Anxious'
          buttonStyle = {{
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }} />
        <Button
          title = 'Fatigue'
          buttonStyle = {{
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }} />
        <Button
          title = 'Stomacheache'
          buttonStyle = {{
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
            width: (width / 2),
          }} />
        <Button
          title = 'Alert'
          buttonStyle = {{
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }} />
        <Button
          title = 'Low Energy'
          buttonStyle = {{
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }} />
        <Button
          title = 'Bloated'
          buttonStyle = {{
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 15,
            width: (width / 2),
          }} />
        <Button
          title = 'Unproductive'
          buttonStyle = {{
            backgroundColor: 'transparent',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }} />
        </View>

        <View>
        <Button
          title = 'Search'
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
