import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, StatusBar, Dimensions, TouchableOpacity } from  'react-native'
import { Button, CheckBox } from 'react-native-elements';

const { width, height } = Dimensions.get('window')

export default class Restrictions extends Component {
  state = {
    gluten: false,
    dairy: false,
    vegan: false,
    vegy: false,
    pescatarian: false,
    kosher: false,
    halal: false,
    med: false,
    keto: false,
    paleo: false,
  }

  render() {
    return(
      <View style = {styles.container}>
      <StatusBar barStyle = 'light-content'/>
        <View style = {styles.bio}>
          <View style = {styles.bioButton}>
            <Button
              leftIcon = {{name: 'chevron-left', type: 'font-awesome', size: 50}}
              color = 'white'
              onPress = {() => this.props.navigation.navigate('ProfileSettings')}
              buttonStyle = {{
                width: 50,
                left: -150,
                backgroundColor: 'transparent',

              }}/>
            <Text style = {styles.name}>Lily!</Text>
          </View>
          <Text style = {styles.text}>Tell us more about yourself</Text>
        </View>

        <View style = {styles.checkbox}>
        <CheckBox
          title = 'Gluten Free'
          checked = {this.state.gluten}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='ambulance'
          uncheckedIcon='ambulance'
          onPress={() => this.setState({gluten: !this.state.gluten})}
        />
        <CheckBox
          title = 'Dairy Free'
          checked = {this.state.dairy}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='ambulance'
          uncheckedIcon='ambulance'
          onPress={() => this.setState({dairy: !this.state.dairy})}
        />
        <CheckBox
          title = 'Vegan'
          checked = {this.state.vegan}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='ambulance'
          uncheckedIcon='ambulance'
          onPress={() => this.setState({vegan: !this.state.vegan})}
        />
        <CheckBox
          title = 'Vegetarian'
          checked = {this.state.vegy}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='ambulance'
          uncheckedIcon='ambulance'
          onPress={() => this.setState({vegy: !this.state.vegy})}
        />
        <CheckBox
          title = 'Pescatarian'
          checked = {this.state.pescatarian}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='ambulance'
          uncheckedIcon='ambulance'
          onPress={() => this.setState({pescatarian: !this.state.pescatarian})}
        />
        <CheckBox
          title = 'Kosher'
          checked = {this.state.kosher}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='ambulance'
          uncheckedIcon='ambulance'
          onPress={() => this.setState({kosher: !this.state.kosher})}
        />
        <CheckBox
          title = 'Halal'
          checked = {this.state.halal}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='ambulance'
          uncheckedIcon='ambulance'
          onPress={() => this.setState({halal: !this.state.halal})}
        />
        <CheckBox
          title = 'Mediterranean Diet'
          checked = {this.state.med}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='ambulance'
          uncheckedIcon='ambulance'
          onPress={() => this.setState({med: !this.state.med})}
        />
        <CheckBox
          title = 'Keto Diet'
          checked = {this.state.keto}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='ambulance'
          uncheckedIcon='ambulance'
          onPress={() => this.setState({keto: !this.state.keto})}
        />
        <CheckBox
          title = 'Paleo Diet'
          checked = {this.state.paleo}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='ambulance'
          uncheckedIcon='ambulance'
          onPress={() => this.setState({paleo: !this.state.paleo})}
        />
        </View>

        <TouchableOpacity>
        <Button
          title = 'Save'
          color = 'white'
          buttonStyle = {{
            backgroundColor: 'transparent',
            width: 200,
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 20,
          }}
          onPress = {() => this.props.navigation.navigate('Search')}
        />
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bio: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bioButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50,
    marginLeft: -75,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  checkbox: {
    color: 'white',
  }
})

