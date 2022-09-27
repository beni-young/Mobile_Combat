import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const Creation = () => {

    const [counter, setCounter] = useState(0);

    const [strength, setStrength] = useState(0);
    const [health, setHealth] = useState(10);
    const [magic, setMagic] = useState(1);
    const [total, setTotal] = useState(15);


    console.log(counter);
    return <View>
      <Text>Grow in Power</Text>
      <Button title="Decrease" onPress={function(){ setStrength(strength - 1); setTotal(total + 1); console.log(strength);}} />
      <Text>Current Strength: {strength} </Text>
      <Button title="Increase" onPress={function(){ setStrength(strength + 1); setTotal(total - 1); console.log(strength);}} />

      <Button title="Decrease" onPress={function(){ setHealth(strength - 1); setTotal(total + 1); console.log(health);}} />
      <Text>Current health: {health}</Text>
      <Button title="Increase" onPress={function(){ setHealth(strength + 1); setTotal(total - 1); console.log(health);}} />

      <Button title="Decrease" onPress={function(){ setMagic(strength - 1); setTotal(total + 1); console.log(magic);}} />
      <Text>Current magic: {magic}</Text>
      <Button title="Increase" onPress={function(){ setMagic(strength + 1); setTotal(total - 1); console.log(magic);}} />

      <Text>Points Remaining: {total}</Text>

      <Text>Spend all your points to continue!</Text>
      <Button title="Click Me To Embark On Your Journey!" onPress={function(){ counter; console.log(counter);}} />
    </View>
    /* return <Text style={styles.text}>Fight for Glory!</Text>; */
  }




const styles = StyleSheet.create({
    text: {
      fontSize: 30,
    },
  });

export default Creation;