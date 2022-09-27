import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CreationCounter from '../../Components/CreationCounter';


const Creation = () => {

    const [strength, setStrength] = useState(1);
    const [health, setHealth] = useState(10);
    const [magic, setMagic] = useState(1);
    const [total, setTotal] = useState(15); 

    const setDecrease = (type) => {

        if(type === 'strength'){
            strength - 1 < 1 ? null : (setStrength(strength - 1), setTotal(total + 1));
        }

        if(type === 'health'){
            health - 10 < 10 ? null : (setHealth(health - 10), setTotal(total + 1));
        }

        if(type === 'magic'){
            magic - 1 < 1 ? null : (setMagic(magic - 1), setTotal(total + 1));
        }
    }

    const setIncrease = (type) => {

        if(type === 'strength'){
            total - 1 < 0 ? null : (setStrength(strength + 1), setTotal(total - 1)); 
        }

        if(type === 'health'){
            total - 1 < 0  ? null : (setHealth(health + 10), setTotal(total - 1)); 
        }

        if(type === 'magic'){
            total - 1 < 0  ? null : (setMagic(magic + 1), setTotal(total - 1));
        }
    }


    //console.log(total);
    return <View>
      <Text>Grow in Power</Text>
      <Text></Text>
      <Text></Text>
      <CreationCounter name="strength" value={strength}
      onDecrease={ () => {setDecrease('strength')}}       
      onIncrease={ () => {setIncrease('strength')}}    
      />
      <Text></Text>
      <Text></Text>
      <CreationCounter name="health" value={health}
      onDecrease={ () => {setDecrease('health')}}       
      onIncrease={ () => {setIncrease('health')}}  
      />
      <Text></Text>
      <Text></Text>
      <CreationCounter name="magic" value={magic}
      onDecrease={ () => {setDecrease('magic')}}       
      onIncrease={ () => {setIncrease('magic')}}      
      />
      <Text></Text>
      <Text></Text>
      <Text>Points Remaining: {total}</Text>
      <Text></Text>
      <Text></Text>
      <Text>Spend all your points to continue!</Text>
      <Text></Text>
      <Text></Text>
      <Button title="Click Me To Embark On Your Journey!" />
   </View>
    
     
  }




const styles = StyleSheet.create({
    text: {
      fontSize: 30,
    },
  });

export default Creation;