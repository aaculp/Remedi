import React, { Component } from 'react'
import { StyleSheet, View, Text, StatusBar, Dimensions, TouchableOpacity, ImageBackground } from  'react-native'
import { Button, CheckBox } from 'react-native-elements';
import axios from 'axios'

const { width, height } = Dimensions.get('window')

export default class Restrictions extends Component {
  state = {
    gluten: false,
    vegan: false,
    pescatarian: false,
    halal: false,
    keto: false,
    dairy: false,
    vegetarian: false,
    kosher: false,
    med: false,
    paleo: false,
    id: '',
    name: '',
  }

  componentWillMount() {
    let id = this.props.navigation.getParam('newId')
    let name = this.props.navigation.getParam('profilename')
    console.log('this is in component will mount ON RESTRICTIONS', id)
    console.log('this is in component will mount on RESTRICTIONS', name)
    this.setState({
      id: id,
      name: name,
    })
  }

  handleSubmit = async () => {
    console.log(this.state.id)
    let results = await axios.put(`http://173.2.6.21:3001/remedi/${this.state.id}`, {
      gluten: this.state.gluten,
      vegan: this.state.vegan,
      pescatarian: this.state.pescatarian,
      halal: this.state.halal,
      keto: this.state.keto,
      dairy: this.state.dairy,
      vegetarian: this.state.vegetarian,
      kosher: this.state.kosher,
      med: this.state.med,
      paleo: this.state.paleo
    })
    console.log(results.data.data)
    console.log(this.state.id)
    let id = this.state.id
    this.props.navigation.navigate('Search', { id: id })
  }

  render() {
    return (
      <ImageBackground
        source = {{uri: 'https://res.cloudinary.com/aaronculp/image/upload/v1543255900/Remedi/Images/Sign_Up.png'}}
        style = {styles.ImageBackground}
      >
      <StatusBar barStyle = 'light-content' />
        <View style = {styles.bio}>
          <Text style = {styles.name}>{this.state.name}</Text>
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
          onPress = {() => this.setState({gluten: !this.state.gluten})}
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
          onPress = {() => this.setState({dairy: !this.state.dairy})}
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
          onPress = {() => this.setState({vegan: !this.state.vegan})}
        />
        <CheckBox
          title = 'Vegetarian'
          checked = {this.state.vegetarian}
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
          onPress = {() => this.setState({vegetarian: !this.state.vegetarian})}
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
          onPress = {() => this.setState({pescatarian: !this.state.pescatarian})}
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
          onPress = {() => this.setState({kosher: !this.state.kosher})}
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
          onPress = {() => this.setState({halal: !this.state.halal})}
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
          onPress = {() => this.setState({med: !this.state.med})}
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
          onPress = {() => this.setState({keto: !this.state.keto})}
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
          onPress = {() => this.setState({paleo: !this.state.paleo})}
        />
        </View>

        <TouchableOpacity style = {styles.SaveButton}>
        <Button
          title = 'Save'
          color = 'rgb(245,222,179)'
          buttonStyle = {{
            backgroundColor: 'darkgreen',
            justifyContent: 'center',
            alignItems: 'center',
            width: 200,
            height: 50,
            borderRadius: 30,
            marginTop: 20,
          }}
          onPress = {() => this.handleSubmit()}
        />
        </TouchableOpacity>

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
  bio: {
    marginTop: 150,
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
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
    textAlign: 'center',
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 40
  },
  SaveButton: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

