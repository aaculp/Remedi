import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, StatusBar, Dimensions, TouchableOpacity } from  'react-native'
import { Button, CheckBox } from 'react-native-elements';

const { width, height } = Dimensions.get('window')

export default class Restrictions extends Component {
  state = {
    checked: false,
  }

  render() {
    return(
      <View style = {styles.container}>

        <View style = {styles.bio}>
        <Text style = {styles.name}>Lily!</Text>
        <Text style = {styles.text}>Tell us more about yourself</Text>
        </View>

        <View style = {styles.checkbox}>
        <CheckBox
          title = 'Gluten Free'
          checked = {this.state.checked}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.setState({checked: !this.state.checked})}
        />
        <CheckBox
          title = 'Dairy Free'
          checked = {this.state.checked}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.setState({checked: !this.state.checked})}
        />
        <CheckBox
          title = 'Vegan'
          checked = {this.state.checked}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.setState({checked: !this.state.checked})}
        />
        <CheckBox
          title = 'Vegetarian'
          checked = {this.state.checked}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.setState({checked: !this.state.checked})}
        />
        <CheckBox
          title = 'Pescatarian'
          checked = {this.state.checked}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.setState({checked: !this.state.checked})}
        />
        <CheckBox
          title = 'Kosher'
          checked = {this.state.checked}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.setState({checked: !this.state.checked})}
        />
        <CheckBox
          title = 'Halal'
          checked = {this.state.checked}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.setState({checked: !this.state.checked})}
        />
        <CheckBox
          title = 'Mediterranean Diet'
          checked = {this.state.checked}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.setState({checked: !this.state.checked})}
        />
        <CheckBox
          title = 'Keto Diet'
          checked = {this.state.checked}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.setState({checked: !this.state.checked})}
        />
        <CheckBox
          title = 'Paleo Diet'
          checked = {this.state.checked}
          containerStyle = {{
            backgroundColor: 'transparent',
          }}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={() => this.setState({checked: !this.state.checked})}
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
  name: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50,
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

