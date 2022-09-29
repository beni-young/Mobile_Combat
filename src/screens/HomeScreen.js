import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Legendary!',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#87ceeb',      
      //Sets Header color
    },
    headerTintColor: '#f8f8ff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
    
  };
 
  render() {
    const { navigate } = this.props.navigation;
    return <View style={{backgroundColor: '#87ceeb'}}>
        <Text style={styles.container}>Take the Battle to the Runway Runway!</Text>
        <Image style={styles.mstImage} source={require('../../assets/10854488-16x9-2150x1210-1-300x169.jpg')} />
        <Button  title='Step onto the Catwalk!' onPress={() =>navigate('Create')}
        />
      </View>
  }
}
const styles = StyleSheet.create({
  container: {         
      backgroundColor: '#87ceeb', 
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 75,
      paddingBottom: 75,
      fontWeight: 'bold',
      color: '#f8f8ff',
       
      fontSize: 15,
  },
  mstImage: {
    width: 500,
    height: 300,
    alignSelf: 'center',
    borderRadius: 5,
  },
});