import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = () => {

  let counter = 0;
  console.log(counter);
  return <View>
    <Text>Fight For Glory!</Text>
    <Button title="Begin the adventrue!" onPress={function(){ counter++; console.log(counter);}} />
  </View>
  /* return <Text style={styles.text}>Fight for Glory!</Text>; */
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
