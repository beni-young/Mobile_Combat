import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Legendary!',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
 
  render() {
    const { navigate } = this.props.navigation;
    return <View>
        <Text>Let The Games Begin!</Text>
        <Button  title='BEGIN THE ADVENTURE!' onPress={() =>navigate('Create')}
        />
      </View>
  }
}
const styles = StyleSheet.create({
  container: {   
    justifyContent: 'center',      
      height: '50%',  
  },
});