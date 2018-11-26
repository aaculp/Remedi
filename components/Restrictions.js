import React, { Component } from 'react'
import { StyleSheet, View, Text, StatusBar, Dimensions, TouchableOpacity, ImageBackground } from  'react-native'
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

  handleSubmit(e) {
    e.preventDefault()
    if(this.state.gluten === true) {
      console.log(this.state)
    } else {
      console.log('didnt work')
    }
    this.props.navigation.navigate('Search')
  }

  render() {
    return (
      <ImageBackground
        source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543255900/Remedi/Images/Sign_Up.png'}}
        style = {styles.ImageBackground}
      >
      <View style = {styles.container}>
      <StatusBar barStyle = 'light-content' />
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
              }} />
            <Text style = {styles.name}>Lily!</Text>
          </View>
          <Text style = {styles.text}>Tell us more about yourself</Text>
        </View>

        <View style = {styles.checkbox}>
        <CheckBox
          title = 'Gluten Free'
          checked = {this.state.gluten}
          containerStyle = {{
            backgroundColor: 'rgb(245,222,179)',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }}
          checkedIcon = 'ambulance'
          uncheckedIcon = 'ambulance'
          onIconPress = {() => this.setState({gluten: !this.state.gluten})}
        />
        <CheckBox
          title = 'Dairy Free'
          checked = {this.state.dairy}
          containerStyle = {{
            backgroundColor: 'rgb(245,222,179)',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }}
          checkedIcon = 'ambulance'
          uncheckedIcon = 'ambulance'
          onIconPress = {() => this.setState({dairy: !this.state.dairy})}
        />
        <CheckBox
          title = 'Vegan'
          checked = {this.state.vegan}
          containerStyle = {{
            backgroundColor: 'rgb(245,222,179)',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }}
          checkedIcon = 'ambulance'
          uncheckedIcon = 'ambulance'
          onIconPress = {() => this.setState({vegan: !this.state.vegan})}
        />
        <CheckBox
          title = 'Vegetarian'
          checked = {this.state.vegy}
          containerStyle = {{
            backgroundColor: 'rgb(245,222,179)',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }}
          checkedIcon = 'ambulance'
          uncheckedIcon = 'ambulance'
          onIconPress = {() => this.setState({vegy: !this.state.vegy})}
        />
        <CheckBox
          title = 'Pescatarian'
          checked = {this.state.pescatarian}
          containerStyle = {{
            backgroundColor: 'rgb(245,222,179)',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }}
          checkedIcon = 'ambulance'
          uncheckedIcon = 'ambulance'
          onIconPress = {() => this.setState({pescatarian: !this.state.pescatarian})}
        />
        <CheckBox
          title = 'Kosher'
          checked = {this.state.kosher}
          containerStyle = {{
            backgroundColor: 'rgb(245,222,179)',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }}
          checkedIcon = 'ambulance'
          uncheckedIcon = 'ambulance'
          onIconPress = {() => this.setState({kosher: !this.state.kosher})}
        />
        <CheckBox
          title = 'Halal'
          checked = {this.state.halal}
          containerStyle = {{
            backgroundColor: 'rgb(245,222,179)',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }}
          checkedIcon = 'ambulance'
          uncheckedIcon = 'ambulance'
          onIconPress = {() => this.setState({halal: !this.state.halal})}
        />
        <CheckBox
          title = 'Mediterranean Diet'
          checked = {this.state.med}
          containerStyle = {{
            backgroundColor: 'rgb(245,222,179)',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 190,
          }}
          checkedIcon = 'ambulance'
          uncheckedIcon = 'ambulance'
          onIconPress = {() => this.setState({med: !this.state.med})}
        />
        <CheckBox
          title = 'Keto Diet'
          checked = {this.state.keto}
          containerStyle = {{
            backgroundColor: 'rgb(245,222,179)',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }}
          checkedIcon = 'ambulance'
          uncheckedIcon = 'ambulance'
          onIconPress = {() => this.setState({keto: !this.state.keto})}
        />
        <CheckBox
          title = 'Paleo Diet'
          checked = {this.state.paleo}
          containerStyle = {{
            backgroundColor: 'rgb(245,222,179)',
            borderRadius: 25,
            borderColor: 'white',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: 175,
          }}
          checkedIcon = 'ambulance'
          uncheckedIcon = 'ambulance'
          onIconPress = {() => this.setState({paleo: !this.state.paleo})}
        />
        </View>

        <TouchableOpacity>
        <Button
          title = 'Save'
          color = 'rgb(245,222,179)'
          buttonStyle = {{
            backgroundColor: 'darkgreen',
            width: 200,
            height: 50,
            borderRadius: 30,
            marginTop: 20,
          }}
          onPress = {(e) => this.handleSubmit(e)}
        />
        </TouchableOpacity>

      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: 'white'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white'
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  ImageBackground: {
    width,
    height,
  },
})

